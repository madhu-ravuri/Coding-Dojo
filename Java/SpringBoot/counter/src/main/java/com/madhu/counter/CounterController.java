package com.madhu.counter;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CounterController {
	private int count = 0;
	
	public int getCount() {
		return count;
	}
	
	public void setCount(int count) {
		this.count = count;
	}
	
	@RequestMapping("/")
	public String home(HttpSession session) {
		int visits = getCount();
		visits++;
		setCount(visits);
		
		session.setAttribute("count", visits);
		return "index.jsp";
	}
	
	@RequestMapping("/counter")
	public String counter(HttpSession session, Model model) {
		Integer visits = (Integer) session.getAttribute("count");
		if (visits == null) {
			visits = 0;
		}
		model.addAttribute("count", visits);
		return "counter.jsp";
	}

}
