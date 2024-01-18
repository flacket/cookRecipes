import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() pageSelected = new EventEmitter<string>();

  onSelect(page: string) {
    this.pageSelected.emit(page);
  }
}