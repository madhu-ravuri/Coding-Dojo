package com.madhu.prodcat.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.madhu.prodcat.models.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {
	List<Category> findAll();
}
