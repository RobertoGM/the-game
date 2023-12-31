package com.games.game.results.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Game {
    @Id
    @GeneratedValue
    private Long id;
    private String cpuMove;
    private String playerMove;
    private String result;
}
