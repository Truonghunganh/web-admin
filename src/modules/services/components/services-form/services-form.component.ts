import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { Service } from './../../models/services.model';
import { ServicesService } from './../../services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import {Location} from '@angular/common'; 

@Component({
    selector: 'sb-services-form',
    //changeDetection: ChangeDetectionStrategy.OnPush,
 
    templateUrl: './services-form.component.html',
    styleUrls: ['services-form.component.scss'],
})
export class ServicesFormComponent implements OnInit {
    
    categoryId:number=0;
    image_id:number=0;
    categoryName:string="";

    constructor(private routeAct:ActivatedRoute,private router:Router,private _servicesService:ServicesService,private location: Location) {}
  
    ngOnInit() {
      this.categoryName=String(this.routeAct.snapshot.paramMap.get('categoryName'));
      this.categoryId=Number(this.routeAct.snapshot.paramMap.get('categoryId'));
    }
  
    addService(name:string,description:string,price: number){
      price=Number(price);
      if (price<1000) {
        Swal.fire(
          'Price of service!',
          'Your price of service must bigger than 1000.',
        )
        return;
      }
        
      if(this.image_id==0){
        Swal.fire(
            'Image of service!',
            'Your image of service has not been.',
          )
       }else{
        const catergory_ids:any[] = [];
        catergory_ids.push(this.categoryId);
        
        const service=new Service(name,description,price,this.image_id,catergory_ids);
        
        this._servicesService.addService(service).subscribe(
          data=>{
            if(data.success){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: data.messages,
                showConfirmButton: false,
                timer: 1000
                })
               this.router.navigate([`/services/list/${this.categoryId}`]);
            }              
             
          }
        )    
       }    
    
            
   }

  @ViewChild('myPond') myPond: any;

  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png'
  }
  pondFiles = [];
  

  pondHandleInit() {
  }

  pondHandleAddFile(event: any) {
    const fileData = <File>event.target.files[0]; 
    this._servicesService.updateFile(fileData).subscribe(data => {
      this.image_id=data.data.id;
      console.log(this.image_id);
 
  });
}
}
