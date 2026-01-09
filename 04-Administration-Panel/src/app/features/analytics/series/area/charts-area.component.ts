import { Component, Input, AfterViewInit, ViewChild, type ElementRef } from '@angular/core';
import {
  createChart,
  IChartApi,
  TimeChartOptions,
  DeepPartial,
  AreaSeries,
  ColorType,
} from 'lightweight-charts';
import { AreaParams } from '@features/analytics/types/chart-params';

/**
 * IDEA DE GRAFICO DE AREA
 *
 * NUMERO DE USUARIOS INACTIVOS VS ACTIVOS
 *
 * EJE X: Meses
 * EJE Y: Valores de los usuarios activos e inactivos superpuestos en el mismo grafico
 */

@Component({
  selector: 'app-area-component',
  imports: [],
  template: ` <article #area class="h-72 w-1/3 shadow-sm"></article> `,
})
export default class ChartsArea implements AfterViewInit {
  @Input() params!: AreaParams[];
  @ViewChild('area') articleChart!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const options: DeepPartial<TimeChartOptions> = {
      layout: {
        textColor: '#374151',
        background: {
          type: ColorType.Solid,
          color: '#bfbfbf',
        },
      },

      grid: {
        vertLines: { color: 'rgba(0,0,0,0.05)' },
        horzLines: { color: 'rgba(0,0,0,0.05)' },
      },

      rightPriceScale: {
        borderVisible: false,
      },

      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: false,
      },
    };

    const chart = this.generateChart(this.articleChart.nativeElement, options);
    const areaSeries = chart.addSeries(AreaSeries, {
      lineWidth: 2,
      lineColor: '#ececec',

      topColor: 'rgba(236, 236, 236, 0.35)',
      bottomColor: 'rgba(236, 236, 236, 0)',

      priceLineVisible: false,
    });

    chart.applyOptions({
      crosshair: {
        mode: 1,
        vertLine: {
          color: 'rgba(0,0,0,0.2)',
          width: 1,
          style: 0,
          labelBackgroundColor: '#22c55e',
        },
        horzLine: {
          visible: false,
        },
      },
    });

    areaSeries.setData(
      this.params.map((p) => ({
        time: p.time,
        value: p.value,
      }))
    );

    chart.timeScale().fitContent();
  }

  generateChart(element: HTMLElement, options: DeepPartial<TimeChartOptions>): IChartApi {
    return createChart(element, options as TimeChartOptions);
  }
}
