import { Component, Input } from '@angular/core';
import { MenuComponent } from './menu.component';

@Component({
    templateUrl: './asset-registration-request.component.html',
    styleUrls: ['./asset-registration-request.component.css']
})
export class AssetRegistrationRequestComponent implements MenuComponent {
    @Input() data: any;
}