import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marker } from '../../interfaces';

@Component({
    selector: 'app-marker',
    templateUrl: './marker.component.html',
    styleUrls: ['./marker.component.scss']
})

export class MarkerComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;

  @Input()
  markers: Marker[] = [];

  btnVisible = true;

  httpObj: HttpClient;
  baseUrlString: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpObj = http;
    this.baseUrlString = baseUrl;
  }
  ngOnInit() {
      this.setCurrentLocation();
  }

  // Add marker functionality - called from UI
  addMarker(commentInput) {
    // Create an object, Ids are currently irrelevant as unused in UI
    const markerObj = {
      id: 0,
      coordinates: {
        id: 0,
      latitude: this.latitude,
      longitude: this.longitude
      },
      user: {
        userName: ''
      },
      comment: commentInput
    };
    this.markers.push(
      markerObj
    );
    // Hide away sections that are no longer necessary
    this.btnVisible = false;
    // Post to back-end to create in database
    this.httpObj.post(this.baseUrlString + 'marker/create', markerObj).subscribe(result => { }, error => console.error(error));


  }

  private setCurrentLocation() {
    // Retrieve geolocation of user
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
}
