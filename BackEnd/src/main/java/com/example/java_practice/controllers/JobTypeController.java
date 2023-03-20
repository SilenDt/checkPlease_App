package com.example.java_practice.controllers;

import com.example.java_practice.models.JobType;
import com.example.java_practice.models.User;
import com.example.java_practice.repositories.JobTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobTypeController {

    @Autowired
    JobTypeRepository jobTypeRepository;

    @GetMapping("/jobtype")
    public ResponseEntity<List<JobType>> getAllJobTypes(){
        List<JobType> foundJobTypes = jobTypeRepository.findAll();
        return new ResponseEntity<>(foundJobTypes, HttpStatus.OK);
    }
}