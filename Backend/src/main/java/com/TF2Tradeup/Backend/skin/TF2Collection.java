package com.TF2Tradeup.Backend.skin;

import lombok.Getter;

@Getter
public enum TF2Collection {
    // TODO: List of all the collections of war paints in TF2

    TEUFORT("Teufort"),
    CRAFTSMANN("Craftsmann"),
    CONCEALED_KILLER("Concealed Killer"),
    POWERHOUSE("Powerhouse"),
    HARVEST("Harvest"),
    GENTLEMANNES("Gentlemanne's"),
    PYROLAND("Pyroland"),
    WARBIRD("Warbird"),
    JUNGLE_JACKPOT("Jungle Jackpot"),
    INFERNAL_REWARD("Infernal Reward"),
    DECORATED_WAR_HERO("Decorated War Hero"),
    CONTRACT_CAMPAIGNER("Contract Campaigner"),
    SAXTON_SELECT("Saxon Select"),
    MANN_CO_EVENTS("Mann Co. Events"),
    WINTER_2017("Winter 2017"),
    SCREAM_FORTRESS_X("Scream Fortress X"),
    WINTER_2019("Winter 2019"),
    SCREAM_FORTRESS_XII("Scream Fortress XII"),
    WINTER_2020("Winter 2020"),
    SCREAM_FORTRESS_XIII("Scream Fortress XIII"),
    SCREAM_FORTRESS_XIV("Scream Fortress XIV"),
    SUMMER_2023("Summer 2023"),
    SCREAM_FORTRESS_XVI("SCREAM FORTRESS XVI");

    private final String displayName;

    TF2Collection(String displayName){
        this.displayName = displayName;
    }
}
