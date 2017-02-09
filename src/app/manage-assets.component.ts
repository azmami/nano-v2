import { Component, Input } from '@angular/core';
import { MenuComponent } from './menu.component';

@Component({
    templateUrl: './manage-assets.component.html',
    styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements MenuComponent {
    @Input() data: any;
    
}