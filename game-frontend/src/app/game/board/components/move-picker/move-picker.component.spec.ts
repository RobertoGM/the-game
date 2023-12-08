import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovePickerComponent } from './move-picker.component';
import { MoveFigures, MoveTypeEnum } from '../../models/move.model';

describe('MovePickerComponent', () => {
  let component: MovePickerComponent;
  let fixture: ComponentFixture<MovePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the content until figure info is ready', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // Setting the figure but not the data
    component.figure = MoveTypeEnum.PAPER;
    fixture.detectChanges();

    expect(compiled.querySelector('button')).toBeNull();

    // Finally, setting the data
    component.figureData = MoveFigures[MoveTypeEnum.PAPER];
    fixture.detectChanges();

    expect(compiled.querySelector('button')).not.toBeNull();
  });

  it('should show image according to figure info in the input', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // When figure is PAPER
    component.figure = MoveTypeEnum.PAPER;
    component.figureData = MoveFigures[MoveTypeEnum.PAPER];
    fixture.detectChanges();

    expect(compiled.querySelector('img')?.src).toContain('assets/Paper.png');
    expect(compiled.querySelector('img')?.alt).toContain('paper move');

    // When figure is ROCK
    component.figure = MoveTypeEnum.ROCK;
    component.figureData = MoveFigures[MoveTypeEnum.ROCK];
    fixture.detectChanges();

    expect(compiled.querySelector('img')?.src).toContain('assets/Rock.png');
    expect(compiled.querySelector('img')?.alt).toContain('rock move');

    // When figure is SCISSORS
    component.figure = MoveTypeEnum.SCISSORS;
    component.figureData = MoveFigures[MoveTypeEnum.SCISSORS];
    fixture.detectChanges();

    expect(compiled.querySelector('img')?.src).toContain('assets/Scissors.png');
    expect(compiled.querySelector('img')?.alt).toContain('scissors move');
  });

  it('should have active class when the figure is selected', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.figure = MoveTypeEnum.PAPER;
    component.figureData = MoveFigures[MoveTypeEnum.PAPER];
    fixture.detectChanges();

    // Checking the class is not present until the figure is selected
    expect(compiled.querySelector('button')?.classList).not.toContain(
      'move-picker--active'
    );

    // Once the figure matches with the selectedMove, the class is added
    component.selectedMove = MoveTypeEnum.PAPER;
    fixture.detectChanges();
    expect(compiled.querySelector('button')?.classList).toContain(
      'move-picker--active'
    );
  });

  it('should emit when moveClicked()', () => {
    spyOn(component.selected, 'emit');
    component.moveClicked();
    expect(component.selected.emit).toHaveBeenCalled();
  });
});
