import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  
  nuevasCanciones: any [] = [];
  loading: boolean;
  err: boolean;
  mensajeError: string;
  constructor( private spotify: SpotifyService ) { 
    this.err = false;
    this.loading = true;
    this.spotify.getNewReleases().subscribe( (data: any) => {
      console.log( data );
      this.nuevasCanciones = data;
      this.loading = false;
    }, ( errorServicio) => {
      this.loading = false;
      this.err = true;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message;
    })
  }

  ngOnInit() {
  }

}
