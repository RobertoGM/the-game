package com.games.game.results;

import com.games.game.move.models.MoveDto;
import com.games.game.move.models.MoveTypeEnum;
import com.games.game.results.entities.Game;
import com.games.game.results.entities.ResultEnum;
import com.games.game.results.repository.ResultRepository;
import com.games.game.results.service.ResultServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class ResultsServiceTest {

    @Mock
    ResultRepository resultRepository;
    @InjectMocks
    private ResultServiceImpl resultServiceImpl;

    @Test
    void shouldReturnPlayerWinPercentage() {
        // Create a loser game
        Game g = new Game();
        g.setResult(ResultEnum.LOSE.toString());
        g.setPlayerMove(MoveTypeEnum.SCISSORS.toString());
        g.setCpuMove(MoveTypeEnum.ROCK.toString());

        // Mock repository to include the new game
        when(resultRepository.findAll()).thenReturn(List.of(g));

        // assert the win percentage is 0 when there is no winning games
        assertEquals(resultServiceImpl.playerWinStatistics(), 0);

        // Create a winner game
        Game g2 = new Game();
        g2.setResult(ResultEnum.WIN.toString());
        g2.setPlayerMove(MoveTypeEnum.ROCK.toString());
        g2.setCpuMove(MoveTypeEnum.SCISSORS.toString());

        // Mock repository to add the new game
        when(resultRepository.findAll()).thenReturn(List.of(g, g2));

        // assert the win percentage increased to 50 with the new game added
        assertEquals(resultServiceImpl.playerWinStatistics(), 50);
    }
}
