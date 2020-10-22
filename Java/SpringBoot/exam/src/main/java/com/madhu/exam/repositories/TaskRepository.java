package com.madhu.exam.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.madhu.exam.models.Task;

public interface TaskRepository extends CrudRepository<Task, Long> {
	List<Task> findAll();

}
