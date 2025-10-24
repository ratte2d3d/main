import { Component } from '@angular/core';

@Component({
  selector: 'app-bachelor',
  imports: [],
  templateUrl: './bachelor.component.html',
  styleUrl: './bachelor.component.scss',
})
export class BachelorComponent {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToAbstract() {
    const section = document.querySelector('.abstract');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToBackground() {
    const section = document.querySelector('.background');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToRole() {
    const section = document.querySelector('.role');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToMethod() {
    const section = document.querySelector('.method');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAchievement() {
    const section = document.querySelector('.achievement');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTechnique() {
    const section = document.querySelector('.technique');
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}