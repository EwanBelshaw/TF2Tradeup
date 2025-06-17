package com.TF2Tradeup.Backend.entities.skin;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

// TODO: skin table that has all the data skins will have. Depends on how steam classifies everything.

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "skin")
public class Skin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @Enumerated(EnumType.STRING)
    private Wear wear;

    private Double price;

    @Enumerated(EnumType.STRING)
    private Grade grade;

    @Enumerated(EnumType.STRING)
    private TF2Collection tf2Collection; // TODO: CREATE COLLECTION ENUM --> SEE ENUM COMMENT

    private Boolean strange; // Won't affect much just for display. Might remove

    private String imageUrl;

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Skin skin = (Skin) o;
        return Objects.equals(id, skin.id) && Objects.equals(name, skin.name) && wear == skin.wear && Objects.equals(price, skin.price) && grade == skin.grade && tf2Collection == skin.tf2Collection && Objects.equals(strange, skin.strange) && Objects.equals(imageUrl, skin.imageUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, wear, price, grade, tf2Collection, strange, imageUrl);
    }
}
