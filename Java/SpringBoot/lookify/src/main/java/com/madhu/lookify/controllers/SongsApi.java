package com.madhu.lookify.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.madhu.lookify.models.Song;
import com.madhu.lookify.services.SongService;

@RestController
public class SongsApi {
	private final SongService songService;
	
	public SongsApi(SongService songService) {
		this.songService = songService;
	}
	
	@RequestMapping("/api/songs")
	public List<Song> index() {
		return songService.allSongs();
	}
	
	@RequestMapping(value="/api/songs", method=RequestMethod.POST)
	public Song create(@RequestParam(value="name") String name, 
			@RequestParam(value="artist") String artist, 
			@RequestParam(value="rating") int rating) {
		Song song = new Song(name, artist, rating);
		return songService.createSong(song);
	}
	
}
