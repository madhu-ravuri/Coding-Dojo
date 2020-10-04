package com.madhu.pokemon;

import java.util.ArrayList;

public abstract class AbstractPokemon implements PokemonInterface {
	private ArrayList<Pokemon> myPokemons = new ArrayList<Pokemon>();
	
	public ArrayList<Pokemon> openPokedex() {
		return myPokemons;
	}
	
	@Override
	public Pokemon createPokemon(String name, int health, String type) {
		Pokemon caught = new Pokemon(name, health, type);
		myPokemons.add(caught);
		return caught;
	}
	
	public String pokemonInfo(Pokemon p) {
		return String.format("Name: %s - Type: %s - Health: %s", p.getName(),  p.getType(), p.getHealth());
	}
}
