package com.example.java_practice.repositories;

import com.example.java_practice.models.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDtoRepository extends JpaRepository<UserDto, Long> {


}
