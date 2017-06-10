import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopComponent} from './shop/shop.component';
import {ShopService} from "./shop.service";
import {ShopsRoutingModule} from "./shops-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ShopsRoutingModule
    ],

    providers: [
        ShopService
    ],
    declarations: [ShopComponent]
})
export class ShopsModule {
}
