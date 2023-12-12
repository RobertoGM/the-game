import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPanelComponent } from './stat-panel.component';

describe('StatPanelComponent', () => {
  let component: StatPanelComponent;
  let fixture: ComponentFixture<StatPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show percentage when display input is percent', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.value = 50;

    // Check the value shown contains the percentage
    component.display = 'percent';
    fixture.detectChanges();
    expect(compiled.querySelector('span')?.textContent).toContain('50%');

    // Check the value shown misses the percentage
    component.display = 'number';
    fixture.detectChanges();
    expect(compiled.querySelector('span')?.textContent).toContain('50');
  });
});
