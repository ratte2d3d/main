import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachelorComponent } from './bachelor.component';

describe('BachelorComponent', () => {
  let component: BachelorComponent;
  let fixture: ComponentFixture<BachelorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BachelorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BachelorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
