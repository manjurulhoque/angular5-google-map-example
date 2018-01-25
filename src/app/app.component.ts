import { Component } from '@angular/core';
import { Marker } from './marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gmap';
  lat: number = 23.771783;
  lng: number = 90.363067;
  lattitude: string;
  longitude: string;
  name: string;
  markers: Marker[] = [
    {
      name: 'Dhaka',
      lat: 23.771783,
      lng: 90.363067,
      draggable: true
    },
    {
      name: 'Laskshmipur, bagbari',
      lat: 22.944649,
      lng: 90.835948,
      draggable: true
    },
  ];

  addMarker() {
    let newMarker = {
      name: this.name,
      lat: parseFloat(this.lattitude),
      lng: parseFloat(this.longitude),
      draggable: true
    }

    this.markers.push(newMarker);
  }

  mapClicked($event: MouseEvent){
    let newMarker = {
      name: "untitled",
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    }

    this.markers.push(newMarker);
  }
  markerClicked(marker:Marker, index:number) {
    console.log(marker);
  }
  markerDragEnd(marker: Marker, $event: MouseEvent) {
    let m = this.markers.find(x => x.name === marker.name);
    let index = this.markers.indexOf(m);
    console.log(index);
    let updateMarker = {
      name: marker.name,
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }

    this.markers[index] = updateMarker;
  }
}
