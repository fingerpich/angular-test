import {ChangeDetectorRef, Component, Inject, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {AlbumsService} from './albums.service';
import {Album} from './album';
import {Photo} from './photo';
import {MediaMatcher} from '@angular/cdk/layout';
import {NgxImageGalleryComponent} from 'ngx-image-gallery';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums: Array<Album>;
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  selectedAlbum: Album;
  photos: Array<Photo>;
  opened: boolean;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private albumsService: AlbumsService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.photos = [];
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.loadAlbums();
  }

  loadAlbums() {
    this.albumsService.getAlbums().subscribe((albums: Array<Album>) => {
      this.albums = albums;
      this.opened = true;
    });
  }

  loadPhotos(album: Album) {
    this.selectedAlbum = album;
    this.albumsService.getPhotos(album).subscribe((photos: Array<Photo>) => {
      this.photos = photos;
    });
  }

  previewImage(photo: Photo, index: number) {
    this.ngxImageGallery.open(index);
  }
}
