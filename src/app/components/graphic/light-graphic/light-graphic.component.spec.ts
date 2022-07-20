import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightGraphicComponent } from './light-graphic.component';

describe('LightGraphicComponent', () => {
  let component: LightGraphicComponent;
  let fixture: ComponentFixture<LightGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
