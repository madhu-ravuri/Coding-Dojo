package com.madhu.languages.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.madhu.languages.models.Language;
import com.madhu.languages.repositories.LanguageRepository;

@Service
public class LanguageService {
	private final LanguageRepository langRepo;
	
	public LanguageService(LanguageRepository langRepo) {
		this.langRepo = langRepo;
	}
	
	public List<Language> allLanguages() {
		return langRepo.findAll();
	}
	
	public Language createLanguage(Language l) {
		return langRepo.save(l);
	}
	
	public Language findLanguage(Long id) {
		Optional<Language> findLang = langRepo.findById(id);
 		if (findLang.isPresent()) {
 			return findLang.get();
 		}
 		else { return null; }
	}
	
	public Language updateLanguage(Long id, String name, String creator, String version) {
		Language l = this.findLanguage(id);
		l.setName(name);
		l.setCreator(creator);
		l.setVersion(version);
		return langRepo.save(l);
	}
	
	public Language updateLanguage(Language l) {
		return langRepo.save(l);
	}
	
	public void deleteLanguage(Long id) {
		langRepo.deleteById(id);
	}

}
