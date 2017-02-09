import { Component, Input } from '@angular/core';
import { MenuComponent } from './menu.component';

@Component({
    template: `
        <div><h5>login first!!!</h5></div>
    `,
    styles: [``]
})
export class LoginFirstComponent implements MenuComponent {
    @Input() data: any;
    
}