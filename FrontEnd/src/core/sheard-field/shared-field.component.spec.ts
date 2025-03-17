import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheardFieldComponent } from './shared-field.component';

describe('InputComponent', () => {
  let component: SheardFieldComponent;
  let fixture: ComponentFixture<SheardFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheardFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SheardFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
