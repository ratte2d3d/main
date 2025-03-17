import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { coreImports } from '../../core/core.imports';

@Component({
  selector: 'app-catan',
  imports: [...coreImports, RouterModule],
  templateUrl: './catan.component.html',
  styleUrl: './catan.component.scss',
})
export class CatanComponent {}
