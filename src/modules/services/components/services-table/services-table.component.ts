import { environment } from './../../../../environments/environment';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ServicesService } from './../../services/services.service';
import {  map } from 'rxjs/operators';
import {Location} from '@angular/common'; 
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-services-table',
//    changeDetection: ChangeDetectionStrategy.OnPush,    
    templateUrl: './services-table.component.html',
    styleUrls: ['services-table.component.scss'],
})
export class ServicesTableComponent implements OnInit {
    pageSize = 10;
    public page = 1;
    public total = 0;
    public url = environment.url;
    categoryId = 0;
    services$:any;
    categoryName = "";
    categories$: any;
    category:any;
    constructor(private _servicesService:ServicesService,private router:Router,private route:ActivatedRoute, private location: Location) {
    }

    ngOnInit() {
        this.categoryId=Number(this.route.snapshot.paramMap.get('id'));    
        this.getServices(this.categoryId,1);        
        this.getCategories();
        this.getNamecategory(this.categoryId);
    }
    getNamecategory(categoryId: number){
        this._servicesService.getCategory(categoryId).subscribe(
            data =>{
                this.categoryName=data.data.name;
            }
        )
    }
    getServices(id:number, page: number){
        this.services$= this._servicesService.getServices(id,page).pipe(map(data=>data.data.services)); 
         
    }
    
    
    getCategories() {
        this.categories$=this._servicesService.getCategories().pipe(
            map(data =>data.data.categories)
        )
    }
    onChangeCategory(categoryId:Number) {
        this.categoryId = Number(categoryId);
        this.getServices(this.categoryId,1);
        this.getNamecategory(this.categoryId);
        this.location.go(`services/list/${this.categoryId}`);
        
    }
    previousPage(){
        if(this.page>1){
            this.page=this.page-1;
            this.getServices(this.categoryId,this.page);
        }
    }
    nextPage(){
        this.page=this.page+1;
        this.getServices(this.categoryId,this.page);

    }
   
    deleteService(id:number){
                          
         Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then(async (result)  => {
            if (result.value) {
                this._servicesService.deleteService(id).subscribe(
                    async result=>{
                        this.router.navigate([`/categories`]);
                        await Swal.fire(
                            'Deleted!',
                            result.messages,
                          )
                        this.router.navigate([`/services/list/${this.categoryId}`]);
                                
                    })
                    
            } else if (result.dismiss == Swal.DismissReason.cancel)  {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                  )
            
            }
          })
        
    }

    onPageChange(pageNum: number): void {
        this.page = pageNum;
        this.getServices(this.categoryId, pageNum);
    }
    
    
}
