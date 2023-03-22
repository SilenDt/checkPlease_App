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

    @Column (name = "pros")
    private String pros;

    @Column(name = "cons")
    private String cons;

    @JsonIgnoreProperties ({"reviews"})
    @ManyToOne
    @JoinColumn (name = "company_id", nullable = false)
    private Company company;

    @JsonIgnoreProperties ({"reviews"})
    @ManyToOne
    @JoinColumn (name = "user_id", nullable = false)
    private User user;

    @OneToOne
    @JoinColumn(name = "jobType_id", nullable = false)
    private JobType jobType;

    @Column (name = "doYouTipOut")
    private String doYouTipOut;

    @OneToOne
    @JoinColumn(name = "tipOutType_id", nullable = false)
    private TipOutType tipOutType;

    @Column(name = "hourlyRate")
    private Double hourlyRate;

    @Column(name = "additionalComments")
    private String additionalComments;

    @Column(name = "overallRating")
    private Double overallRating;


    public Review(){}

    public Review(String date, String pros, String cons, Company company, User user, JobType jobType, String doYouTipOut, TipOutType tipOutType, Double hourlyRate, String additionalComments, Double overallRating) {
        this.date = date;
        this.pros = pros;
        this.cons = cons;
        this.company = company;
        this.user = user;
        this.jobType = jobType;
        this.tipOutType = tipOutType;
        this.doYouTipOut = doYouTipOut;
        this.hourlyRate = hourlyRate;
        this.additionalComments = additionalComments;
        this.overallRating = overallRating;
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

    public String getPros() {
        return pros;
    }

    public void setPros(String pros) {
        this.pros = pros;
    }

    public String getCons() {
        return cons;
    }

    public void setCons(String cons) {
        this.cons = cons;
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

    public String getDoYouTipOut() {
        return doYouTipOut;
    }

    public void setDoYouTipOut(String doYouTipOut) {
        this.doYouTipOut = doYouTipOut;
    }

    public double getHourlyRate() {
        return hourlyRate;
    }

    public void setHourlyRate(double hourlyRate) {
        this.hourlyRate = hourlyRate;
    }

    public String getAdditionalComments() {
        return additionalComments;
    }

    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }

    public double getOverallRating() {
        return overallRating;
    }

    public void setOverallRating(double overallRating) {
        this.overallRating = overallRating;
    }
}
