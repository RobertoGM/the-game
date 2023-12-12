import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveStatsComponent } from './move-stats.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StatisticsModule } from '../../statistics.module';

describe('MoveStatsComponent', () => {
  let component: MoveStatsComponent;
  let fixture: ComponentFixture<MoveStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MoveStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
