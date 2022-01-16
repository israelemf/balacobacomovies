package com.dev.dsmovie.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
}
