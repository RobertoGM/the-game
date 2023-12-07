package com.games.game.move.Models;


import java.util.Random;

public enum MoveTypeEnum {
    PAPER, SCISSORS, ROCK;

    private static final Random rnd = new Random();

    public static MoveTypeEnum randomMove()  {
        MoveTypeEnum[] moveTypes = values();
        return moveTypes[rnd.nextInt(moveTypes.length)];
    }
}