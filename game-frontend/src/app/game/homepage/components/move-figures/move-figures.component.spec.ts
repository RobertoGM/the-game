import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveFiguresComponent } from './move-figures.component';

describe('MoveFiguresComponent', () => {
  let component: MoveFiguresComponent;
  let fixture: ComponentFixture<MoveFiguresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoveFiguresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoveFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show caption if the data has been sent', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.caption = undefined;
    fixture.detectChanges();

    // Checking caption is not present yet
    expect(compiled.querySelector('figcaption')).toBeNull();

    // Once the caption is added, the caption tag is rendered
    component.caption = 'Caption';
    fixture.detectChanges();
    expect(compiled.querySelector('figcaption')?.textContent).toContain(
      'Caption'
    );
  });
});
