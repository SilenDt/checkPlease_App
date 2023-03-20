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

    @GetMapping("/job_types")
        public ResponseEntity<List<JobType>> getAllUsers(){
            List<JobType> foundJobs = jobTypeRepository.findAll();
            return new ResponseEntity<>(foundJobs, HttpStatus.OK);
        }
    }

