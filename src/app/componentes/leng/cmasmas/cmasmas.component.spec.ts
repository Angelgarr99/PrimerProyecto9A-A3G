import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmasmasComponent } from './cmasmas.component';

describe('CmasmasComponent', () => {
  let component: CmasmasComponent;
  let fixture: ComponentFixture<CmasmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmasmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmasmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
