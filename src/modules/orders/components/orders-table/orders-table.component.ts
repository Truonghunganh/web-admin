import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { OrdersService } from '@modules/orders/services';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
    selector: 'sb-orders-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './orders-table.component.html',
    styleUrls: ['orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit {
    pageSize = 10;
    public page = 1;
    public total = 0;
    public url = environment.url;
    filterForm: FormGroup = new FormGroup({
        text: new FormControl()
    })
    selectForm: FormGroup = new FormGroup({
        selectStatus: new FormControl()
    })
    
    public orders$: Observable<any> = new Observable<any>();

    constructor(
        private ordersService: OrdersService, 
        private formBuilder: FormBuilder,
        private router: Router) {}

    ngOnInit() {
        this.getListOrders()
    }

    get filter() { return this.filterForm.controls; }

    get select() { return this.selectForm.controls; }

    getListOrders(text="",page=1, per_page=this.pageSize, statuses=1) {
        this.orders$ = this.ordersService.getListOrders(text, page, per_page, statuses)
        .pipe(
            map(response =>
                response.data)
        )
    }

    onSubmit() {
        this.getListOrders(this.filter.text.value, this.page, this.pageSize)
    }

    onChangeStatus(status:number) {
        this.getListOrders("", this.page, this.pageSize, status)
    }

    onPageChange(pageNum: number): void {
        this.page = pageNum;
        this.getListOrders("", this.page, this.pageSize)
    }

    navigaDetail(orderId: number) {
        this.router.navigate([`/orders/detail/${orderId}`]);
    }
}
