import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DthGraphicComponent } from './dth-graphic.component';

describe('DthGraphicComponent', () => {
  let component: DthGraphicComponent;
  let fixture: ComponentFixture<DthGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DthGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DthGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
