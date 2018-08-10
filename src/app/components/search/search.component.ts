import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino:string;

  constructor(public _spotify: SpotifyService) {
    /*this._spotify.getAccessToken()
      .subscribe( resp => {
        console.log("resp", resp);
      });*/
 }

 searchArtist() {
   if (this.termino) {
     this._spotify.getArtists(this.termino)
       .subscribe();
   }
 }

  ngOnInit() {
  }

}
