import { Category } from '@modules/categories/models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from './../../services/categories.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
    selector: 'sb-categories-form',
    templateUrl: './categories-form.component.html',
    styleUrls: ['categories-form.component.scss'],
})
export class CategoriesFormComponent implements OnInit {
  constructor(private _categoriesService: CategoriesService, private router: Router) {}
  ngOnInit() {
      
  }
  image_id:number=0;
  @ViewChild('myPond') myPond: any;

  pondOptions = {
    class: 'my-filepond',
    labelIdle: 'Drop files here',
  }

  pondHandleInit() {
  }
  fileData:any;
  pondHandleAddFile(event: any) {
      this.fileData = <File>event.target.files[0];
      this._categoriesService.updateFile(this.fileData).subscribe(data => {
        if(data.success){
          this.image_id=data.data.id;
          console.log(this.image_id);
        }
        
      })
  }

  addCategory(name:string,description:string){
      if (this.image_id==0) {
        Swal.fire(
            'Image of category!',
            'Your Image of category hasnot been .',
          )
      } else {
        const categoryrepair=new Category(name,description,this.image_id);
        this._categoriesService.addCategory(categoryrepair).subscribe(
          data=>{
            if(data.success){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: data.messages,
                showConfirmButton: false,
                timer: 1000
                })
               this.router.navigate([`/categories/list`]);
            }              
             
          }
        )      
      }

  }
    
}
