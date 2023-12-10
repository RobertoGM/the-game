package com.games.game.results.repository;

import com.games.game.results.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface ResultRepository extends JpaRepository<Game, Long> {

}