import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';
import { ManageAssetsComponent } from './manage-assets.component';
import { AssetRegistrationRequestComponent } from './asset-registration-request.component';
import { LoginFirstComponent } from './login-first.component';

@Injectable()
export class MenuService {
    getManageAssetsMenu() {
        return new MenuItem(ManageAssetsComponent, {

        });
    }

    getAssetRegistrationMenu() {
        return new MenuItem(AssetRegistrationRequestComponent, {

        });
    }

    getLoginFirstMenu() {
        return new MenuItem(LoginFirstComponent, {});
    }
}