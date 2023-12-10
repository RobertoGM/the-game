package com.games.game.move.service;

import com.games.game.move.models.MoveDto;
import com.games.game.move.models.MoveTypeEnum;
import com.games.game.results.entities.Game;
import com.games.game.results.entities.ResultEnum;
import com.games.game.results.models.GameDto;
import com.games.game.results.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MoveServiceImpl implements MoveService {

    @Autowired
    private ResultRepository resultRepository;

    public GameDto cpuMove(MoveDto playerMove) {
        // Get CPU random move
        MoveDto cpuMove = new MoveDto();
        cpuMove.setMove(MoveTypeEnum.randomMove());

        //Create transfer object
        GameDto game = new GameDto();
        game.setPlayerMove(playerMove.getMove());
        game.setCpuMove(cpuMove.getMove());
        game.setResult(calculateResult(playerMove.getMove(), cpuMove.getMove()));

        // Create DB entry
        Game saveGame = new Game();
        saveGame.setPlayerMove(game.getPlayerMove().toString());
        saveGame.setCpuMove(game.getCpuMove().toString());
        saveGame.setResult(game.getResult().toString());
        resultRepository.save(saveGame);

        return game;
    }

    // By accepting player and cpu move, calculates the game outcome.
    private ResultEnum calculateResult(MoveTypeEnum playerMove, MoveTypeEnum cpuMove) {
        if (playerMove == cpuMove) {
            return ResultEnum.TIE;
        }

        if (playerMove == MoveTypeEnum.PAPER) {
            return cpuMove == MoveTypeEnum.ROCK ? ResultEnum.WIN : ResultEnum.LOSE;
        } else {
            return cpuMove == MoveTypeEnum.ROCK ? ResultEnum.LOSE : ResultEnum.WIN;
        }
    }
}
