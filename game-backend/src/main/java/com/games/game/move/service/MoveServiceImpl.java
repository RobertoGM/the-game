package com.games.game.move.service;

import com.games.game.move.entities.MoveDto;
import com.games.game.move.entities.MoveTypeEnum;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class MoveServiceImpl {

    public MoveDto move() {
        MoveDto cpuMove = new MoveDto();
        cpuMove.setMove(MoveTypeEnum.randomMove());
        return cpuMove;
    }
}
