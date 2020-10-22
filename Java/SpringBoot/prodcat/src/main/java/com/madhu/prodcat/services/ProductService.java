package com.madhu.prodcat.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.madhu.prodcat.models.Product;
import com.madhu.prodcat.repositories.ProductRepository;

@Service
public class ProductService {
	private final ProductRepository productRepo;
	
	public ProductService(ProductRepository productRepo) {
		this.productRepo = productRepo;
	}
	
	public List<Product> findAll() {
		return productRepo.findAll();
	}
	
	public Product createProduct(Product p) {
		return productRepo.save(p);
	}
	
	public Product findProduct(Long id) {
		Optional<Product> optProduct = productRepo.findById(id);
		if (optProduct.isPresent()) {
			return optProduct.get();
		} else { return null; }
	}

}
