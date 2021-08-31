import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmployeeComponent } from './rmployee.component';

describe('RmployeeComponent', () => {
  let component: RmployeeComponent;
  let fixture: ComponentFixture<RmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
