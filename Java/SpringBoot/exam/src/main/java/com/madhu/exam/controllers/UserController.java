package com.madhu.exam.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.madhu.exam.models.Task;
import com.madhu.exam.models.User;
import com.madhu.exam.services.TaskService;
import com.madhu.exam.services.UserService;
import com.madhu.exam.validators.UserValidator;

@Controller
public class UserController {
	private final UserService userService;
	private final UserValidator userValidator;
	private final TaskService taskService;
	
	public UserController(UserService userService, UserValidator userValidator, TaskService taskService) {
		this.userService = userService;
		this.userValidator = userValidator;
		this.taskService = taskService;
	}
	
	@RequestMapping("/register")
	public String registerPage(@ModelAttribute("user") User user) {
		return "register.jsp";
	}
	
	@RequestMapping(value="/registration", method=RequestMethod.POST)
	public String registerNew(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
		userValidator.validate(user, result);
		if (result.hasErrors()) {
			System.out.println("Errors found");
			return "register.jsp";
		}
		else {
			User u = userService.registerUser(user);
			session.setAttribute("userId", u.getId());
			session.setAttribute("currentSessionUser", u);
			return "redirect:/tasks";
		}
	}
	
	@RequestMapping("/user-login")
	public String loginPage() {
		return "login.jsp";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@RequestParam("email") String email, @RequestParam("password") String password, HttpSession session, Model model) {
		boolean isAuthenticated = userService.authenticateUser(email, password);
		if (isAuthenticated) {
			User u = userService.findByEmail(email);
			session.setAttribute("userId", u.getId());
			session.setAttribute("currentSessionUser", u); 
			return "redirect:/tasks";
		}
		else {
			System.out.println("Login failed");
			model.addAttribute("error", "Invalid credentials, please try again.");
			return "login.jsp";
		}
	}
	
	@RequestMapping("/tasks")
	public String tasksHome(HttpSession session, Model model) {
		Object currentUser = session.getAttribute("currentSessionUser");
		List<Task> tasks = taskService.allTasks();
		model.addAttribute("user", currentUser);
		model.addAttribute("tasks", tasks);
		return "home.jsp";
	}
	
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/user-login";
	}

}
