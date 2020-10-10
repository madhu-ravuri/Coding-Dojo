package com.madhu.languages.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.madhu.languages.models.Language;
import com.madhu.languages.services.LanguageService;

@Controller
public class LanguagesController {
	private LanguageService langService;
	
	public LanguagesController(LanguageService langService) {
		this.langService = langService;
	}
	
	@RequestMapping("/languages")
	public String index(Model model, @ModelAttribute("language") Language lang) {
		List<Language> languages = langService.allLanguages();
        model.addAttribute("languages", languages);
        return "/languages/index.jsp";
	}
	
	@RequestMapping(value="/languages", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("language") Language lang, BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<Language> langs = langService.allLanguages();
			model.addAttribute("languages", langs);
			return "/languages/index.jsp";
		} else {
			langService.createLanguage(lang);
			return "redirect:/languages";
		}
	}
	
	@RequestMapping("/languages/{id}")
    public String showLanguage(@PathVariable("id") Long id, Model model) {
    	Language language = langService.findLanguage(id);
    	model.addAttribute("language", language);
    	
    	return "/languages/show.jsp";
    }
	
	@RequestMapping("/languages/edit/{id}")
    public String edit(@PathVariable("id") Long id, Model model) {
        Language language = langService.findLanguage(id);
        model.addAttribute("language", language);
        return "/languages/edit.jsp";
    }
    
    @RequestMapping(value="/languages/edit/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("language") Language lang, BindingResult result) {
        if (result.hasErrors()) {
        	System.out.println("Errors");
            return "/languages/edit.jsp";
        } else {
            langService.updateLanguage(lang);
            return "redirect:/languages";
        }
    }
    
    @RequestMapping(value="/languages/delete/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
        langService.deleteLanguage(id);
        return "redirect:/languages";
    }

}
