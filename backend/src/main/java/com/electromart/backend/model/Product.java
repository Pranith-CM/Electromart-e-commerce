package com.electromart.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

    @Id
    private Long id;

    private String name;
    private String category;
    private Double price;

    private String description;
    private Double rating;
    private Integer reviews;
    private String badge;

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public Double getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public Double getRating() {
        return rating;
    }

    public Integer getReviews() {
        return reviews;
    }

    public String getBadge() {
        return badge;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public void setReviews(Integer reviews) {
        this.reviews = reviews;
    }

    public void setBadge(String badge) {
        this.badge = badge;
    }
}