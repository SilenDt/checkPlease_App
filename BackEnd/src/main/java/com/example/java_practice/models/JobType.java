package com.example.java_practice.models;

import javax.persistence.*;

@Entity
@Table(name = "JobType")
public class JobType {

    //INSTANCE VARIABLES:
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="job_role")
    private String jobRole;

    //CONSTRUCTOR:
    public JobType(String jobRole) {
        this.jobRole = jobRole;
    }

    public JobType() {}

    //GETTERS AND SETTERS:  
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJobRole() {
        return jobRole;
    }

    public void setJobRole(String jobRole) {
        this.jobRole = jobRole;
    }
}
