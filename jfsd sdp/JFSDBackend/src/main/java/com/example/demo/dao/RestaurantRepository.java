package com.example.demo.dao;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

//import org.springframework.data.repository.CrudRepository;


import com.example.demo.entities.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
   List<Restaurant> findByApproved(boolean approved);
   List<Restaurant> findByIsactive(boolean isactive);
   List<Restaurant> findAllById(int restaurantid);
//   List<Restaurant> findById(int restaurantid);
   Optional<Restaurant> findByUsername(String username);
}