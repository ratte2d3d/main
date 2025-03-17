import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatanComponent } from './catan.component';

describe('CatanComponent', () => {
  let component: CatanComponent;
  let fixture: ComponentFixture<CatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
