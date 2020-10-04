package com.codingdojo.objectmaster;

public class Samurai {
	protected int health = 200;
	public int count = 0;
	
	public Samurai() {
		count++;
	}
	
	public void deathBlow(Human h) {
		h.health = 0;
		health = health/2;
	}
	
	public void meditate() {
		int boost = health/2;
		health += boost;
	}
	
	public int howMany() {
		return count;
	}

}
