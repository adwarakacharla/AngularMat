import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmsgridComponent } from './tdmsgrid.component';

describe('TdmsgridComponent', () => {
  let component: TdmsgridComponent;
  let fixture: ComponentFixture<TdmsgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdmsgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
