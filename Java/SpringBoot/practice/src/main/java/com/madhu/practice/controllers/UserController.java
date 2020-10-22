package com.madhu.practice.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.madhu.practice.models.User;
import com.madhu.practice.services.UserService;
import com.madhu.practice.validators.UserValidator;

@Controller
public class UserController {
	private final UserService userService;
	private final UserValidator userValidator;
	
	public UserController(UserService userService, UserValidator userValidator) {
		this.userService = userService;
		this.userValidator = userValidator;
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
			return "redirect:/home";
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
			return "redirect:/home";
		}
		else {
			System.out.println("Login failed");
			model.addAttribute("error", "Invalid credentials, please try again.");
			return "login.jsp";
		}
	}
	
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/user-login";
	}

}
