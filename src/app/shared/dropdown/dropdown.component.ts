import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() options: any;

  @Output() setSelectedOption: EventEmitter<string> = new EventEmitter();

  getSelectedOption(event: Event) {
    this.setSelectedOption.emit((event.target as HTMLInputElement).value);
  }
}
