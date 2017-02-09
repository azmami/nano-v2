import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[menu-host]'
})
export class MenuDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}