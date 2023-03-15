package com.example.java_practice.controllers;

import com.example.java_practice.models.Review;
import com.example.java_practice.models.User;
import com.example.java_practice.repositories.ReviewRepository;
import com.example.java_practice.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        //find users by company id:/ INSTEAD : find reviews by user id (Go to ReviewController)
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }
}
