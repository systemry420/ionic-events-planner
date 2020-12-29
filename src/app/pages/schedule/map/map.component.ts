import { Component, Output, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  @Output() mapEvent = new EventEmitter()

  map: google.maps.Map;
  marker: google.maps.Marker
  lat = 34.0322318;
  lng = 35.8901287;

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      if(resp) {
        this.lat = resp.coords.latitude
        this.lng = resp.coords.longitude
      }
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
      zoom: 7,
    };

    console.log(this.lat, this.lng);

    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

    this.marker = new google.maps.Marker({
      position: coordinates,
      map: this.map,
      draggable: true,
    });

    this.marker.setMap(this.map);
    this.marker.addListener('dragend', ()=>{
      this.updatePosition(this.marker.getPosition().lat(), this.marker.getPosition().lng());
    })
  }
  
  updatePosition(lat, lng) {
    console.log(lat, lng);
    this.mapEvent.emit({lat, lng})

    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();

    geocoder.geocode({ location: {lat, lng} },
      (
        results: google.maps.GeocoderResult[],
        status: google.maps.GeocoderStatus
      ) => {
        if (status === "OK") {
          if (results[0]) {
            infowindow.setContent(results[0].formatted_address);
            infowindow.open(this.map, this.marker);
          } else {
            console.log("No results found");
          }
        } else {
          console.log("Geocoder failed due to: " + status);
        }
      }
    );
  }

}
