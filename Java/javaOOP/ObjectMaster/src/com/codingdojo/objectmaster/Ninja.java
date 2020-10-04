package com.codingdojo.objectmaster;

public class Ninja extends Human {
	protected int stealth = 10;
	
	public void steal(Human h) {
		h.health -= stealth;
		health += stealth;
	}
	
	public void runaway() {
		health -= 10;
	}

}
