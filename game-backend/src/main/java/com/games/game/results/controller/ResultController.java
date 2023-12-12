package com.games.game.results.controller;

import com.games.game.move.models.MoveDto;
import com.games.game.results.models.MoveStatsDto;

public interface ResultController {
    public Float putPlayerWinStatistics ();
    public MoveStatsDto getMoveStatistics (String move);

}
