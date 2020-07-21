import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'
@Component({
    selector: 'sb-categories-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './categories-table.component.html',
    styleUrls: ['categories-table.component.scss'],
})
export class CategoriesTableComponent implements OnInit {
    pageSize = 10;
    public page = 1;
    public total = 0;
    public url = environment.url;

    public categories$: any;

    constructor(private _categoryService: CategoriesService,private router:Router) {
    }

    ngOnInit() {
        this.getCategories(this.page);  
    }
    
    getCategories(page:number) {
        this.categories$ =  this._categoryService.getCategories(page).pipe(
            map(response => response.data.categories));
    }
    previousPage(){
        if(this.page>1){
            this.page=this.page-1;
            this.getCategories(this.page);
        }
    }
    nextPage(){
        this.page=this.page+1;
        this.getCategories(this.page);

    }
   
    deleteCategory(id: number) {
        this.router.navigate([`categories/list`])
                
         Swal.fire({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this category?!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
                this._categoryService.deleteCategory(id).subscribe(
                    data=>{
                        if(data!=null){
                            if(data.success){
                                Swal.fire({
                                  position: 'center',
                                  icon: 'success',
                                  title: data.messages,
                                  showConfirmButton: false,
                                  timer: 1000
                                  })
                                  this.router.navigate([`categories/list`])
                            }              
                           
                        }else{
                            Swal.fire(
                                'Cancelled',
                                'Your imaginary file is safe :)',
                                'error'
                              )
                  
                        }
                    })   
   
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your category is safe :)',
              'error'
            )
            this.router.navigate([`categories/list`])
            
            }
          })
                
    }

    navigaDetail(categoryId: number) {
        this.router.navigate([`/services/list/${categoryId}`]);
    }
}
