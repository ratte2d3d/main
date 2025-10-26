import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGameManagementComponent } from './board-game-management.component';

describe('BoardGameManagementComponent', () => {
  let component: BoardGameManagementComponent;
  let fixture: ComponentFixture<BoardGameManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardGameManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardGameManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
