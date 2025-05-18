package com.TF2Tradeup.Backend.user;

import com.TF2Tradeup.Backend.skin.Skin;
import com.TF2Tradeup.Backend.tradeup.Tradeup;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String username;

    private String email;

    private String password;

    private Role role;

    //TODO Tradeup
    /*
    @OneToMany
    private List<Skin> tradeup; // User saved tradeup
    */
}
