package com.example.java_practice.repositories;

import com.example.java_practice.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository <Company, Long> {
}
