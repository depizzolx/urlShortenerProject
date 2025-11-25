import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ResponseComponent } from './components/response/response.component';
import { UrlShortener, ShortenResponse } from './services/url-shortener';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeroComponent, ResponseComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urlShortenerWeb';
  shortenedUrl: string | null = null;
  errorMessage: string | null = null;
  isLoading: boolean = false;

  constructor(private urlShortener: UrlShortener) {}

  onShorten(originalUrl: string) {
    this.isLoading = true;
    this.errorMessage = null;
    this.urlShortener.shortenUrl(originalUrl).subscribe({
      next: (response: ShortenResponse) => {
        this.shortenedUrl = response.url;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error shortening URL:', error);
        this.errorMessage = 'Failed to shorten URL. Please try again.';
        this.shortenedUrl = null;
        this.isLoading = false;
      }
    });
  }
}
