package com.games.game.move.service;

import com.games.game.move.models.MoveDto;
import com.games.game.move.models.MoveTypeEnum;
import org.springframework.stereotype.Service;

@Service
public class MoveServiceImpl implements MoveService {

    // Create random move from the enum of valid moves and return it
    public MoveDto cpuMove() {
        MoveDto cpuMove = new MoveDto();
        cpuMove.setMove(MoveTypeEnum.randomMove());
        return cpuMove;
    }
}
