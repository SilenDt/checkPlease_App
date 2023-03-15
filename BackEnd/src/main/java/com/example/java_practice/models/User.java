package com.example.java_practice.models;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "name")
    private String name;

//    @Column (name = "user_email")
//    private String userEmail;
//
//    @Column (name = "user_password")
//    private String userPassword;

    @Column (name = "town")
    private String town;

    @Column (name = "placeOfWork")
    private String placeOfWork;

    @Column (name = "location_of_place_of_work")
    private String locationOfPlaceOfWork;

    @OneToMany (mappedBy = "user")
    private List<Review> reviews;

    @OneToOne
    @JoinColumn(name = "jobType_id")
    private JobType jobType;

    public User(){}

    public User(String name, String town, String placeOfWork, String locationOfPlaceOfWork, JobType jobType) {
        this.name = name;
        this.town = town;
        this.placeOfWork = placeOfWork;
//        this.userEmail = userEmail;
//        this.userPassword = userPassword;
        this.locationOfPlaceOfWork = locationOfPlaceOfWork;
        this.reviews = new ArrayList<>();
        this.jobType = jobType;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getPlaceOfWork() {
        return placeOfWork;
    }

    public void setPlaceOfWork(String placeOfWork) {
        this.placeOfWork = placeOfWork;
    }

//    public String getUserEmail() {
//        return userEmail;
//    }
//
//    public void setUserEmail(String userEmail) {
//        this.userEmail = userEmail;
//    }
//
//    public String getUserPassword() {
//        return userPassword;
//    }
//
//    public void setUserPassword(String userPassword) {
//        this.userPassword = userPassword;
//    }

    public String getLocationOfPlaceOfWork() {
        return locationOfPlaceOfWork;
    }

    public void setLocationOfPlaceOfWork(String locationOfPlaceOfWork) {
        this.locationOfPlaceOfWork = locationOfPlaceOfWork;
    }

    public JobType getJobType() {
        return jobType;
    }

    public void setJobType(JobType jobType) {
        this.jobType = jobType;
    }
}
