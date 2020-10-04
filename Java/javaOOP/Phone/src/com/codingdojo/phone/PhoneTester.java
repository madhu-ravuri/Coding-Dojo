package com.codingdojo.phone;

public class PhoneTester {

	public static void main(String[] args) {
		Galaxy s9 = new Galaxy("S9", 99, "Verizon", "Ring Ring Ring!");
		IPhone X = new IPhone("X", 100, "AT&T", "Zzing!");
		
		s9.displayInfo();
		System.out.println(s9.ring());
		System.out.println(s9.unlock());
		
		X.displayInfo();
		System.out.println(X.ring());
		System.out.println(X.unlock());
		

	}

}
