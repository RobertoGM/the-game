package com.games.game.results.controller;

import com.games.game.results.service.ResultServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

public class ResultControllerImpl implements ResultController {

    @Autowired
    private ResultServiceImpl resultServiceImpl;
    @CrossOrigin(origins = {"http://localhost:4200", "http://dsuoa725qnagh.cloudfront.net"})
    @GetMapping(value="/statistics")
    public Integer getPlayerWinStatistics() {
        return resultServiceImpl.playerWinStatistics();
    }

    @CrossOrigin(origins = {"http://localhost:4200", "http://dsuoa725qnagh.cloudfront.net"})
    @GetMapping(value="/rockStatistics")
    public Integer getRockStatistics() {
        return resultServiceImpl.rockStatistics();
    }

    @CrossOrigin(origins = {"http://localhost:4200", "http://dsuoa725qnagh.cloudfront.net"})
    @GetMapping(value="/paperStatistics")
    public Integer getPaperStatistics() {
        return resultServiceImpl.paperStatistics();
    }

    @CrossOrigin(origins = {"http://localhost:4200", "http://dsuoa725qnagh.cloudfront.net"})
    @GetMapping(value="/scissorsStatistics")
    public Integer getScissorsStatistics() {
        return resultServiceImpl.scissorsStatistics();
    }
}
