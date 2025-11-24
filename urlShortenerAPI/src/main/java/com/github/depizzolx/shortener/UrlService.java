package com.github.depizzolx.shortener;

import org.springframework.stereotype.Service;

import com.github.depizzolx.shortener.entities.UrlEntity;
import com.github.depizzolx.shortener.repository.UrlRepository;

import java.time.LocalDateTime;
import java.util.concurrent.ThreadLocalRandom;

@Service // Spring will manage this class as a service component (business logic)
public class UrlService {

    private final UrlRepository urlRepository;

    public UrlService(UrlRepository urlRepository) { // Dependency Injection by constructor (Repository)
        this.urlRepository = urlRepository;
    }

    public String shortenUrl(String originalUrl) {
        String shortCode = generateShortCode(); // Aleatory code generation

        UrlEntity urlEntity = new UrlEntity();
        urlEntity.setOriginalUrl(originalUrl); // a001_original_url
        urlEntity.setShortCode(shortCode); // a001_short_code
        urlEntity.setCreatedAt(LocalDateTime.now()); // a001_created_at

        urlRepository.save(urlEntity); // Insert into database

        return shortCode;
    }

    public String getOriginalUrl(String shortCode) {
        return urlRepository.findByShortCode(shortCode)
                .map(UrlEntity::getOriginalUrl)
                .orElse(null);
    }

    private String generateShortCode() {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder code = new StringBuilder();
        ThreadLocalRandom random = ThreadLocalRandom.current();

        for (int i = 0; i < 6; i++) { // 6-character code
            code.append(characters.charAt(random.nextInt(characters.length())));
        }
        return code.toString();
    }
}
