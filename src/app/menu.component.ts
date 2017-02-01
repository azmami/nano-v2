import { Component } from '@angular/core';

@Component({
    selector: 'main-menu',
    template: `
    <div id="left-pane">
        {{title}}
    </div>`,
    styles: [`
        #left-pane {
            width: 100%;
            height: 100%;
            margin: 0px;
            padding: 0px;
        }
    `]
})
export class MenuComponent {
    private title: string;
    constructor() {
        this.title = "menu here..";
    }
}