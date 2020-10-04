package com.codingdojo.zookeeper;

public class Bat extends Mammal {
	public int energyLevel = 300;
	
	public void fly() {
		System.out.println("Schwup!");
		this.energyLevel -= 50;
	}
	
	public void eatHumans() {
		System.out.println("cronch cronch cronch");
		this.energyLevel += 25;
	}
	
	public void attackTown() {
		System.out.println("[distant screaming noises]");
		this.energyLevel -= 100;
	}

}
