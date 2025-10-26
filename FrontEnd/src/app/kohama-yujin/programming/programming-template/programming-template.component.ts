import { Component, Input } from '@angular/core';
import { coreImports } from '../../../../core/core.imports';

@Component({
  selector: 'app-programming-template',
  imports: [...coreImports],
  templateUrl: './programming-template.component.html',
  styleUrl: './programming-template.component.scss'
})
export class ProgrammingTemplateComponent {
  @Input() title!: string;
  @Input() images!: string[];
  @Input() image_descriptions!: string[];
  @Input() abbreviation!: string;
  @Input() period_title!: string;
  @Input() period_description!: string[];
  @Input() abstract_description!: string[];
  @Input() role_title!: string;
  @Input() role_description!: string[];
  @Input() used_technique_header!: string[];
  @Input() used_technique_name!: string[][];
  @Input() background_title!: string;
  @Input() background_description!: string[];
  @Input() ingenuity_title!: string;
  @Input() ingenuity_list!: string[];
  @Input() future_title!: string;
  @Input() future_description!: string[];
  @Input() product_url!: string;
  @Input() gitHub_url!: string;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scroll(className: string) {
    const section = document.querySelector(`.${className}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
