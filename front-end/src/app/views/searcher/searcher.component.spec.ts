import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { SearcherComponent } from './searcher.component';

describe('SearcherComponent', () => {
  let component: SearcherComponent;
  let fixture: ComponentFixture<SearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcherComponent ],
      imports: [ButtonModule, FormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not change valueToSend when button is not clicked', () => {
    expect(component.valueToSend).toEqual("");
    const fakeValue = "xxxxx"
    component.value = fakeValue;
    fixture.detectChanges();
    expect(component.valueToSend).toEqual("");
  });

  it('should change valueToSend when button is clicked', () => {
    expect(component.valueToSend).toEqual("");
    const fakeValue = "xxxxx"
    component.value = fakeValue;
    // Pulsar el botón
    document.getElementsByTagName("button").item(0)?.click();
    fixture.detectChanges();
    expect(component.valueToSend).toEqual(fakeValue);
  });

  it('should change valueToSend to "" when value is " "', () => {
    expect(component.valueToSend).toEqual("");
    const fakeValue = "xxxxx"
    component.value = fakeValue;
    fixture.detectChanges();
    document.getElementsByTagName("button").item(0)?.click();
    expect(component.valueToSend).toEqual(fakeValue);
    component.value = "  ";
    document.getElementsByTagName("button").item(0)?.click();
    expect(component.valueToSend).toEqual("");
  });
});
