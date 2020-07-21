import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sb-total',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './total.component.html',
    styleUrls: ['total.component.scss'],
})
export class TotalComponent implements OnInit {
    @Input('background') background = '';
    @Input('link') link = '';
    @Input('nameObject') nameObjectChild = '';

    //customClasses: string[] = [];

    constructor() {}
    ngOnInit() {
        // if (this.background) {
        //     this.customClasses.push(this.background);
        // }
        // if (this.color) {
        //     this.customClasses.push(this.color);
        // }
    }
}
