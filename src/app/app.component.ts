import { Component } from '@angular/core';
import { MenuItem } from './menu-item';
import { MenuService } from './menu.service';
import { LoginFirstComponent } from './login-first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private menuHidden: boolean = true;
  private mapSize: string = '100%';
  private menuItem: MenuItem;

  constructor(private menuService: MenuService) {
    this.menuItem = this.menuService.getLoginFirstMenu();
  }

  logout($event) {
    this.menuHidden = true;
    this.mapSize = '100%';
    this.menuItem = this.menuService.getLoginFirstMenu();
  }

  showManageAssetsMenu($event) {
    this.menuHidden = false;
    this.mapSize = '70%';
    this.menuItem = this.menuService.getManageAssetsMenu();
  }

  showAssetRegistrationMenu($event) {
    this.menuHidden = false;
    this.mapSize = '70%';
    this.menuItem = this.menuService.getAssetRegistrationMenu();
  }

  showManageProfileMenu($event) {
    this.menuHidden = false;
    this.mapSize = '70%';
    this.menuItem = this.menuService.getManageProfileMenu();
  }
}
