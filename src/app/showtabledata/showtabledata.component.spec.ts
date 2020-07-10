import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtabledataComponent } from './showtabledata.component';

describe('ShowtabledataComponent', () => {
  let component: ShowtabledataComponent;
  let fixture: ComponentFixture<ShowtabledataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtabledataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtabledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
