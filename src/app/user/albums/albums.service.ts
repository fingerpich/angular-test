import { Injectable } from '@angular/core';
import {User} from '../user';
import * as appConsts from '../../app.consts';
import {AuthService} from '../../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Album} from './album';
import {Photo} from './photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albumsSubject = new BehaviorSubject<Array<Album>>([]);

  constructor(private http: HttpClient, private authService: AuthService) {
    this.loadAlbums();
  }

  loadAlbums() {
    this.authService.getLoggedInUser().subscribe((user: User) => {
      if (user) {
        this.http.get(appConsts.Base_URL + 'albums?userId=' + user.id).subscribe((albums: Array<Album>) => {
          if (albums && albums.length) {
            this.albumsSubject.next(albums);
          }
        });
      }
    });
  }

  getAlbums() {
    return this.albumsSubject;
  }

  getPhotos(album: Album) {
    return this.http.get(appConsts.Base_URL + 'photos?albumId=' + album.id);
  }
}
