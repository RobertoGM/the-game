package com.games.game.results.service;

import com.games.game.move.models.MoveTypeEnum;

public interface ResultService {
    public Integer playerWinStatistics ();
    public Integer scissorsStatistics ();
    public Integer rockStatistics ();
    public Integer paperStatistics ();
}
