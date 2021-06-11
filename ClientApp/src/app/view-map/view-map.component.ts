import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marker } from '../../interfaces';

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.scss']
})

export class ViewMapComponent {
  markers: Marker[];
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    http.get<Marker[]>(baseUrl + 'marker/GetAll').subscribe(result => {
      this.markers = result;
    }, error => console.error(error));
  }

  search(searchText: string) {
    this.http.get<Marker[]>(this.baseUrl + 'marker/GetSearchMatches/' + encodeURI(searchText)).subscribe(result => {
      this.markers = result;
    }, error => console.error(error));
  }
}
