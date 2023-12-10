package com.games.game.results.models;

import com.games.game.move.models.MoveTypeEnum;
import com.games.game.results.entities.ResultEnum;
import lombok.Data;

@Data
public class GameDto {
    private MoveTypeEnum playerMove;
    private MoveTypeEnum cpuMove;
    private ResultEnum result;

}
