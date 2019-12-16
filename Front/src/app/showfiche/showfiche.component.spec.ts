import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowficheComponent } from './showfiche.component';

describe('ShowficheComponent', () => {
  let component: ShowficheComponent;
  let fixture: ComponentFixture<ShowficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
