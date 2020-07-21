import  Swal from 'sweetalert2';
import { PromotionService } from './../../services/promotion.service';
import { Promotion } from './../../models/promotion.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'sb-promotions-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './promotions-form.component.html',
    styleUrls: ['promotions-form.component.scss'],
    providers: [DatePipe]
})
export class PromotionsFormComponent implements OnInit {
    constructor(private _promotionsService: PromotionService, private datePipe: DatePipe) {}
    ngOnInit() {}
    parseDate(dateString: string) {
        if (dateString) {
            return new Date(dateString);
        }
        
    }
    addPromotion(name:string,start_date:string,end_date:string,discount:number){
        start_date=String(this.datePipe.transform(start_date,"yyyy-MM-dd"));
        end_date=String(this.datePipe.transform(end_date,"yyyy-MM-dd"));
        discount=Number(discount);
        const promotion=new Promotion(name,start_date,end_date,discount);
        console.log(promotion);
        
        this._promotionsService.addPromotion(promotion).subscribe(
            data=>{
                if(data!=null){
                    Swal.fire(
                        'Add Promotion!',
                        'Your add promotion has been success.',
                        'success'
                      )
                }else{
                    Swal.fire(
                        'Add Promotion!',
                        'Your add promotion has been fail.',
                    
                      )
                }
                
            }
        );
    }
}
