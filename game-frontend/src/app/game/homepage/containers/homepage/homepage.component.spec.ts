import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { HomePageModule } from '../../homepage.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
