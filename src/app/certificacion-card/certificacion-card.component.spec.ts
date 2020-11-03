import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacionCardComponent } from './certificacion-card.component';

describe('CertificacionCardComponent', () => {
  let component: CertificacionCardComponent;
  let fixture: ComponentFixture<CertificacionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificacionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
