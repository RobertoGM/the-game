package com.games.game.results.controller;

import com.games.game.results.models.MoveStatsDto;
import com.games.game.results.service.ResultServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class ResultControllerImpl implements ResultController {

    @Autowired
    private ResultServiceImpl resultServiceImpl;
    @CrossOrigin(origins = {"http://localhost:4200", "http://dsuoa725qnagh.cloudfront.net"})
    @GetMapping(value="/statistics")
    public Float putPlayerWinStatistics() {
        return resultServiceImpl.playerWinStatistics();
    }

    @CrossOrigin(origins = {"http://localhost:4200", "http://dsuoa725qnagh.cloudfront.net"})
    @GetMapping(value="/moveStatistics/{move}")
    public MoveStatsDto getMoveStatistics(@PathVariable(value="move") String move) {
        return resultServiceImpl.moveStatistics(move);
    }

}
