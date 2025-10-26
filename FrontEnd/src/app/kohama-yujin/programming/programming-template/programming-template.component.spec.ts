import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingTemplateComponent } from './programming-template.component';

describe('ProgrammingTemplateComponent', () => {
  let component: ProgrammingTemplateComponent;
  let fixture: ComponentFixture<ProgrammingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
