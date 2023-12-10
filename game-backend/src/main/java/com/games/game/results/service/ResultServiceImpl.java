package com.games.game.results.service;

import com.games.game.move.models.MoveTypeEnum;
import com.games.game.results.entities.Game;
import com.games.game.results.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collection;

public class ResultServiceImpl implements ResultService {

    @Autowired
    private ResultRepository resultRepository;

    public Integer playerWinStatistics()  {
        return 1;
    }

    public Integer scissorsStatistics()  {
        return 1;
    }

    public Integer rockStatistics()  {
        return 1;
    }

    public Integer paperStatistics()  {
        return 1;
    }

}
