import { Component, ChangeDetectorRef } from '@angular/core';
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

  constructor(private urlShortener: UrlShortener, private cdr: ChangeDetectorRef) {}

  onShorten(originalUrl: string) {
    this.isLoading = true;
    this.errorMessage = null;
    this.shortenedUrl = null;
    this.urlShortener.shortenUrl(originalUrl).subscribe({
      next: (response: ShortenResponse) => {
        console.log('Received response:', response);
        // Constrói a URL completa usando o domínio atual
        this.shortenedUrl = `${window.location.origin}/${response.code}`;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error shortening URL:', error);
        this.errorMessage = 'Failed to shorten URL. Please try again.';
        this.shortenedUrl = null;
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
