package com.madhu.pokemon;

public class PokemonTest {

	public static void main(String[] args) {
		Pokemon charmander = new Pokemon("Charmander", 30, "fire");
		Pokemon altaria = new Pokemon("Altaria", 50, "dragon-flying");
		
		charmander.attackPokemon(altaria);
		
		Pokedex myPokedex = new Pokedex();
		myPokedex.createPokemon("Mankey", 35, "fighting");
		myPokedex.createPokemon("Totodile", 35, "water");
		myPokedex.createPokemon("Cyndaquil", 35, "fire");
		
		myPokedex.listPokemon();
		System.out.println(myPokedex.pokemonInfo(charmander));

	}

}
