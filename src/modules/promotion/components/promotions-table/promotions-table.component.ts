import { map } from 'rxjs/operators';
import { PromotionService } from './../../services/promotion.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
    selector: 'sb-promotions-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './promotions-table.component.html',
    styleUrls: ['promotions-table.component.scss'],
})
export class PromotionsTableComponent implements OnInit {
    pageSize = 10;
    public page = 1;
    public total = 0;
    public url = environment.url;
    promotions$:any;
    constructor(private _promotionsService: PromotionService) {}
    ngOnInit() {
        this.getPromotions(this.page);
    }
    
    getPromotions(page:number){
        this.promotions$= this._promotionsService.getPromotions(page).pipe(map((data=> data.data.promotions)));
   
    }
    previousPage(){
        if(this.page>1){
            this.page=this.page-1;
            this.getPromotions(this.page);
        }
    }
    nextPage(){
        this.page=this.page+1;
        this.getPromotions(this.page);
    }
    onPageChange(pageNum: number): void {
        this.page = pageNum;
        this.getPromotions(pageNum)
    }
}
