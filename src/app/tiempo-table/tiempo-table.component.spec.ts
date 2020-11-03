import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoTableComponent } from './tiempo-table.component';

describe('TiempoTableComponent', () => {
  let component: TiempoTableComponent;
  let fixture: ComponentFixture<TiempoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiempoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
