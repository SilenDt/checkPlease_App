package com.example.java_practice.controllers;

import com.example.java_practice.models.TipOutType;
import com.example.java_practice.models.User;
import com.example.java_practice.repositories.TipOutTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TipOutTypeController {

    @Autowired
    TipOutTypeRepository tipOutTypeRepository;


    @GetMapping("/tip_out_types")
    public ResponseEntity<List<TipOutType>> getAllTipOutTypes() {
        List<TipOutType> foundTipOutTypes = tipOutTypeRepository.findAll();
        return new ResponseEntity<>(foundTipOutTypes, HttpStatus.OK);
    }



}
