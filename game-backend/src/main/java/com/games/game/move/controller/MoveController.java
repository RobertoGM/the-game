package com.games.game.move.controller;

import com.games.game.move.models.MoveDto;
import com.games.game.results.models.GameDto;

public interface MoveController {
    GameDto move(MoveDto playerMove);
}
