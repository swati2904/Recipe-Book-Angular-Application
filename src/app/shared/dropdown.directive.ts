import { Directive, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open' ) isOpen = false;

    // this one is only for user able to click the dropdown then the dropdown will be closed.

    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }

    // if user wanna click anywhere entire the whole page to close the dropdown.
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}
}