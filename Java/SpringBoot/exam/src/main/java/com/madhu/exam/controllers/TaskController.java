package com.madhu.exam.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.madhu.exam.models.Task;
import com.madhu.exam.models.User;
import com.madhu.exam.services.TaskService;
import com.madhu.exam.services.UserService;

@Controller
public class TaskController {
	private final TaskService taskService;
	private final UserService userService;
	
	public TaskController(TaskService taskService, UserService userService) {
		this.taskService = taskService;
		this.userService = userService;
	}
	
	@RequestMapping("/tasks/new")
	public String newTask(@ModelAttribute("task") Task task, Model model, HttpSession session) {
		List<User> users = userService.allUsers();
		model.addAttribute("users", users);
		return "newtask.jsp";
	}
	
	@PostMapping("/createtask")
	public String createTask(@Valid @ModelAttribute("task") Task task, BindingResult result, Model model, HttpSession session) {
		if (result.hasErrors()) {
			System.out.println(result.getAllErrors());
			List<User> users = userService.allUsers();
			model.addAttribute("errors", result.getAllErrors());
			model.addAttribute("users", users);
			return "newtask.jsp";
		}
		else {
			Object loggedIn = session.getAttribute("currentSessionUser");
			User user = (User) loggedIn;
			taskService.createTask(task, user);
			return "redirect:/tasks";
		}
	}
	
	@RequestMapping("/tasks/{id}")
	public String viewTask(@PathVariable("id") Long id, Model model) {
		Task task = taskService.findTask(id);
		model.addAttribute("task", task);
		return "view.jsp";
	}
	
	@RequestMapping("/tasks/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model, HttpSession session) {
		Task task = taskService.findTask(id);
		List<User> users = userService.allUsers();
        model.addAttribute("task", task);
        model.addAttribute("users", users);
        return "edit.jsp";
    }
	
	@RequestMapping(value="/tasks/edit/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("task") Task task, BindingResult result, Model model, @PathVariable("id") Long id, HttpSession session) {
        if (result.hasErrors()) {
        	System.out.println("Errors");
        	List<User> users = userService.allUsers();
        	Task taskEdit = taskService.findTask(id);
        	model.addAttribute("task", taskEdit);
        	model.addAttribute("users", users);
        	Object loggedIn = session.getAttribute("currentSessionUser");
			User user = (User) loggedIn;
			model.addAttribute("user", user);
            return "edit.jsp";
        } else {
            taskService.update(task);
            return "redirect:/tasks/{id}";
        }
    }
	
	@RequestMapping(value="/tasks/delete/{id}", method=RequestMethod.POST)
	public String deleteTask(@PathVariable("id") Long id) {
		taskService.delete(id);
		return "redirect:/tasks";
	}

}
