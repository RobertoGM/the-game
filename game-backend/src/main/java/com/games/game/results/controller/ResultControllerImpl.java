package com.games.game.results.controller;

import com.games.game.results.models.MoveStatsDto;
import com.games.game.results.service.ResultServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
public class ResultControllerImpl implements ResultController {

    @Autowired
    private ResultServiceImpl resultServiceImpl;
    @CrossOrigin(origins = {"http://localhost:4200", "http://dsuoa725qnagh.cloudfront.net"})
    @GetMapping(value="/statistics")
    public Integer putPlayerWinStatistics() {
        return resultServiceImpl.playerWinStatistics();
    }

    @ResponseBody
    @CrossOrigin(origins = {"http://localhost:4200", "http://dsuoa725qnagh.cloudfront.net"})
    @GetMapping(value="/statistics/{move}")
    public MoveStatsDto getMoveStatistics(@PathVariable("move") String move) {
        return resultServiceImpl.moveStatistics(move);
    }

}
