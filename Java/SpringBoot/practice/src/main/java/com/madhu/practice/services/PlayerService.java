package com.madhu.practice.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.madhu.practice.models.Player;
import com.madhu.practice.repositories.PlayerRepository;

@Service
public class PlayerService {
	private PlayerRepository playRepo;
	
	public PlayerService(PlayerRepository playRepo) {
		this.playRepo = playRepo;
	}
	
	public List<Player> allPlayers() {
		return playRepo.findAll();
	}
	
	public Player createPlayer(Player p) {
		return playRepo.save(p);
	}
	
	public Player findPlayer(Long id) {
		Optional<Player> optional = playRepo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		} else { return null; }
	}
	
	public Player update(Long id, String firstName, String lastName, int number) {
		Player p = this.findPlayer(id);
		p.setFirstName(firstName);
		p.setLastName(lastName);
		p.setNumber(number);
		return playRepo.save(p);
	}
	
	public Player update(Player p) {
		return playRepo.save(p);
	}
	
	public void delete(Long id) {
		playRepo.deleteById(id);
	}

}
