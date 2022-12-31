import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuncanvasComponent } from './tsuncanvas.component';

describe('TsuncanvasComponent', () => {
  let component: TsuncanvasComponent;
  let fixture: ComponentFixture<TsuncanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsuncanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsuncanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
