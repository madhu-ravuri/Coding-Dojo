package com.madhu.displaydate;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;

@Controller
public class DateController {
	@RequestMapping("/")
	public String home() {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
	public String date(Model model) {
		Date today = new Date();
		
		model.addAttribute("today", String.format("%tA, the %<td of %<tB, %<tY", today));
		return "datedisplay.jsp";
	}
	
	@RequestMapping("/time")
	public String time(Model model) {
		Date time = new Date();
		
		model.addAttribute("currTime", String.format("%tI:%<tM %<Tp", time));
		return "timedisplay.jsp";
	}

}
