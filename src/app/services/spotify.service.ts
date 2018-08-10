import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  artists: any[];
  artist: any;
  urlSpotify:string = 'https://api.spotify.com/v1/';
  token:string = 'BQDrcdXXVi-GAhlsLNy6oOSaFGe8mJfuGgEexJeMaw31WCvehlXrNgP0MtLeKq2h67P6L2o8HtvS9dXkuW4';
  constructor(public http: HttpClient) {
    console.log("Servicio de spotify listo");
  }

  private getAccessToken(): HttpHeaders {
    let url:string = 'https://accounts.spotify.com/api/token';
    let body:object = {
      grant_type : 'client_credentials'
    };
    let headers = new HttpHeaders({
      'authorization' : 'Bearer ' + this.token
    });
    return headers;
  }

  getArtists(termino) {
    let url = `${this.urlSpotify}search?query=${ termino }&type=artist&limit=20`;
    let headers = this.getAccessToken();
    return this.http.get(url, { headers })
      .map( (resp:any) => {
        this.artists = resp.artists.items;
        return this.artists;
      });
  }

  getArtist(id:string) {
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getAccessToken();
    return this.http.get(url, { headers });
  }

  getTop(id:string) {
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;
    let headers = this.getAccessToken();
    return this.http.get(url, { headers })
      .map((resp:any) => resp.tracks);
  }
}
