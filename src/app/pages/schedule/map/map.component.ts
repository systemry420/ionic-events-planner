import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  lat = 34.0322318;
  lng = 35.8901287;

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
      console.log(this.lat, this.lng);
      this.mapInitializer();

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  mapInitializer() {
    let coordinates = new google.maps.LatLng(this.lat, this.lng);
    let mapOptions: google.maps.MapOptions = {
      center: coordinates,
      zoom: 8,
    };

    console.log(this.lat, this.lng);

    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      position: coordinates,
      map: this.map,
    });

    marker.setMap(this.map);
  }

}
