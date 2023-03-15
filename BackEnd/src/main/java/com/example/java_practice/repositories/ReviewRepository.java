package com.example.java_practice.repositories;

import com.example.java_practice.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository <Review, Long> {
}
