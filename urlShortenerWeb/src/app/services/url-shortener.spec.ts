import { TestBed } from '@angular/core/testing';

import { UrlShortener } from './url-shortener';

describe('UrlShortene', () => {
  let service: UrlShortener;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlShortener);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
