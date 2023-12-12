package com.games.game.results.controller;

import com.games.game.move.models.MoveDto;
import com.games.game.results.models.MoveStatsDto;

public interface ResultController {
    public Integer putPlayerWinStatistics ();
    public MoveStatsDto getMoveStatistics (String move);

}
