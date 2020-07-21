import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CustomersService } from './../../services/customers.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { UserCommonService } from '@common/services';

@Component({
    selector: 'sb-customers-table',
 //  changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './customers-table.component.html',
    styleUrls: ['customers-table.component.scss'],
})
export class CustomersTableComponent implements OnInit {
    pageSize = 10;
    public page = 1;
    public total = 0;
    status=1;
    public url = environment.url;
    constructor(private _customerService:CustomersService,private router:Router, private userService: UserCommonService) {}
    ngOnInit() {
        this.getCustomers(1,1);
    }
    customers$: any;
    getCustomers(page:number, status:number){
         this.customers$=this._customerService.getCustomers(page, status).pipe(
            map(data => data.data.users)
        )
        
        
    }
    previousPage(){
        if(this.page>1){
            this.page=this.page-1;
            this.getCustomers(this.page,this.status);
        }
    }
    nextPage(){
        this.page=this.page+1;
        this.getCustomers(this.page,this.status);

    }
   
    trangthai(){
        if (this.status==1) {
            this.getCustomers(this.page,0);
            this.status=0;
        }
        else{
            this.getCustomers(this.page,1);
            this.status=1;
        }
    }
    onPageChange(pageNum: number): void {
        this.page = pageNum;
        this.getCustomers(pageNum,this.status)
    }

    // navigaDetail(categoryId: number) {
    //     this.router.navigate([`/services/list/${categoryId}`]);
    // }
}
