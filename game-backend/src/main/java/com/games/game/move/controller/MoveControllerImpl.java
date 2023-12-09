package com.games.game.move.controller;

import com.games.game.move.models.MoveDto;
import com.games.game.move.service.MoveServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
public class MoveControllerImpl implements MoveController {

    @Autowired
    private MoveServiceImpl moveServiceImpl;
    @CrossOrigin(origins = {"http://localhost:4200", "http://dsuoa725qnagh.cloudfront.net", "http://the-game-frontend.s3-website.eu-west-3.amazonaws.com/"})
    @GetMapping(value="/move")
    public MoveDto move() {
        return moveServiceImpl.cpuMove();
    }
}
