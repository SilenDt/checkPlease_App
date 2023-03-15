package com.example.java_practice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

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

    public Review(){};

    public Review(String date, String text, Company company, User user, JobType jobType) {
        this.date = date;
        this.text = text;
        this.company = company;
        this.user = user;
        this.jobType = jobType;
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
}
