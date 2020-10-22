package com.madhu.prodcat.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.madhu.prodcat.models.Product;
import com.madhu.prodcat.services.ProductService;

@Controller
public class ProductController {
	private ProductService productService;
	
	public ProductController(ProductService productService) {
		this.productService = productService;
	}
	
	@RequestMapping("/products/new")
	public String newProduct(@ModelAttribute("product") Product product) {
		return "newProduct.jsp";
	}
	
	@RequestMapping(value="/newproduct", method=RequestMethod.POST)
	public String createProduct(@Valid @ModelAttribute("product") Product product, BindingResult result, Model model) {
		if (result.hasErrors()) {
			System.out.println("Errors found: " + result);
			return "newProduct.jsp";
		}
		else {
			productService.createProduct(product);
			return "redirect:/products/new";
		}
	}

}
