package com.madhu.pokemon;

public class Pokemon {
	private String name;
	private int health;
	private String type;
	public int pokeCount = 0;
	
	public Pokemon(String name, int health, String type) {
		this.name = name;
		this.health = health;
		this.type = type;
		pokeCount++;
	}
	
	public void attackPokemon(Pokemon p) {
		p.health -= 10;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String pokeName) {
		this.name = pokeName;
	}
	
	public int getHealth() {
		return health;
	}
	
	public void setHealth(int pokeHealth) {
		this.health = pokeHealth;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String pokeType) {
		this.type = pokeType;
	}
}
