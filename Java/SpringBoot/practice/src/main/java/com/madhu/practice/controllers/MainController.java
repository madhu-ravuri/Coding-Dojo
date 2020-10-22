package com.madhu.practice.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.madhu.practice.models.Player;
import com.madhu.practice.models.Team;
import com.madhu.practice.services.PlayerService;
import com.madhu.practice.services.TeamService;

@Controller
public class MainController {
	private final TeamService teamService;
	private final PlayerService playService;
	
	public MainController(TeamService teamService, PlayerService playService) {
		this.teamService = teamService;
		this.playService = playService;
	}
	
	@RequestMapping("/home")
	public String home(HttpSession session, Model model) {
		model.addAttribute("teams", teamService.allTeams());
		return "home.jsp";
	}
	
	// TEAMS METHODS
	
	@RequestMapping("/teams/new")
	public String newTeam(@ModelAttribute("team") Team team) {
			return "newTeam.jsp";
	}
	
	@PostMapping("/createteam")
	public String createTeam(@Valid @ModelAttribute("team") Team team, BindingResult result) {
		if (result.hasErrors()) {
			System.out.println(result.getAllErrors());
			return "newTeam.jsp";
		}
		else {
			teamService.createTeam(team);
			return "redirect:/home";
		}
	}
	
	@RequestMapping("/teams/{id}")
	public String viewTeam(@PathVariable("id") Long id, Model model) {
		Team team = teamService.findTeam(id);
		List<Player> players = team.getPlayers();
		model.addAttribute("team", team);
		model.addAttribute("players", players);
		return "view.jsp";
	}
	
	// have request method .POST instead of .DELETE
	@RequestMapping(value="/teams/delete/{id}", method=RequestMethod.POST)
    public String destroyTeam(@PathVariable("id") Long id) {
        teamService.delete(id);
        return "redirect:/home";
    }
	
	//PLAYERS METHODS
	
	@RequestMapping("/players/add")
	public String addPlayer(@ModelAttribute("player") Player player, Model model, HttpSession session) {
		List<Team> teams = teamService.allTeams();
		model.addAttribute("teams", teams);
		return "newPlayer.jsp";
	}
	
	@PostMapping("/createplayer")
	public String createPlayer(@Valid @ModelAttribute("player") Player player, BindingResult result, Model model, HttpSession session) {
		if (result.hasErrors()) {
			System.out.println(result.getAllErrors());
			List<Team> teams = teamService.allTeams();
			model.addAttribute("teams", teams);
			return "newPlayer.jsp";
		}
		else {
			playService.createPlayer(player);
			return "redirect:/home";
		}
	}
	
	//edit player
	@RequestMapping("/players/edit/{id}")
    public String edit(@PathVariable("id") Long id, Model model) {
        Player player = playService.findPlayer(id);
        List<Team> teams = teamService.allTeams();
        model.addAttribute("teams", teams);
        model.addAttribute("player", player);
        return "edit.jsp";
    }
	
	@RequestMapping(value="/players/edit/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("player") Player player, BindingResult result) {
        if (result.hasErrors()) {
        	System.out.println("Errors");
            return "edit.jsp";
        } else {
            playService.update(player);
            return "redirect:/players/edit/{id}";
        }
    }
	
	@RequestMapping(value="/players/delete/{id}", method=RequestMethod.POST)
    public String destroyPlayers(@PathVariable("id") Long id) {
        playService.delete(id);
        return "redirect:/home";
    }

}
