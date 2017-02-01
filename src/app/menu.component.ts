import { Component } from '@angular/core';

@Component({
    selector: 'left-pane',
    template: `<div id="left-pane">
        {{title}}
    </div>`,
    styles: [`
        #left-pane {
            width: 100%;
            height: 100%;
            padding: 10px;
        }
    `]
})
export class MenuComponent {
    private title: string;
    constructor() {
        this.title = "menu here..";
    }
}