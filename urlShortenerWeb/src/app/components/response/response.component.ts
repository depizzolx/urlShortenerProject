import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-response',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './response.component.html',
  styleUrl: './response.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponseComponent {
  @Input() shortenedUrl: string | null = null;
  @Input() errorMessage: string | null = null;
}
