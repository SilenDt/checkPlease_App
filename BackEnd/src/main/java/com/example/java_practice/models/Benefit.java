package com.example.java_practice.models;

import javax.persistence.*;

@Entity
@Table(name ="benefits")
public class Benefit {
    //INSTANCE VARIABLES:
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="benefitType")
    private String benefitType;

//    @ManyToOne
//    @JoinColumn(name = "review_id")
//    private Review review;


    //CONSTRUCTOR:
    public Benefit(String benefitType) {
        this.benefitType = benefitType;
    }

    //EMPTY CONSTRUCTOR:
    public Benefit() {
    }

    //GETTERS AND SETTERS:
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBenefitType() {
        return benefitType;
    }

    public void setBenefitType(String benefitType) {
        this.benefitType = benefitType;
    }
}
