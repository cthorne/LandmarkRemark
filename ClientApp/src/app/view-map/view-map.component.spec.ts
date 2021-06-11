import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ViewMapComponent } from './view-map.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { Interfaces } from '../../interfaces';
import { MarkerComponent } from '../marker/marker.component';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { HttpClientModule } from '@angular/common/http';

let component: ViewMapComponent;
let fixture: ComponentFixture<ViewMapComponent>;

describe('view-map component', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ViewMapComponent, MarkerComponent, GoogleMapComponent],
        imports: [BrowserModule, FormsModule, AgmCoreModule, HttpClientModule],
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
        fixture = TestBed.createComponent(ViewMapComponent);
        component = fixture.componentInstance;
    }));

  it('should be created', async(() => {
    const fixture = TestBed.createComponent(ViewMapComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should have search text input on page', async(() => {
    const fixture = TestBed.createComponent(ViewMapComponent);
    fixture.detectChanges();
    // Test to ensure google maps container is on page
    expect(fixture.debugElement.query(By.css('#inputSearch'))).toBeTruthy();
  }));

  it('should have search button on page', async(() => {
    const fixture = TestBed.createComponent(ViewMapComponent);
    fixture.detectChanges();
    // Test to ensure google maps container is on page
    expect(fixture.debugElement.query(By.css('#buttonSearch'))).toBeTruthy();
  })); 


});
