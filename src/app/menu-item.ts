import { Type } from '@angular/core';

export class MenuItem {
    constructor(public component: Type<any>, public data: any) { }
}