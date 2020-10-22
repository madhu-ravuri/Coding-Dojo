package com.madhu.practice.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="teams")
public class Team {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	@Size(min=2, max=255, message="Please enter a valid team name of at least 2 characters.")
	private String name;
	@Size(min=2, max=255, message="Please enter a valid city of at least 2 characters.")
	private String city;
	@Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
    @OneToMany(mappedBy="team", fetch = FetchType.LAZY)
    private List<Player> players;
    
    @PrePersist
	 protected void onCreate(){
	     this.createdAt = new Date();
	 }
	 @PreUpdate
	 protected void onUpdate(){
	     this.updatedAt = new Date();
	 }
	 
	 public Team() {
		 
	 }
	 
	 public Team(String name, String city) {
		 this.name = name;
		 this.city = city;
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
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
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
	public List<Player> getPlayers() {
		return players;
	}
	public void setPlayers(List<Player> players) {
		this.players = players;
	}
	 

}
