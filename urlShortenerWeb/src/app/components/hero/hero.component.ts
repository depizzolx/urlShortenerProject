import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  url: string = '';
  @Output() shorten = new EventEmitter<string>();

  @Input() isLoading: boolean = false;

  onSubmit(inputValue: string) {
    console.log('HeroComponent onSubmit, inputValue:', inputValue);
    if (inputValue) {
      this.shorten.emit(inputValue);
    }
  }
}
