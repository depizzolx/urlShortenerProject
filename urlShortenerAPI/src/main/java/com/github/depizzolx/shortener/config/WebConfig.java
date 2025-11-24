package com.github.depizzolx.shortener.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) { // Rote configuration for Angular
        registry.addMapping("/**").allowedOrigins("http://localhost:4200").allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
    }
}
