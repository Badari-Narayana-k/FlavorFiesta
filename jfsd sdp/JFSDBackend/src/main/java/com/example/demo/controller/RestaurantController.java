package com.example.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.dao.CustomerRepository;
import com.example.demo.dao.ItemRepository;
import com.example.demo.dao.RestaurantRepository;
//import com.example.demo.dao.CustomerRepositoryImpl;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Item;
//import com.example.demo.entities.User;
import com.example.demo.entities.Restaurant;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Controller
@RequestMapping("/res")
@CrossOrigin("http://localhost:3000/")
public class RestaurantController {

  @Autowired
  private RestaurantRepository restaurantRepository;
  
  @Autowired
  private ItemRepository itemRepository;
  
  @Autowired
  private BCryptPasswordEncoder passwordEncoder;
  
  
  @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody Restaurant restaurant) {
        restaurant.setApproved(false);
        String encodedPassword = passwordEncoder.encode(restaurant.getPassword());
        restaurant.setPassword(encodedPassword);
        restaurantRepository.save(restaurant);
        return ResponseEntity.ok("Restaurant sign-up request sent.");
    }
  @PostMapping("/login")
  public ResponseEntity<Boolean> authenticate(@RequestBody Map<String, String> credentials) {
      String username = credentials.get("username");
      String password = credentials.get("password");
      System.out.println("Coming");
      
      Optional<Restaurant> restaurant = restaurantRepository.findByUsername(username);
      Restaurant rest=restaurant.get();
      if (restaurant.isPresent() && isPasswordValid(restaurant.get(), password)&&rest.isIsactive()) {
    	  System.out.println("Function inside");
          return ResponseEntity.ok(true); // Authentication successful
      } else {
          return ResponseEntity.ok(false); // Authentication failed
      }
  }

  private boolean isPasswordValid(Restaurant restaurant, String password) {
      return passwordEncoder.matches(password, restaurant.getPassword());
  }
    @PostMapping("/approve/{restaurantId}")
    public ResponseEntity<String> approveRestaurant(@PathVariable int restaurantId) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(restaurantId);
        if (optionalRestaurant.isPresent()) {
            Restaurant restaurant = optionalRestaurant.get();
            restaurant.setApproved(true);
            restaurant.setIsactive(true);
            restaurantRepository.save(restaurant);
            return ResponseEntity.ok("Restaurant approved.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/addfood/{restaurantId}")
    public ResponseEntity<String> addfood(@PathVariable int restaurantId) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(restaurantId);
        if (optionalRestaurant.isPresent()) {
            Restaurant restaurant = optionalRestaurant.get();
            Item item = new Item();
            item.setName("Dosa");
            item.setPrice(99);
            item.setType("Veg");
            
            // Set the relationship with the restaurant
            item.setRestaurant(restaurant);
            
            restaurant.getItems().add(item);
            // Save the Item to the database
            itemRepository.save(item);
            
            restaurantRepository.save(restaurant);
            return ResponseEntity.ok("Item got Added");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/getitemslist/{restaurantId}")
    public ResponseEntity<List<Item>> getItemsList(@PathVariable int restaurantId) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(restaurantId);
        if (optionalRestaurant.isPresent()) {
            Restaurant restaurant = optionalRestaurant.get();
            List<Item> items = restaurant.getItems();
  
            
            return new ResponseEntity<>(items, HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    
    
    @GetMapping("/restaurant/{restaurantid}")
    public ResponseEntity<List<Restaurant>>  viewrestaurantbyId(@PathVariable int restaurantid) {
        
      return  new ResponseEntity<>( restaurantRepository.findAllById(restaurantid),HttpStatus.OK);
   }
    
    @GetMapping("/pending")
    public ResponseEntity<List<Restaurant>> pending() {
       
       return new ResponseEntity<>(restaurantRepository.findByApproved(false),HttpStatus.OK);
    }
    
    @GetMapping("/getallres")
    public ResponseEntity<List<Restaurant>> getallres() {
       
       return new ResponseEntity<>(restaurantRepository.findByApproved(true),HttpStatus.OK);
    }
    
    
    @PostMapping("/makeactive/{restaurantId}")
    public ResponseEntity<String> makeactive(@PathVariable int restaurantId) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(restaurantId);
        if (optionalRestaurant.isPresent()) {
            Restaurant restaurant = optionalRestaurant.get();
            restaurant.setIsactive(true);
            restaurantRepository.save(restaurant);
            return ResponseEntity.ok("Restaurant made Active.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/makeinactive/{restaurantId}")
    public ResponseEntity<String> makeinactive(@PathVariable int restaurantId) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(restaurantId);
        if (optionalRestaurant.isPresent()) {
            Restaurant restaurant = optionalRestaurant.get();
            restaurant.setIsactive(false);
            restaurantRepository.save(restaurant);
            return ResponseEntity.ok("Restaurant made Inactive");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/getactive")
    public ResponseEntity<List<Restaurant>> getactive() {
       
       return new ResponseEntity<>(restaurantRepository.findByIsactive(true),HttpStatus.OK);
    }
    
    
  
    
    
  
}