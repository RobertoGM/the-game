package com.games.game.results.service;

import com.games.game.move.models.MoveTypeEnum;
import com.games.game.results.entities.Game;
import com.games.game.results.entities.ResultEnum;
import com.games.game.results.models.MoveStatsDto;
import com.games.game.results.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ResultServiceImpl implements ResultService {

    @Autowired
    private ResultRepository resultRepository;

    // Retrieving the full list of games and the games that have been won by the player, this method calculates the percentage is wins for the players.
    public Integer playerWinStatistics()  {
        Collection<Game> allGames = resultRepository.findAll();
        // Done using stream and Lambdas just to show off ;)
        List<Game> playerWonGames = allGames.stream().filter(g -> g.getResult().equals(ResultEnum.WIN.toString())).collect(Collectors.toList());
        // Don't allow the operation to divide by 0
        return allGames.size() > 0 ? (int)((((float)playerWonGames.size()) / allGames.size()) * 100) : 0;
    }

    // Accepting one of the valid moves, look for the games won using that particular move and return the quantity and the move.
    public MoveStatsDto moveStatistics(String move)  {
        // Implemented from the repository Query
        Collection<Game> moveWon = resultRepository.findAllWinnerGamesByMove(move.toString());

        MoveStatsDto moveStats = new MoveStatsDto();
        moveStats.setMove(MoveTypeEnum.valueOf(move));
        moveStats.setWinPercent(moveWon.size());
        return moveStats;
    }


}
