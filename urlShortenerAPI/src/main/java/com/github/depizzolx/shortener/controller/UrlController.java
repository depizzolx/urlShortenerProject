package com.github.depizzolx.shortener.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.github.depizzolx.shortener.UrlResponse;
import com.github.depizzolx.shortener.UrlService;
import com.github.depizzolx.shortener.UrlRequest;
import java.net.URI;

@RestController
@RequestMapping("/api/urls")
public class UrlController {

    private final UrlService urlService;

    // Injetamos o Service aqui
    public UrlController(UrlService urlService) {
        this.urlService = urlService;
    }

    @PostMapping
    public ResponseEntity<UrlResponse> shortenUrl(@RequestBody UrlRequest request) {

        String shortCode = urlService.shortenUrl(request.url());
        // Retorna apenas o código - o frontend constrói a URL completa
        return ResponseEntity.ok(new UrlResponse(shortCode, shortCode));
    }

    @GetMapping("/{code}")
    public ResponseEntity<Void> redirect(@PathVariable("code") String code) {

        String originalUrl = urlService.getOriginalUrl(code);

        if (originalUrl == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.status(HttpStatus.FOUND)
                .location(URI.create(originalUrl))
                .build();
    }
}
