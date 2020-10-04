package com.codingdojo.zookeeper;

public class Gorilla extends Mammal {
	
	public void throwSomething() {
		System.out.println("Oh no! The gorilla has thrown something!");
		this.energyLevel -= 5;
	}
	
	public void eatBananas() {
		System.out.println("Yum! The gorilla is enjoying some bananas.");
		this.energyLevel += 10;
	}
	
	public void climb() {
		System.out.println("The gorilla has climbed a tree.");
		this.energyLevel -= 10;
	}
	
}
