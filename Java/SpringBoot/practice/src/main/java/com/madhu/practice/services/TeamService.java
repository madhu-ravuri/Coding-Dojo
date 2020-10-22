package com.madhu.practice.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.madhu.practice.models.Team;
import com.madhu.practice.repositories.TeamRepository;

@Service
public class TeamService {
	private final TeamRepository teamRepo;
	
	public TeamService(TeamRepository teamRepo) {
		this.teamRepo = teamRepo;
	}
	
	public List<Team> allTeams() {
		return teamRepo.findAll();
	}
	
	public Team createTeam(Team t) {
		return teamRepo.save(t);
	}
	
	public Team findTeam(Long id) {
		Optional<Team> optional = teamRepo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}
		else { return null; }
	}
	
	public void delete(Long id) {
		teamRepo.deleteById(id);
	}

}
