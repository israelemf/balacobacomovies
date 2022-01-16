package com.dev.dsmovie.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	
	
}
