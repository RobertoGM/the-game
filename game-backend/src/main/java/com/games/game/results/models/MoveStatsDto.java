package com.games.game.results.models;

import com.games.game.move.models.MoveTypeEnum;
import com.games.game.results.entities.ResultEnum;
import lombok.Data;

// Dto with more specific data than GameDto to avoid sending more info than needed.
@Data
public class MoveStatsDto {
    private MoveTypeEnum move;
    private int winPercent;
}
