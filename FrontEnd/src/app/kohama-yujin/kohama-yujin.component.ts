import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { coreImports } from '../../core/core.imports';

@Component({
  selector: 'app-kohama-yujin',
  imports: [...coreImports, RouterModule],
  templateUrl: './kohama-yujin.component.html',
  styleUrl: './kohama-yujin.component.scss',
})
export class KohamaYujinComponent {}
