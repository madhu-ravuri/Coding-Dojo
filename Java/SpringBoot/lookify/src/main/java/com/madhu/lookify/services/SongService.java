package com.madhu.lookify.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.madhu.lookify.models.Song;
import com.madhu.lookify.repositories.SongRepository;

@Service
public class SongService {
	private final SongRepository songRepo;
	
	public SongService(SongRepository songRepo) {
		this.songRepo = songRepo;
	}
	
	public List<Song> allSongs() {
		return songRepo.findAll();
	}
	
	public Song createSong(Song s) {
		return songRepo.save(s);
	}
	
	public Song findSong(Long id) {
		Optional<Song> search = songRepo.findById(id);
		if (search.isPresent()) {
			return search.get();
		} else { return null; }
	}
	
	public void deleteSong(Long id) {
		songRepo.deleteById(id);
	}

}
