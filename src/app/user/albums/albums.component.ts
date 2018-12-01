import {ChangeDetectorRef, Component, Inject, OnInit, OnDestroy} from '@angular/core';
import {AlbumsService} from './albums.service';
import {Album} from './album';
import {Photo} from './photo';
import {MatDialog} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';
import {PreviewComponent} from './preview/preview.component';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums: Array<Album>;
  photos: Array<Photo>;
  opened: boolean;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private albumsService: AlbumsService, public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
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
    this.albumsService.getPhotos(album).subscribe((photos: Array<Photo>) => {
      this.photos = photos;
    });
  }

  previewImage(photo: Photo) {
    const dialogRef = this.dialog.open(PreviewComponent, {
      height: '400px',
      width: '600px',
      data: photo
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }
}
