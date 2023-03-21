package com.example.java_practice.controllers;

import com.example.java_practice.models.Review;
import com.example.java_practice.models.User;
import com.example.java_practice.repositories.ReviewRepository;
import com.example.java_practice.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> foundUsers = userRepository.findAll();
        return new ResponseEntity<>(foundUsers, HttpStatus.OK);
    }

    @GetMapping("/users/{uid}")
    public ResponseEntity getUserByUid(@PathVariable String uid){
        return new ResponseEntity<>(userRepository.findUserByUid(uid), HttpStatus.OK);
    }

    @PostMapping("/users")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PutMapping("/users/{uid}")
    public ResponseEntity<User> updateUser(@PathVariable String uid, @RequestBody User userDetails) {
        User user = userRepository.findUserByUid(uid);

        String name = userDetails.getFirstName();
        System.out.println(name);
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setUserTown(userDetails.getUserTown());
        user.setLocationOfPlaceOfWork(userDetails.getLocationOfPlaceOfWork());

        userRepository.save(user);

        return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
    }

//    @PostMapping("/users")
//    public ResponseEntity<User> saveUser(@RequestBody UserDto userDto) {
//        User user = new User();
//        user.setId(userDto.getUid());
//        user.setUserEmail(userDto.getUserEmail());
//        userRepository.save(user);
//        return ResponseEntity.ok(user);
//    }

}
