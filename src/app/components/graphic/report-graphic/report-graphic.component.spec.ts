import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGraphicComponent } from './report-graphic.component';

describe('ReportGraphicComponent', () => {
  let component: ReportGraphicComponent;
  let fixture: ComponentFixture<ReportGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
