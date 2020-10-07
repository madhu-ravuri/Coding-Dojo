package com.madhu.dojosurvey;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class SurveyController {
	@RequestMapping("/")
	public String home() {
		return "index.jsp";
	}
	
	@RequestMapping(value="/submit", method=RequestMethod.POST)
	public String submit(RedirectAttributes redirectAttributes, @RequestParam(value="name") String name, 
			@RequestParam(value="location") String location, @RequestParam(value="language") String language,
			@RequestParam(value="comment") String comment) {
		if (name.isEmpty()) {
			return "redirect:/";
		}
		redirectAttributes.addFlashAttribute("name", name);
		redirectAttributes.addFlashAttribute("location", location);
		redirectAttributes.addFlashAttribute("language", language);
		redirectAttributes.addFlashAttribute("comment", comment);
		
		return "redirect:/result";
	}
	
	
	@RequestMapping("/result")
	public String result() {
		return "result.jsp";
	}

}
