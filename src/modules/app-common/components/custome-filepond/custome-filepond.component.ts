import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'environments/environment';
import { AppCommonService } from '@common/services';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-custome-filepond',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './custome-filepond.component.html',
    styleUrls: ['custome-filepond.component.scss'],
})
export class CustomeFilepondComponent implements OnInit {
  constructor(private _appCommonService: AppCommonService) {}
  ngOnInit() {}

  @ViewChild('myPond') myPond: any;
  myFile: FormData = new FormData();
  result$: Observable<any> = new Observable<any>();

  pondOptions = {
      class: 'my-filepond',
      labelIdle: 'Drop files here',
      server: {
        process:(fieldName:string, file:any, metadata:any, load:any, error:any, progress:any, abort:any, transfer:any, options:any) => {
          this._appCommonService.upload(file).subscribe(
                response => console.log("haha", response)
            )
        }
    }    
  }

  pondHandleAddFile(event: any) {
    
  }
}
