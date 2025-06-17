package com.TF2Tradeup.Backend.entities.tradeup;

import com.TF2Tradeup.Backend.entities.skin.Skin;
import com.TF2Tradeup.Backend.entities.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

// TODO: Tradeup class which will contain ten items and the outcomes of the this tradeup etc. To be stored within the user.


@Entity
@Getter
@Setter
@Table(name = "tradeup")
public class Tradeup {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer tradeupID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToMany
    @JoinTable(name = "tradeup_skin", joinColumns = @JoinColumn(name = "tradeup_id"),
    inverseJoinColumns = @JoinColumn(name = "skin_id"))
    private List<Skin> tradeupSkins = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Tradeup tradeup = (Tradeup) o;
        return Objects.equals(tradeupID, tradeup.tradeupID) && Objects.equals(tradeupSkins, tradeup.tradeupSkins);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tradeupID, tradeupSkins);
    }
}
