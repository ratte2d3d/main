import { Component, ElementRef, ViewChild } from '@angular/core';
import { coreImports } from '../../../core/core.imports';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Frameworks, Languages } from '../programming/programming.model';

@Component({
  selector: 'app-top',
  imports: [...coreImports],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
})
export class TopComponent {
  
  scroll(className: string) {
    const section = document.querySelector(`.${className}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  languageChartData: ChartConfiguration<'radar'>['data'] = {
    labels: [Languages.C, Languages.CSHARP, Languages.CPP, Languages.PYTHON, Languages.TYPESCRIPT],
    datasets: [
      {
        label: Languages.NAME,
        data: [3, 2, 2, 4, 3],
        fill: true,
        backgroundColor: 'rgba(54, 235, 123, 0.3)',
        borderColor: 'rgba(54, 235, 123, 1)',
        pointBackgroundColor: 'rgba(54, 235, 123, 1)',
        borderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  frameworkChartData: ChartConfiguration<'radar'>['data'] = {
    labels: [Frameworks.ANGULAR, Frameworks.DJANGO, Frameworks.DOTNET],
    datasets: [
      {
        label: Frameworks.NAME,
        data: [3, 2, 2],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  }

  radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: { stepSize: 1 },
        pointLabels: {
          font: { size: 16 },
        },
      },
    },
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 14 },
        },
      },
    },
  };

  // showChart = false;
  // ngAfterViewInit() {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         try {
  //           this.showChart = true;
  //           // Chart.js をリセットしてアニメーションを再生
  //           this.chartDirective?.chart?.reset();
  //           this.chartDirective?.update();
  //         } catch (e) {
  //           // 安全にフォールバック：showChart トグルでテンプレート内で再描画する方法も可能
  //           this.showChart = false;
  //           // 少し待ってから true に戻すことで再描画・再アニメーションを誘発
  //           setTimeout(() => (this.showChart = true), 50);
  //         }
  //       }
  //     });
  //   });

  //   observer.observe(this.chartWrapper.nativeElement);
  // }

  constructor() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}