import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { Service } from './../../models/services.model';
import { ServicesService } from './../../services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { environment } from 'environments/environment';
import {Location} from '@angular/common'; 


@Component({
    selector: 'sb-services-update',
    templateUrl: './services-update.component.html',
    styleUrls: ['services-update.component.scss'],
})
export class ServicesUpdateComponent implements OnInit {
    public url = environment.url;
    categoryId:number=0;
    service:any;
    serviceId:number=0;
    constructor(private routerAct:ActivatedRoute,private router:Router,private _servicesService:ServicesService,private location: Location) {
      }
    ngOnInit() {
      this.categoryId=Number(this.routerAct.snapshot.paramMap.get('categoryId'));
      this.serviceId=Number(this.routerAct.snapshot.paramMap.get('serviceId'));
      this.getService();
      
    
    }
    service$:any;
      getService(){
       this.service$=this._servicesService.getService(this.serviceId).pipe(map(data =>this.service= data.data));
         
    }
    updateService(){
    
        if (this.service.price<1000) {
          Swal.fire(
            'Price of service!',
            'Your price of service must bigger than 1000.',
          )
        return;
       }
      const service=new Service(this.service.name, this.service.description, this.service.price, this.service.image.id);        
      this._servicesService.updateService(service,this.serviceId).subscribe(
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
      if(data.success){
        this.service.image.id=data.data.id;
        console.log(this.service.image.id);
        
      }
      
    })
 
  }

}
