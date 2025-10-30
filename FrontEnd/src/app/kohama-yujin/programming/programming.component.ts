import { Component } from '@angular/core';
import { coreImports } from '../../../core/core.imports';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Frameworks, Languages } from './programming.model';

@Component({
  selector: 'app-programming',
  imports: [...coreImports, RouterModule],
  templateUrl: './programming.component.html',
  styleUrl: './programming.component.scss'
})
export class ProgrammingComponent {

  boardGameManagementTechnologies = [
    Frameworks.ANGULAR,
    Frameworks.DJANGO,
  ];

  quizCppTechnologies = [
    Languages.CPP,
  ];

  portFolioTechnologies = [
    Frameworks.ANGULAR,
    Languages.TYPESCRIPT,
  ];
  
  navigate(path: string) {
    this.router.navigate([path], {relativeTo: this.route});
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
