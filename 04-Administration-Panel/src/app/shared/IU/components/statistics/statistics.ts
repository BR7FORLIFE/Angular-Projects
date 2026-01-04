import { Component, ViewChild, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { FilmType } from '@core/schemas/film.schema';

@Component({
  selector: 'app-statistics',
  imports: [BaseChartDirective],
  template: ` <section class="h-auto w-125 rounded-xl bg-white p-12 shadow-xl">
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
    <p class="mt-10 text-center text-gray-400">Cargando estadísticas...</p>
    } @loading {
    <p class="mt-10 animate-pulse text-center text-gray-400">Preparando gráfico...</p>
    }
  </section>`,
})
export class Statistics {
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
}
