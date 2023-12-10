package com.games.game.move;

import com.games.game.move.models.MoveDto;
import com.games.game.move.models.MoveTypeEnum;
import com.games.game.move.service.MoveServiceImpl;
import com.games.game.results.entities.ResultEnum;
import com.games.game.results.models.GameDto;
import jakarta.validation.constraints.AssertTrue;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class MoveServiceTest {

    @InjectMocks
    private MoveServiceImpl moveServiceImpl;
    @Test
    void shouldGenerateRandomCpuMove() {
        MoveDto playerMove = new MoveDto();
        playerMove.setMove(MoveTypeEnum.PAPER);
        String move = MoveTypeEnum.randomMove().toString();

        // List of valid moves out of the enum
        List<String> legalMoves = Stream.of(MoveTypeEnum.values())
                .map(MoveTypeEnum::name)
                .collect(Collectors.toList());

        // Check the move returned from the service matches a legal move
        assertTrue(legalMoves.stream().anyMatch(e -> e.equalsIgnoreCase(move)));

        // Check the test is not providing false positives by making sure the test asser false under an illegal move
        assertFalse(legalMoves.stream().anyMatch(e -> e.equalsIgnoreCase("WOOD")));
    }

    @Test
    void shouldReturnGameResult() {
        MoveDto playerMove = new MoveDto();
        playerMove.setMove(MoveTypeEnum.SCISSORS);
        GameDto game = moveServiceImpl.cpuMove(playerMove);

        assertEquals(MoveTypeEnum.SCISSORS, game.getPlayerMove());

        if(game.getCpuMove() == MoveTypeEnum.PAPER) {
            assertEquals(ResultEnum.WIN, game.getResult());
        }

        if(game.getCpuMove() == MoveTypeEnum.ROCK) {
            assertEquals(ResultEnum.LOSE, game.getResult());
        }

        if(game.getCpuMove() == MoveTypeEnum.SCISSORS) {
            assertEquals(ResultEnum.TIE, game.getResult());
        }
    }

}