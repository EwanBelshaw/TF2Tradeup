package com.TF2Tradeup.Backend.skin;

//TODO skin table that has all the data skins will have. Depends on how steam classifies everything.

public class Skin {
    private Integer id;
    private String name;
    private Wear wear;
    private Double price;
    private Grade grade;
    private Collection collection; //TODO CREATE COLLECTION ENUM --> SEE ENUM COMMENT
    private Boolean strange; // Won't affect much just for display. Might remove
}
