package com.dev.dsmovie.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.dsmovie.entities.Score;
import com.dev.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
}
