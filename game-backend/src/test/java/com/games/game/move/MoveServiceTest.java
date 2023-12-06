package com.games.game.move;

import com.games.game.move.controller.MoveControllerImpl;
import com.games.game.move.service.MoveServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class MoveServiceTest {

    @Autowired
    private MoveServiceImpl moveServiceImpl;
 
    @Test
    void controllerLoads() throws Exception {
        assertThat(moveControllerImpl).isNotNull();
    }


    @Test
    void moveShouldReturnValidMove() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/move",
                String.class)).contains("Hello, World");
    }
}