import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardService } from '@modules/dashboard/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { element } from 'protractor';

@Component({
    selector: 'sb-charts-pie',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-pie.component.html',
    styleUrls: ['charts-pie.component.scss'],
})
export class ChartsPieComponent implements OnInit, AfterViewInit {
    public dataChartDoctors$ : any;
    @ViewChild('myPieChart') myPieChart!: ElementRef<HTMLCanvasElement>;
    chart!: Chart;
    public labels: Array<string> = [];
    public dataSubChart: Array<number> = [];
    public dataChart = {};

    constructor(private _dashboardService: DashboardService) {}
    ngOnInit() {
        this.getDataChart()
        
    }

    ngAfterViewInit() {
        this.chart = new Chart(this.myPieChart.nativeElement, {
            type: 'pie',
            data: this.dataChart
        });
    }

    getDataChart() {
        this.labels = [];
        this.dataSubChart = []
        this._dashboardService.getDataChart()
        .subscribe(response => {
            response.data.forEach((element:any) => {
                this.labels.push(element.name)
                this.dataSubChart.push(element.number*100/(response.data.length))
            })
            this.dataChart = {
                labels: this.labels,
                datasets: [
                    {
                        data: this.dataSubChart,
                        backgroundColor: ['#007bff', '#dc3545', '#ffc107'],
                    },
                ],
            }
            this.ngAfterViewInit()
        })       
    }
}
