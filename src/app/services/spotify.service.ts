import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('corriendo servicio');
   }

   getQuery( query: string ) {
     const url = `https://api.spotify.com/v1/${query}`
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAvl0ppnw0gtqhUEG27y4haFfBBWGkrV_BkiQ3H_NnjoiwxMtdkx6vFhsYuYxWpobT-ymGPgX45FGLRaRE'
    });
    return this.http.get( url, { headers } )
   }

   getNewReleases() {
    
    

     return this.getQuery('browse/new-releases?offset=0&limit=20').pipe( map( data =>{
      return data['albums'].items;
     }));

   }

   serach( termino: string ) {
    
    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`).pipe( map( data =>{
      return data['artists'].items;
     }));
   }

   getArtist( id: string ) {
    return this.getQuery(`artists/${ id }`);
  
   }

   getTopTracks( id: string ) {
     return this.getQuery(`artists/${ id }/top-tracks?market=us`).pipe( map( data =>{
      return data['tracks'];
     }));
   }
}
