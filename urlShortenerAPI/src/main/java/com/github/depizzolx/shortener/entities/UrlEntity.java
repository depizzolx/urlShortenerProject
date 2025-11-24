package com.github.depizzolx.shortener.entities;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "t001_url_map")
public class UrlEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Id generation
    private Long id;

    @Column(name = "a001_original_url", nullable = false) // Original URL cannot be null
    private String originalUrl;

    @Column(name = "a001_short_code")
    private String shortCode;

    @Column(name = "a001_created_at")
    private LocalDateTime createdAt;

    public UrlEntity() {
    }

    public UrlEntity(String originalUrl, String shortCode, LocalDateTime createdAt) {
        this.originalUrl = originalUrl;
        this.shortCode = shortCode;
        this.createdAt = createdAt;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getOriginalUrl() { return originalUrl; } // a001_original_url
    public void setOriginalUrl(String originalUrl) { this.originalUrl = originalUrl; }

    public String getShortCode() { return shortCode; } // a001_short_code
    public void setShortCode(String shortCode) { this.shortCode = shortCode; }

    public LocalDateTime getCreatedAt() { return createdAt; } // a001_created_at
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
