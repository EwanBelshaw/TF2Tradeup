package com.TF2Tradeup.Backend.blog;


import com.TF2Tradeup.Backend.user.User;
import jakarta.persistence.*;



@Entity
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(nullable = false)
    private User author;

    private String title;

    private String description;

    private String content;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] thumbnail; // Blob image

    @Enumerated(EnumType.STRING)
    private Tag tag;

}
