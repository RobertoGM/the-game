package com.games.game.results.repository;

import com.games.game.results.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResultRepository extends JpaRepository<Game, Long> {
    // Custom query to ease finding winning games for a particular move
    @Query("SELECT g FROM Game g WHERE g.playerMove = ?1 AND g.result = 'WIN'")
    List<Game> findAllWinnerGamesByMove(String moveType);
}