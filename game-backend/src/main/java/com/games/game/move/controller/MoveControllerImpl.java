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
    @CrossOrigin(origins = {"http://localhost:4200", "http://dsuoa725qnagh.cloudfront.net"})
    @PutMapping(value="/move", consumes = MediaType.APPLICATION_JSON_VALUE)
    public GameDto move(@RequestBody MoveDto playerMove) {
        return moveServiceImpl.cpuMove(playerMove);
    }
}
