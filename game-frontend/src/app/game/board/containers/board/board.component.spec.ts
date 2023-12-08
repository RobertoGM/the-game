import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardModule } from '../../board.module';
import { MoveTypeEnum } from '../../models/move.model';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, BoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initial state, nothing selected', () => {
    it('should render the 3 possible movements to chose + submit', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelectorAll('button').length).toBe(4);
    });

    it('should disable submit until an option is selected', () => {
      const compiled = fixture.nativeElement as HTMLElement;

      // Accessing last button, which is the submit button
      const allButtons = compiled.querySelectorAll('button');
      expect(allButtons[allButtons.length - 1].textContent).toContain('Submit!');
      expect(allButtons[allButtons.length - 1].disabled).toBeTruthy();

      component.selectedMove = MoveTypeEnum.PAPER;
      fixture.detectChanges();
      expect(allButtons[allButtons.length - 1].disabled).toBeFalsy();
    });
  });
});
