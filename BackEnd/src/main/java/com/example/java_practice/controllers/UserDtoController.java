package com.example.java_practice.controllers;

import com.example.java_practice.models.User;
import com.example.java_practice.models.UserDto;
import com.example.java_practice.repositories.UserDtoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;




@RestController
public class UserDtoController {

@Autowired
    UserDtoRepository userDtoRepository;

    @PostMapping("/usersDto")
    public ResponseEntity<UserDto> saveUserDto(@RequestBody UserDto userDto) {
        userDtoRepository.save(userDto);
        return new ResponseEntity<>(userDto, HttpStatus.CREATED);
    }
}
