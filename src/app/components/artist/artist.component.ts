import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artist:any = {};
  constructor( private activatedRoute: ActivatedRoute,
                public _spotify: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params.id)
      .subscribe(id => {
        console.log(id);
        this._spotify.getArtist(id)
          .subscribe(artist => {
            console.log(artist);
            this.artist = artist;
          });
          this._spotify.getTop(id)
            .subscribe(tracks => {
              console.log(tracks);
            })
      })
  }

}
