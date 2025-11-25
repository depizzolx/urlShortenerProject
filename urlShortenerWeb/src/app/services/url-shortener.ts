import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ShortenResponse {
  url: string;
  code: string;
}

@Injectable({
  providedIn: 'root',
})

export class UrlShortener {

  private apiUrl = 'http://localhost:8080/api/urls';
  constructor(private http: HttpClient) {}

  shortenUrl(originalUrl: string): Observable<ShortenResponse> {
    return this.http.post<ShortenResponse>(this.apiUrl, { url: originalUrl });
  }
}
