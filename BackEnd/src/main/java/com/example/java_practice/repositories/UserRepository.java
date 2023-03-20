package com.example.java_practice.repositories;

import com.example.java_practice.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByUid(String uid);
    //    List<User> findUsersByCompanyId(Long company_id);
}
