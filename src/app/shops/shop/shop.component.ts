import {Component, OnInit} from '@angular/core';
import {Shop} from "../shop";
import {ShopService} from "../shop.service";

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

    errorMessage: string;
    shops: Shop[];

    constructor(private shopService: ShopService) {
    }

    ngOnInit() {
        this.getShops();
    }

    getShops() {
        this.shopService.getShops()
            .subscribe(
                shops => {this.shops = shops;console.dir(shops);},
                error => this.errorMessage = <any>error
            );

    }

}
