import { Component, EventEmitter, Output } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropdownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() pageSelected = new EventEmitter<string>();

  onSelect(page: string) {
    this.pageSelected.emit(page);
  }
}