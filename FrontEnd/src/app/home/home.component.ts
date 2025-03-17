import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { coreImports } from '../../core/core.imports';

@Component({
  selector: 'app-home',
  imports: [...coreImports, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
