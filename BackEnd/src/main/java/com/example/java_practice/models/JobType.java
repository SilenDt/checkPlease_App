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

    @Column(name = "hourlyRate")
    private int hourlyRate;


    //CONSTRUCTORS:
    public JobType() {}

    public JobType(String jobRole, int hourlyRate) {
        this.hourlyRate = hourlyRate;
        this.jobRole = jobRole;
    }



    //GETTERS AND SETTERS:

    public int getHourlyRate() {
        return hourlyRate;
    }

    public void setHourlyRate(int hourlyRate) {
        this.hourlyRate = hourlyRate;
    }

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
