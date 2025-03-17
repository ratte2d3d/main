import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatanHomeComponent } from './catan-home.component';

describe('CatanHomeComponent', () => {
  let component: CatanHomeComponent;
  let fixture: ComponentFixture<CatanHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatanHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
