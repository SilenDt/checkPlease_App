package com.example.java_practice.controllers;

import com.example.java_practice.models.Review;
import com.example.java_practice.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping("/reviews")
    public ResponseEntity <List<Review>> getAllReviews(){
        List<Review> foundReviews = reviewRepository.findAll();
        return new ResponseEntity<>(foundReviews, HttpStatus.OK);
    }
}
