package com.madhu.practice.models;

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
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

@Entity
@Table(name="players")
public class Player {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	@Size(min=2, max=255, message="Please enter a valid name.")
	private String firstName;
	@Size(min=2, max=255, message="Please enter a valid name.")
	private String lastName;
	@Min(value=1, message="Jersey number must be greater than 0.")
	@Max(value=30, message="Jersey number must be less than 30.")
	private int number;
	@Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="team_id")
    private Team team;
    
    @Column(updatable=false)
   	@PrePersist
   	protected void onCreate() {
   		this.createdAt = new Date();
   	}
   	@PreUpdate
   	protected void onUpdate() {
   		this.updatedAt = new Date();
   	}
   	
   	public Player() {
   		
   	}
   	
   	public Player(String first, String last, int num) {
   		this.firstName = first;
   		this.lastName = last;
   		this.number = num;
   	}
   	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
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
	public Team getTeam() {
		return team;
	}
	public void setTeam(Team team) {
		this.team = team;
	}
   	

}
