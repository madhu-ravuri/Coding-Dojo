package com.codingdojo.objectmaster;

public class HumanTest {

	public static void main(String[] args) {
		Human p1 = new Human();
		Human p2 = new Human();
		
		p1.attack(p2);
		
		System.out.println(p2.health);

	}

}
