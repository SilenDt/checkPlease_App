package com.example.java_practice.controllers;

import com.example.java_practice.models.Company;
import com.example.java_practice.models.Review;
import com.example.java_practice.models.User;
import com.example.java_practice.repositories.ReviewRepository;
//import com.sun.org.apache.bcel.internal.generic.RETURN;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping("/reviews")
    public ResponseEntity<List<Review>> getAllReviews(
            @RequestParam(name = "company_id", required = false) Long input_company_id,
            @RequestParam(name = "user_id", required = false) Long input_user_id
    ) {
        //for a given company - return all the reviews
        if (input_company_id != null) {
            List<Review> reviews_by_company = reviewRepository.findByCompanyId(input_company_id);
            return new ResponseEntity<>(reviews_by_company, HttpStatus.OK);
        }
        //find reviews by user id
        if (input_user_id != null) {
            List<Review> reviews_by_user = reviewRepository.findByUserId(input_user_id);
            return new ResponseEntity<>(reviews_by_user, HttpStatus.OK);
        }

        List<Review> foundReviews = reviewRepository.findAll();
        return new ResponseEntity<>(foundReviews, HttpStatus.OK);
    }

    @GetMapping("/reviews/{id}")
    public ResponseEntity getReviewById(@PathVariable Long id){
        return new ResponseEntity<>(reviewRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/reviews")
    public ResponseEntity<Review> saveReview(@RequestBody Review review) {
        reviewRepository.save(review);
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @DeleteMapping("/reviews/{id}")
    public ResponseEntity<Long> deleteReview(@PathVariable ("id") Long id){

        reviewRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

//    @PutMapping("/reviews/{uid}")
//    public ResponseEntity<Review> updateReview(@PathVariable String uid, @RequestBody Review reviewDetails) {
////        List<Review> review = reviewRepository.findByUserUid(uid);
//        Review review = reviewRepository.findByUserUid(uid);
//
//        review.setDate(reviewDetails.getDate());
//        review.setPros(reviewDetails.getPros());
//        review.setCons(reviewDetails.getCons());
//        review.setCompany(reviewDetails.getCompany());
//        review.setJobType(reviewDetails.getJobType());
//        review.setDoYouTipOut(reviewDetails.getDoYouTipOut());
//        review.setTipOutType(reviewDetails.getTipOutType());
//        review.setAdditionalComments(reviewDetails.getAdditionalComments());
//        review.setUser(reviewDetails.getUser());
//        review.setHourlyRate(reviewDetails.setHourlyRate());
//        review.setOverallRating(reviewDetails.getOverallRating());
//
//        reviewRepository.save(review);
//
//        return new ResponseEntity<>(review, HttpStatus.ACCEPTED);
//    }

}
