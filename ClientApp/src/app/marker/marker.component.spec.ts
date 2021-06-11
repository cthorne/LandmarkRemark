import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { MarkerComponent } from './marker.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { HttpClientModule } from '@angular/common/http';

let component: MarkerComponent;
let fixture: ComponentFixture<MarkerComponent>;

describe('marker component', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [MarkerComponent, GoogleMapComponent],
        imports: [BrowserModule, AgmCoreModule, FormsModule, HttpClientModule],
            providers: [
              { provide: ComponentFixtureAutoDetect, useValue: true },
              { provide: 'BASE_URL', useValue: 'localhost:4377/' },
              {
                provide: MapsAPILoader,
                useValue: {
                  load: jasmine.createSpy('load').and.returnValue(new Promise(() => true))
                }
              }
            ]
        });
        fixture = TestBed.createComponent(MarkerComponent);
        component = fixture.componentInstance;
    }));

  it('should be created', async(() => {
    const fixture = TestBed.createComponent(MarkerComponent);
      fixture.detectChanges();
      const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should have comment label on page', async(() => {
    const fixture = TestBed.createComponent(MarkerComponent);
    fixture.detectChanges();
    // Test to ensure google maps container is on page
    expect(fixture.debugElement.query(By.css('#labelInputComment'))).toBeTruthy();
  }));

  it('should have comment help on page', async(() => {
    const fixture = TestBed.createComponent(MarkerComponent);
    fixture.detectChanges();
    // Test to ensure google maps container is on page
    expect(fixture.debugElement.query(By.css('#commentHelp'))).toBeTruthy();
  }));

  it('should have input comment on page', async(() => {
    const fixture = TestBed.createComponent(MarkerComponent);
    fixture.detectChanges();
    // Test to ensure google maps container is on page
    expect(fixture.debugElement.query(By.css('#inputComment'))).toBeTruthy();
  }));

  it('should have submit button on page', async(() => {
    const fixture = TestBed.createComponent(MarkerComponent);
    fixture.detectChanges();
    // Test to ensure google maps container is on page
    expect(fixture.debugElement.query(By.css('#buttonMarkPin'))).toBeTruthy();
  }));  
});
