package com.example.java_practice.repositories;

import com.example.java_practice.models.TipOutType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipOutTypeRepository extends JpaRepository<TipOutType, Long> {
}
