import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'statistics',
  imports: [BaseChartDirective],
  templateUrl: './statistics.html',
})
export class Statistics {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public lineDataConfig: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [20, 40, 12, 50, 70, 120, 34],
        label: 'dolars every day!',
        backgroundColor: 'rgba(126, 236, 236, 0.29)',
        borderColor: 'rgba(255,255,255)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['monday', 'tuesday', 'wednesday', 'thurday', 'friday'],
  };

  public lineOptionConfig: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
        borderWidth: 5,
      },
    },

    scales: {
      y: {
        position: 'left',
      },
    },

    plugins: {
      legend: { display: true },
    },
  };

  public typeLine: ChartType = 'line';
}
