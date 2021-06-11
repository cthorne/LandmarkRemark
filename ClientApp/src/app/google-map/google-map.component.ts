import { Component, Input } from '@angular/core';
import { Marker } from '../../interfaces';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
/** google-map component*/
export class GoogleMapComponent {
  @Input()
  latitude: number;

  @Input()
  longitude: number;

  @Input()
  zoom: number;

  @Input()
  markers: Marker[];
}
