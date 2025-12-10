import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { FilmType } from '@core/schemas/film.schema';

@Component({
  selector: 'app-statistics',
  imports: [BaseChartDirective],
  template: ` <main class="w-[500px] h-auto p-12 bg-white rounded-xl shadow-xl">
    @defer (on viewport) {
    <div>
      <canvas
        baseChart
        [data]="barChartData"
        [options]="barChartOptions"
        [type]="barChartType"
      ></canvas>
    </div>
    } @placeholder {
    <p class="text-center mt-10 text-gray-400">Cargando estadísticas...</p>
    } @loading {
    <p class="text-center mt-10 text-gray-400 animate-pulse">Preparando gráfico...</p>
    }
  </main>`,
})
export class Statistics implements OnInit {
  @Input() data!: FilmType[] | null;
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective<'bar'>;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'],
    datasets: [{ data: [65, 59, 80, 81, 56, 55, 40, 220], label: 'Series A' }],
  };
  public barChartType = 'bar' as const;

  ngOnInit(): void {}
}
