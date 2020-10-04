package com.codingdojo.objectmaster;

public class Wizard extends Human {
	protected int health = 50;
	protected int intelligence = 8;
	
	public void healHuman(Human h) {
		h.health += intelligence;
	}
	
	public void fireball(Human h) {
		int damage = intelligence * 3;
		h.health -= damage;
	}
}
