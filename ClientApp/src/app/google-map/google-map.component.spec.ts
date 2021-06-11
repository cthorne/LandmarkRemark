
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { GoogleMapComponent } from './google-map.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { Marker } from '../../interfaces';

let component: GoogleMapComponent;
let fixture: ComponentFixture<GoogleMapComponent>;

describe('google-map component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [GoogleMapComponent],
          imports: [BrowserModule, AgmCoreModule, FormsModule],
            providers: [
              { provide: ComponentFixtureAutoDetect, useValue: true },
              {
                provide: MapsAPILoader,
                useValue: {
                  load: jasmine.createSpy('load').and.returnValue(new Promise(() => true)) 
                }
              }
            ]
        });
        fixture = TestBed.createComponent(GoogleMapComponent);
        component = fixture.componentInstance;
    }));

  it('should be created', async(() => {
    const fixture = TestBed.createComponent(GoogleMapComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should have map on page', async(() => {
    const fixture = TestBed.createComponent(GoogleMapComponent);
    fixture.detectChanges();
    // Test to ensure google maps container is on page
    expect(fixture.debugElement.query(By.css('.sebm-google-map-container'))).toBeTruthy();
  }));

  it('should have no markers on page', async(() => {
    const fixture = TestBed.createComponent(GoogleMapComponent);
    fixture.detectChanges();
    // Should not find any marker elements on page
    expect(fixture.debugElement.query(By.css('.agmMarker'))).toBeNull();
  }));

  // Should find certain number of markers on page
  it('should have markers on page', async(() => {
    const fixture = TestBed.createComponent(GoogleMapComponent);
    
    let markers: Marker[] = [];
    // Have create method in seperate function
    let marker = createMarkerObject();
    // Push two markers onto the array (could be a for loop if needed more advance/numbers)
    markers.push(marker);
    markers.push(marker);
    fixture.componentInstance.markers = markers;

    fixture.detectChanges();

    let foundMarkers = fixture.debugElement.queryAll(By.css('.agmMarker')).length;
    let foundInfoWindows = fixture.debugElement.queryAll(By.css('.agm-info-window-content')).length;
    let markerExpected = 2;
    expect(foundMarkers).toEqual(markerExpected);
    expect(foundInfoWindows).toEqual(markerExpected);

  }));

  function createMarkerObject() {
    let marker: Marker = {
      id: 1,
      coordinates: {
        id: 1,
        longitude: 1,
        latitude: 1,
      },
      user: {
        userName: 'test',
      },
      comment: 'test'
    }
    return marker;
  }
});
