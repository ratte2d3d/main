import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCppComponent } from './quiz-cpp.component';

describe('QuizCppComponent', () => {
  let component: QuizCppComponent;
  let fixture: ComponentFixture<QuizCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizCppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
