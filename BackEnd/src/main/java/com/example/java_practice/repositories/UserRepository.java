package com.example.java_practice.repositories;

import com.example.java_practice.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

//    List<User> findUsersByCompanyId(Long company_id);
}

