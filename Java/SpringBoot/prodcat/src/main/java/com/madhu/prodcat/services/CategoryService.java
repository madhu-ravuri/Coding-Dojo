package com.madhu.prodcat.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.madhu.prodcat.models.Category;
import com.madhu.prodcat.repositories.CategoryRepository;

@Service
public class CategoryService {
	private final CategoryRepository categoryRepo;
	
	public CategoryService(CategoryRepository categoryRepo) {
		this.categoryRepo = categoryRepo;
	}
	
	public List<Category> findAll() {
		return categoryRepo.findAll();
	}
	
	public Category createCategory(Category c) {
		return categoryRepo.save(c);
	}
	
	public Category findCategory(Long id) {
		Optional<Category> optional = categoryRepo.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		} else { return null; }
	}

}
