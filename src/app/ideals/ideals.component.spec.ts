import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealsComponent } from './ideals.component';

describe('IdealsComponent', () => {
  let component: IdealsComponent;
  let fixture: ComponentFixture<IdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
