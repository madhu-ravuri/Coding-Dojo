package com.madhu.ninjagold;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Random;

@Controller
public class GoldController {
	private int gold = 0;
	private Random ran = new Random();
	
	@RequestMapping("/gold")
	public String home(Model model) {
		model.addAttribute("gold", gold);
		return "index.jsp";
	}
	
	@RequestMapping("/submit/{location}")
	public String getgold(@PathVariable("location") String location) {
		int add = 0;
		if (location.equals("farm")) {
			add = ran.nextInt(11) + 10;
			gold += add;
			System.out.println("farm, added " + add);
		}
		else if (location.equals("cave")) {
			add = ran.nextInt(6) + 5;
			gold += add;
			System.out.println("cave, added " + add);
		}
		else if (location.equals("house")) {
			add = ran.nextInt(4) + 2;
			gold += add;
			System.out.println("house, added " + add);
		}
		else if (location.equals("casino")) {
			add = ran.nextInt(101) - 50;
			gold += add;
			System.out.println("casino, added " + add);
		}
		
		return "redirect:/gold";
	}

}
