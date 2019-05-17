import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserGlobalsComponent } from './browser-globals.component';

describe('BrowserGlobalsComponent', () => {
  let component: BrowserGlobalsComponent;
  let fixture: ComponentFixture<BrowserGlobalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserGlobalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserGlobalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
