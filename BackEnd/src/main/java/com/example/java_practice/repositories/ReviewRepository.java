package com.example.java_practice.repositories;

import com.example.java_practice.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository <Review, Long> {

    List<Review> findByCompanyId(Long company_id);
    List<Review> findByUserId(Long id);
}
