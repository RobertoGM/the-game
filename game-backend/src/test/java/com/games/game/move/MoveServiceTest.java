package com.games.game.move;

import com.games.game.move.Models.MoveTypeEnum;
import com.games.game.move.service.MoveServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class MoveServiceTest {

    @InjectMocks
    private MoveServiceImpl moveServiceImpl;
    @Test
    void moveShouldReturnValidMove() {
        String move = moveServiceImpl.cpuMove().getMove().toString();

        // List of valid moves out of the enum
        List<String> legalMoves = Stream.of(MoveTypeEnum.values())
                .map(MoveTypeEnum::name)
                .collect(Collectors.toList());

        // Check the move returned from the service matches a legal move
        assertTrue(legalMoves.stream().anyMatch(e -> e.equalsIgnoreCase(move)));

        // Check the assert is not providing false positives by making sure the test asser false under an illegal move
        assertFalse(legalMoves.stream().anyMatch(e -> e.equalsIgnoreCase("WOOD")));
    }
}