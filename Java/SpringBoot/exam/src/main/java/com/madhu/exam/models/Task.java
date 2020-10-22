package com.madhu.exam.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="tasks")
public class Task {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	@Size(min=2, max=255, message="Please enter a valid task of at least 2 characters.")
	private String name;
	private String creator;
	@Size(min=2, max=255, message="Please select a priority.")
	private String priority;
	@Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User assignee;
	
	public Task() {
		
	}
	
	public Task(String name, String priority, User assignee) {
		this.name = name;
		this.priority = priority;
		this.assignee = assignee;
	}
	
	@Column(updatable=false)
   	@PrePersist
   	protected void onCreate() {
   		this.createdAt = new Date();
   	}
   	@PreUpdate
   	protected void onUpdate() {
   		this.updatedAt = new Date();
   	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCreator() {
		return creator;
	}
	public void setCreator(String creator) {
		this.creator = creator;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	public User getAssignee() {
		return assignee;
	}
	public void setAssignee(User assignee) {
		this.assignee = assignee;
	}

}
