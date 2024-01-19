import { Directive, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  //@HostListener('click') toggleShow() {
  //  this.isOpen = !this.isOpen;
  //}

  @HostListener('document:click', ['$event']) toggleShow(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}
}
