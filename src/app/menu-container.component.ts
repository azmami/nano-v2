import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { OnChanges, SimpleChange } from '@angular/core';

import { MenuDirective } from './menu.directive';
import { MenuItem } from './menu-item';
import { MenuComponent } from './menu.component';
import { LoginFirstComponent } from './login-first.component';

@Component({
    selector: 'menu-container',
    templateUrl: './menu-container.component.html',
    styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements AfterViewInit, OnDestroy {
    @Input() menuItem: MenuItem;
    @ViewChild(MenuDirective) menuHost: MenuDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngAfterViewInit() {
        this.loadComponent();
    }

    ngOnDestroy() {

    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.loadComponent();
    }

    loadComponent() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.menuItem.component);

        let viewContainerRef = this.menuHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<MenuComponent> componentRef.instance).data = this.menuItem.data;
    }
}