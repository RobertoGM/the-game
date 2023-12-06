package com.games.game.move.controller;

import com.games.game.move.entities.MoveDto;
import com.games.game.move.service.MoveServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
public class MoveControllerImpl {

    @Autowired
    private MoveServiceImpl moveServiceImpl;
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value="/move")
    public MoveDto move() {
        return moveServiceImpl.move();
    }
}
