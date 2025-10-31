import { Component } from '@angular/core';
import { coreImports } from '../../../core/core.imports';
import { ChartConfiguration } from 'chart.js';
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

  language = Languages.NAME;
  languageChartData: ChartConfiguration<'radar'>['data'] = {
    labels: [Languages.C, Languages.CSHARP, Languages.CPP, Languages.PYTHON, Languages.TYPESCRIPT],
    datasets: [
      {
        label: 'Level',
        data: [3, 2, 2, 4, 3],
        fill: true,
        backgroundColor: 'rgba(54, 235, 123, 0.3)',
        borderColor: 'rgba(54, 235, 123, 1)',
        pointBackgroundColor: 'rgba(54, 235, 123, 1)',
        pointRadius: 4,
      },
      {
        label: 'Year',
        data: [5, 1, 0.5, 1.5, 1],
        fill: true,
        backgroundColor: 'rgba(243, 95, 144, 0.3)',
        borderColor: 'rgba(243, 95, 144, 1)',
        pointBackgroundColor: 'rgba(243, 95, 144, 1)',
        pointRadius: 4,
      },
    ],
  };

  framework = Frameworks.NAME;
  frameworkChartData: ChartConfiguration<'radar'>['data'] = {
    labels: [Frameworks.ANGULAR, Frameworks.DJANGO, Frameworks.DOTNET],
    datasets: [
      {
        label: 'Level',
        data: [3, 2, 2],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointRadius: 4,
      },
      {
        label: 'Year',
        data: [1, 0.5, 0.5],
        fill: true,
        backgroundColor: 'rgba(243, 95, 144, 0.3)',
        borderColor: 'rgba(243, 95, 144, 1)',
        pointBackgroundColor: 'rgba(243, 95, 144, 1)',
        pointRadius: 4,
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
          font: { size: 12 },
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 12 },
        },
      },
    },
  };

  constructor() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}