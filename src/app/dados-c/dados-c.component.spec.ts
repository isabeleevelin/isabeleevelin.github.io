import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCComponent } from './dados-c.component';

describe('DadosCComponent', () => {
  let component: DadosCComponent;
  let fixture: ComponentFixture<DadosCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
