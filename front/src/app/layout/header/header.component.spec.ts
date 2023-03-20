import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check text in p tag', () => {
    expect(document.getElementsByTagName("p").item(0)?.innerText)
    .toEqual("Search Employees");
  });

  it('check text in p tag has a cursive with "i" tag', () => {
    expect(document.getElementsByTagName("p").item(0)?.getElementsByTagName("i").item(0)?.innerText)
    .toEqual("Search Employees");
  });
});
