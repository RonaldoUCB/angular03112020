import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosTableComponent } from './creditos-table.component';

describe('CreditosTableComponent', () => {
  let component: CreditosTableComponent;
  let fixture: ComponentFixture<CreditosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditosTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
