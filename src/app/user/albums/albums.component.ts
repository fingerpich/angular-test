import { Component, OnInit } from '@angular/core';
import {AlbumsService} from './albums.service';
import {Album} from './album';
import {Photo} from './photo';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: Array<Album>;
  photos: Array<Photo>;
  previewPhoto: Photo;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.loadAlbums();
  }

  loadAlbums() {
    this.albumsService.getAlbums().subscribe((albums: Array<Album>) => {
      this.albums = albums;
    });
  }

  loadPhotos(album: Album) {
    this.albumsService.getPhotos(album).subscribe((photos: Array<Photo>) => {
      this.photos = photos;
    });
  }

  previewImage(photo: Photo) {
    this.previewPhoto = photo;
  }
}
