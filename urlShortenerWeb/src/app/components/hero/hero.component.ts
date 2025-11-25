import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  url: string = '';
  @Output() shorten = new EventEmitter<string>();

  @Input() isLoading: boolean = false;

  onSubmit() {
    if (this.url) {
      this.shorten.emit(this.url);
    }
  }
}
