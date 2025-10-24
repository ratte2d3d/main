import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KohamaYujinComponent } from './kohama-yujin.component';

describe('KohamaYujinComponent', () => {
  let component: KohamaYujinComponent;
  let fixture: ComponentFixture<KohamaYujinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KohamaYujinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KohamaYujinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
