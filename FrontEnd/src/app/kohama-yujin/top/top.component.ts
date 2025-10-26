import { Component } from '@angular/core';
import { coreImports } from '../../../core/core.imports';

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
}
