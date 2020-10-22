package com.madhu.prodcat.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.madhu.prodcat.models.Category;
import com.madhu.prodcat.services.CategoryService;

@Controller
public class CategoryController {
	private CategoryService categoryService;
	
	public CategoryController(CategoryService categoryService) {
		this.categoryService = categoryService;
	}
	
	@RequestMapping("/categories/new")
	public String newCategory(@ModelAttribute("category") Category category) {
		return "newcat.jsp";
	}
	
	@PostMapping("/newcategory")
	public String createCategory(@Valid @ModelAttribute("category") Category category, BindingResult result, Model model) {
		if (result.hasErrors()) {
			System.out.println("Errors found: " + result);
			return "newcat.jsp";
		}
		else {
			categoryService.createCategory(category);
			return "redirect:/categories/new";
		}
	}

}
