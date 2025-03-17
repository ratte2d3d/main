import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGameDialogComponent } from './register-game-dialog.component';

describe('RegisterGameDialogComponent', () => {
  let component: RegisterGameDialogComponent;
  let fixture: ComponentFixture<RegisterGameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterGameDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterGameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
