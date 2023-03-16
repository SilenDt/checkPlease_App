package com.example.java_practice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.BeanIsNotAFactoryException;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "date")
    private String date;

    @Column (name = "text")
    private String text;

    @JsonIgnoreProperties ({"reviews"})
    @ManyToOne
    @JoinColumn (name = "company_id", nullable = false)
    private Company company;

    @JsonIgnoreProperties ({"reviews"})
    @ManyToOne
    @JoinColumn (name = "user_id", nullable = false)
    private User user;

    @OneToOne
    @JoinColumn(name = "jobType_id")
    private JobType jobType;

    @OneToOne
    @JoinColumn(name = "tipOutType_id")
    private TipOutType tipOutType;

//    private List<Benefit> benefits;

    public Review(){}

    public Review(String date, String text, Company company, User user, JobType jobType, TipOutType tipOutType) {
        this.date = date;
        this.text = text;
        this.company = company;
        this.user = user;
        this.jobType = jobType;
        this.tipOutType = tipOutType;
//        this.benefits = new ArrayList<>();
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public JobType getJobType() {
        return jobType;
    }

    public void setJobType(JobType jobType) {
        this.jobType = jobType;
    }

    public TipOutType getTipOutType() {
        return tipOutType;
    }

    public void setTipOutType(TipOutType tipOutType) {
        this.tipOutType = tipOutType;
    }

//    public List<Benefit> getBenefits() {
//        return benefits;
//    }
//
//    public void setBenefits(List<Benefit> benefits) {
//        this.benefits = benefits;
//    }
//
//    //METHODS:
//    public void addBenefit(Benefit benefit) {
//        benefits.add(benefit);
//    }
}
