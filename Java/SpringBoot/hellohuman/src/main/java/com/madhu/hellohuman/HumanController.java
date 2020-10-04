package com.madhu.hellohuman;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class HumanController {
	@RequestMapping("/")
	public String index(@RequestParam(value="Fname", required=false) String firstName, @RequestParam(value="Lname", required=false) String lastName) {
		if (firstName == null && lastName == null) {
			return "<html>\n" + "<header><title>Welcome</title></header>\n" +
			"<body>\n" + "<h1>Hello Human!</h1>\n <p>Welcome to SpringBoot!</p></body>\n" + "</html>";
		}
		else if(lastName == null) {
			lastName = "";
			return "<html>\n" + "<header><title>Welcome</title></header>\n" +
	        "<body>\n" + "<h1>Hello " + firstName + "!</h1>\n" + "<p>Welcome to SpringBoot!</p></body>\n" + "</html>";
			}
		else {
		return "<html>\n" + "<header><title>Welcome</title></header>\n" +
        "<body>\n" + "<h1>Hello " + firstName + " " + lastName + "!</h1>\n" + "<p>Welcome to SpringBoot!</p></body>\n" + "</html>";
		}
	}
}
