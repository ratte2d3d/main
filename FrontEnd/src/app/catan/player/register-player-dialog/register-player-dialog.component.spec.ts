import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlayerDialogComponent } from './register-player-dialog.component';

describe('RegisterPlayerDialogComponent', () => {
  let component: RegisterPlayerDialogComponent;
  let fixture: ComponentFixture<RegisterPlayerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPlayerDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPlayerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
