package com.example.java_practice.models;

import javax.persistence.*;

@Entity
@Table(name ="tip_out_types")
public class TipOutType {

    //INSTANCE VARIABLES:
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tip_out_method")
    private String tipOutMethod;

    //CONSTRUCTOR:
    public TipOutType(String tipOutMethod) {
        this.tipOutMethod = tipOutMethod;
    }

    //EMPTY CONSTRUCTOR:
    public TipOutType() {
    }

    //GETTERS AND SETTERS:

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipOutMethod() {
        return tipOutMethod;
    }

    public void setTipOutMethod(String tipOutMethod) {
        this.tipOutMethod = tipOutMethod;
    }
}
