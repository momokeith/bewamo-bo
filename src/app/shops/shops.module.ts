import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopComponent} from './shop/shop.component';
import {RouterModule}   from '@angular/router';
import {ShopService} from "./shop.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([
                {
                    path: 'shops',
                    component: ShopComponent
                }
            ],
            {useHash: true}
        )
    ],

    providers: [
        ShopService
    ],
    declarations: [ShopComponent]
})
export class ShopsModule {
}
