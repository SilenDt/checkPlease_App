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

    @Column (name = "uid", unique = true)
    private  String uid;

    @Column (name = "firstName")
    private String firstName;

    @Column (name = "lastName")
    private String lastName;

    @Column (name = "userEmail", unique = true)
    private String userEmail;

    @Column (name = "userTown")
    private String userTown;

    @Column (name = "placeOfWork")
    private String placeOfWork;

    @Column (name = "location_of_place_of_work")
    private String locationOfPlaceOfWork;

    @OneToMany (mappedBy = "user")
    private List<Review> reviews;

    @OneToOne
    @JoinColumn(name = "job_type_id")
    private JobType jobType;

    public User(){}

    public User(String uid, String firstName, String lastName, String userTown, String placeOfWork, String locationOfPlaceOfWork, String userEmail, JobType jobType) {
        this.uid = uid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userTown = userTown;
        this.placeOfWork = placeOfWork;
        this.userEmail = userEmail;
        this.locationOfPlaceOfWork = locationOfPlaceOfWork;
        this.reviews = new ArrayList<>();
        this.jobType = jobType;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
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

    public String getUserTown() {
        return userTown;
    }

    public void setUserTown(String town) {
        this.userTown = town;
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
