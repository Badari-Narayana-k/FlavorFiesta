package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Item;
import com.example.demo.entities.Restaurant;

//import org.springframework.data.repository.CrudRepository;


public interface ItemRepository extends JpaRepository<Item, Integer> {

	
	
}
