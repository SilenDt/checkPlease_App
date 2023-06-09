package com.example.java_practice.models;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "companies")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "name")
    private String name;

    @Column (name = "town")
    private String town;

    @Column (name = "rating")
    private int rating;

    @Column (name = "description")
    private String description;

    @Column (name = "img_url")
    private String imageUrl;

    @OneToMany(mappedBy = "company")
    private List<Review> reviews;

    public Company(){}

    public Company(String name, String town, String description, int rating, String imageUrl) {
        this.name = name;
        this.town = town;
        this.description = description;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.reviews = new ArrayList<>();
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

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
