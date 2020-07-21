import { map } from 'rxjs/operators';
import { Category } from '@modules/categories/models';
import { environment } from './../../../../environments/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
    selector: 'sb-categories-form-repair',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './categories-form-repair.component.html',
    styleUrls: ['categories-form-repair.component.scss'],
})
export class CategoriesFormRepairComponent implements OnInit {
    categoryId:number=0;
    image_id:number=0;
    category:any;
    category$:any;
    public url = environment.url+"/";
    
    constructor(private _categoryService: CategoriesService,private routeAct:ActivatedRoute, private router: Router) {
             
    }
    ngOnInit() {
        this.categoryId=Number(this.routeAct.snapshot.paramMap.get('categoryId'));
        this.getCategory();
    }
    getCategory() {
      this.category$=this._categoryService.getCategory(this.categoryId).pipe(map(data=>this.category=data.data))   
   }
 
    @ViewChild('myPond') myPond: any;
  pondOptions = {
        class: 'my-filepond',
        multiple: true,
        labelIdle: 'Drop files here',
        acceptedFileTypes: 'image/jpeg, image/png'
  }
  pondHandleInit() {
  }

  
  pondHandleAddFile(event: any) {
    const file = <File>event.target.files[0];
 
    this._categoryService.updateFile(file).subscribe(data => {
      this.category.image.id=data.data.id;
      console.log(data);
      console.log(this.category);
      
      
    })
      
  }
  
  repairCategory(){
    const category=new Category(this.category.name,this.category.description,this.category.image.id);    
    this._categoryService.upDateCategory(category,this.categoryId).subscribe(
      data=>{
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: data.message,
              showConfirmButton: false,
             timer: 1000
            })
            this.router.navigate(['/categories'])
         
          }
         
  )      

  }


}
