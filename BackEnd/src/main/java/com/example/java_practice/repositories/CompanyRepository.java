package com.example.java_practice.repositories;

import com.example.java_practice.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CompanyRepository extends JpaRepository <Company, Long> {

    List<Company> findByRating (int rating);

}
