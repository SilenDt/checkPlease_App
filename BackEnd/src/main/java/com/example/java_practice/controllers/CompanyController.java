package com.example.java_practice.controllers;

import com.example.java_practice.models.Company;
import com.example.java_practice.models.Review;
import com.example.java_practice.repositories.CompanyRepository;
import com.example.java_practice.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CompanyController {

    @Autowired
    CompanyRepository companyRepository;

    @GetMapping("/companies")
    public ResponseEntity<List<Company>> getAllCompanies(){
        List<Company> foundCompanies = companyRepository.findAll();
        return new ResponseEntity<>(foundCompanies, HttpStatus.OK);
    }
}
