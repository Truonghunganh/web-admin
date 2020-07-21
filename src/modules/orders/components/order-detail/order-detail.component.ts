import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OrdersService } from '@modules/orders/services';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Component({
    selector: 'sb-order-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './order-detail.component.html',
    styleUrls: ['order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
    public orderId: number;
    public orderDetail = {};
    public url = environment.url;

    constructor(private ordersService: OrdersService, private router: ActivatedRoute) {
        this.orderId =  Number(this.router.snapshot.paramMap.get('id'));
    }

    ngOnInit() {
       this.getDetailOrder(this.orderId)
    }

    getDetailOrder(orderId: number) {
         this.ordersService.getDetailOrder(orderId).subscribe(response => {
            this.orderDetail = response.data
            console.log(this.orderDetail)
        })
    }
}        

