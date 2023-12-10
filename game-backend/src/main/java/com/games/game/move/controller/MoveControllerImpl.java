package com.games.game.move.controller;

import com.games.game.move.models.MoveDto;
import com.games.game.move.service.MoveServiceImpl;
import com.games.game.results.models.GameDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
public class MoveControllerImpl implements MoveController {

    @Autowired
    private MoveServiceImpl moveServiceImpl;
    @CrossOrigin(origins = {"http://localhost:4200", "http://dsuoa725qnagh.cloudfront.net", "http://the-game-frontend.s3-website.eu-west-3.amazonaws.com/"})
    @PostMapping(value="/move", consumes= MediaType.APPLICATION_JSON_UTF8_VALUE)
    public GameDto move(MoveDto playerMove) {
        return moveServiceImpl.cpuMove(playerMove);
    }
}
