import {NgModule} from '@angular/core';
import {RouterModule, Routes}   from '@angular/router';
import {ShopComponent} from "./shop/shop.component";

const appRoutes: Routes = [{
    path: 'shops',
    component: ShopComponent
}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {useHash: true}
        )
    ],
    exports: [
        RouterModule
    ]
})

export class ShopsRoutingModule {
}
