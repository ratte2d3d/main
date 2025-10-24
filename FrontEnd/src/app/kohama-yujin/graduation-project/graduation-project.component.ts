import { Component, ViewChild } from '@angular/core';
import { coreImports } from '../../../core/core.imports';
import { BachelorComponent } from './bachelor/bachelor.component';

@Component({
  selector: 'app-graduation-project',
  imports: [...coreImports, BachelorComponent],
  templateUrl: './graduation-project.component.html',
  styleUrl: './graduation-project.component.scss',
})
export class GraduationProjectComponent {
  pageIndex = 0;

  @ViewChild('bachelor') bachelor!: BachelorComponent;

  onTabChange(event: any) {
    this.pageIndex = event.index;
  }
}
