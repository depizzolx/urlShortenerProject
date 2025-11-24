package com.github.depizzolx.shortener.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.github.depizzolx.shortener.entities.UrlEntity;

import java.util.Optional;

public interface UrlRepository extends JpaRepository<UrlEntity, Long> {

    Optional<UrlEntity> findByShortCode(String shortCode); // Find URL entity by its short code (Spring Data JPA will implement this method automatically)
}
