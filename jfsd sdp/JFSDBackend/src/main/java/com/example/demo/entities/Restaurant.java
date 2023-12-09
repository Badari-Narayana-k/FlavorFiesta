package com.example.demo.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Restaurant 
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String username;
	private String password;
	private boolean approved = false;
	private boolean isactive = false;
	
	@OneToMany(mappedBy = "restaurant")
	private List<Item> items;
	
	public boolean isIsactive() {
		return isactive;
	}
	public void setIsactive(boolean isactive) {
		this.isactive = isactive;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return username;
	}
	public void setName(String name) {
		this.username = name;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isApproved() {
		return approved;
	}
	public void setApproved(boolean approved) {
		this.approved = approved;
	}

	
	public List<Item> getItems() {
		return items;
	}
	public void setItems(List<Item> items) {
		this.items = items;
	}
	public Restaurant() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Restaurant(int id, String name, boolean approved, boolean isactive
			) {
		super();
		this.id = id;
		this.username = name;
		this.approved = approved;
		this.isactive = isactive;

	}
	@Override
	public String toString() {
		return "Restaurant [id=" + id + ", name=" + username + ", approved=" + approved + "]";
	}

}
