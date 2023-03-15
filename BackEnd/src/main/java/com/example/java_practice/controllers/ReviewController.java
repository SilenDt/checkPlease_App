package com.example.java_practice.controllers;

import com.example.java_practice.models.Company;
import com.example.java_practice.models.Review;
import com.example.java_practice.repositories.CompanyRepository;
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
    public ResponseEntity <List<Review>> getAllReviews(
            @RequestParam (name="company_id", required = false) Long input_company_id,
            @RequestParam (name="user_id", required = false) Long input_user_id
            ){
        //for a given company - return all the reviews
        if(input_company_id != null){
            List<Review> reviews_by_company = reviewRepository.findByCompanyId(input_company_id);
            return new ResponseEntity<>(reviews_by_company, HttpStatus.OK);
        }
        //find reviews by user id
        if(input_user_id != null){
            List<Review> reviews_by_user = reviewRepository.findByUserId(input_user_id);
            return new ResponseEntity<>(reviews_by_user, HttpStatus.OK);
        }
        List<Review> foundReviews = reviewRepository.findAll();
        return new ResponseEntity<>(foundReviews, HttpStatus.OK);
    }
}
