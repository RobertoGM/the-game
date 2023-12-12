package com.games.game.results.service;

import com.games.game.move.models.MoveTypeEnum;
import com.games.game.results.models.MoveStatsDto;

public interface ResultService {
    public Float playerWinStatistics ();
    public MoveStatsDto moveStatistics (String move);

}
