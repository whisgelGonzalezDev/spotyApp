import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  tracks: any[] = [];
  
  constructor( private route: ActivatedRoute,
               private spotify: SpotifyService ) {

    this.route.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    }) 
   } 

   getArtist( id: string ) {
    this.loading = true;
      this.spotify.getArtist( id ).subscribe( artista => {
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      })
   }
  
   getTopTracks( id: string ) {
     this.spotify.getTopTracks( id ).subscribe( topTracks => {
       console.log(topTracks);
       this.tracks = topTracks;
     } )
   }

}
