package com.madhu.pokemon;

import java.util.ArrayList;

public class Pokedex extends AbstractPokemon {
	@Override
	public void listPokemon() {
		ArrayList<Pokemon> myPokemons = openPokedex();
		for (Pokemon pokemon : myPokemons) {
			System.out.println(pokemon.getName());
		}
	}
}
