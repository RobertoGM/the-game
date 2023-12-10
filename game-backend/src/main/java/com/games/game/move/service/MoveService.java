package com.games.game.move.service;

import com.games.game.move.models.MoveDto;
import com.games.game.results.models.GameDto;

public interface MoveService {

    public GameDto cpuMove (MoveDto playerMove);
}
