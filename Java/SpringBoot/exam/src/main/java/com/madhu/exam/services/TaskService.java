package com.madhu.exam.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.madhu.exam.models.Task;
import com.madhu.exam.models.User;
import com.madhu.exam.repositories.TaskRepository;

@Service
public class TaskService {
	private TaskRepository taskRepo;
	
	public TaskService(TaskRepository taskRepo) {
		this.taskRepo = taskRepo;
	}
	
	public List<Task> allTasks() {
		return taskRepo.findAll();
	}
	
	public Task createTask(Task t, User user) {
		t.setCreator(user.getName());
		return taskRepo.save(t);
	}
	
	public Task findTask(Long id) {
		Optional<Task> optional = taskRepo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		} else { return null; }
	}
	
	public Task update(Long id, String name, String priority) {
		Task task = this.findTask(id);
		String creator = task.getCreator();
		task.setName(name);
		task.setPriority(priority);
		task.setCreator(creator);
		return taskRepo.save(task);
	}
	
	public Task update(Task t) {
		String creator = t.getCreator();
		t.setCreator(creator);
		return taskRepo.save(t);
	}
	
	public void delete(Long id) {
		taskRepo.deleteById(id);
	}

}
