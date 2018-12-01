(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/app.consts.ts":
/*!*******************************!*\
  !*** ./src/app/app.consts.ts ***!
  \*******************************/
/*! exports provided: Base_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base_URL", function() { return Base_URL; });
var Base_URL = 'https://jsonplaceholder.typicode.com/';


/***/ }),

/***/ "./src/app/user/albums/albums.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/albums/albums.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"preview\" *ngIf=\"!!previewPhoto\">-->\n  <!--<img [src]=\"previewPhoto.url\" [alt]=\"previewPhoto.title\">-->\n<!--</div>-->\n<mat-sidenav-container class=\"sidenav-container\" [class.is-mobile]=\"mobileQuery.matches\">\n  <mat-sidenav mode=\"side\" [(opened)]=\"opened\" [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n    <div class=\"albumList\">\n      <h1>Albums</h1>\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\" *ngFor=\"let album of albums\" (click)=\"loadPhotos(album)\" >\n          <mat-icon>search</mat-icon>\n          <div>{{album.title}}</div>\n        </mat-list-item>\n      </mat-list>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <button mat-button (click)=\"this.opened = !this.opened\" >Show Albums</button>\n    <div class=\"image-grid\">\n      <div class=\"image-grid-tile\" *ngFor=\"let photo of photos\" (click)=\"previewImage(photo)\">\n        <img [src]=\"photo.thumbnailUrl\" [alt]=\"photo.title\">\n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "./src/app/user/albums/albums.component.scss":
/*!***************************************************!*\
  !*** ./src/app/user/albums/albums.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".albumList {\n  max-width: 300px;\n  min-width: 300px; }\n  .albumList h1 {\n    padding: 0 1rem; }\n  .image-grid {\n  display: flex;\n  flex-wrap: wrap; }\n  .image-grid .image-grid-tile {\n    padding: 1rem; }\n  .image-grid .image-grid-tile img {\n      width: 150px;\n      height: 150px; }\n  .sidenav-container {\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maW5nZXJwaWNoL0RvY3VtZW50cy9wcm9qZWN0cy9hbmd1bGFyLXRlc3Qvc3JjL2FwcC91c2VyL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBSWpCO0VBTkQ7SUFJSSxnQkFBZSxFQUNoQjtFQUVIO0VBQ0UsY0FBYTtFQUNiLGdCQUFlLEVBUWhCO0VBVkQ7SUFJSSxjQUFhLEVBS2Q7RUFUSDtNQU1NLGFBQVk7TUFDWixjQUFhLEVBQ2Q7RUFHTDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGJ1bUxpc3R7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGgxe1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxufVxuLmltYWdlLWdyaWR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLmltYWdlLWdyaWQtdGlsZXtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGltZ3tcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxuICB9XG59XG4uc2lkZW5hdi1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/albums/albums.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/albums/albums.component.ts ***!
  \*************************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _albums_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albums.service */ "./src/app/user/albums/albums.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/user/albums/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumsComponent = /** @class */ (function () {
    function AlbumsComponent(albumsService, dialog, changeDetectorRef, media) {
        this.albumsService = albumsService;
        this.dialog = dialog;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AlbumsComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AlbumsComponent.prototype.ngOnInit = function () {
        this.loadAlbums();
    };
    AlbumsComponent.prototype.loadAlbums = function () {
        var _this = this;
        this.albumsService.getAlbums().subscribe(function (albums) {
            _this.albums = albums;
            _this.opened = true;
        });
    };
    AlbumsComponent.prototype.loadPhotos = function (album) {
        var _this = this;
        this.albumsService.getPhotos(album).subscribe(function (photos) {
            _this.photos = photos;
        });
    };
    AlbumsComponent.prototype.previewImage = function (photo) {
        var dialogRef = this.dialog.open(_preview_preview_component__WEBPACK_IMPORTED_MODULE_4__["PreviewComponent"], {
            height: '400px',
            width: '600px',
            data: photo
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result); // Pizza!
        });
    };
    AlbumsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-albums',
            template: __webpack_require__(/*! ./albums.component.html */ "./src/app/user/albums/albums.component.html"),
            styles: [__webpack_require__(/*! ./albums.component.scss */ "./src/app/user/albums/albums.component.scss")]
        }),
        __metadata("design:paramtypes", [_albums_service__WEBPACK_IMPORTED_MODULE_1__["AlbumsService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"]])
    ], AlbumsComponent);
    return AlbumsComponent;
}());



/***/ }),

/***/ "./src/app/user/albums/albums.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/albums/albums.service.ts ***!
  \***********************************************/
/*! exports provided: AlbumsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsService", function() { return AlbumsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.consts */ "./src/app/app.consts.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumsService = /** @class */ (function () {
    function AlbumsService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.albumsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.loadAlbums();
    }
    AlbumsService.prototype.loadAlbums = function () {
        var _this = this;
        this.authService.getLoggedInUser().subscribe(function (user) {
            if (user) {
                _this.http.get(_app_consts__WEBPACK_IMPORTED_MODULE_1__["Base_URL"] + 'albums?userId=' + user.id).subscribe(function (albums) {
                    if (albums && albums.length) {
                        _this.albumsSubject.next(albums);
                    }
                });
            }
        });
    };
    AlbumsService.prototype.getAlbums = function () {
        return this.albumsSubject;
    };
    AlbumsService.prototype.getPhotos = function (album) {
        return this.http.get(_app_consts__WEBPACK_IMPORTED_MODULE_1__["Base_URL"] + 'photos?albumId=' + album.id);
    };
    AlbumsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AlbumsService);
    return AlbumsService;
}());



/***/ }),

/***/ "./src/app/user/albums/preview/preview.component.html":
/*!************************************************************!*\
  !*** ./src/app/user/albums/preview/preview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data\">\n  <h1 class=\"img-title\" mat-dialog-title>{{data.title}}</h1>\n  <img [src]=\"data.url\">\n</div>\n"

/***/ }),

/***/ "./src/app/user/albums/preview/preview.component.scss":
/*!************************************************************!*\
  !*** ./src/app/user/albums/preview/preview.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-title {\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maW5nZXJwaWNoL0RvY3VtZW50cy9wcm9qZWN0cy9hbmd1bGFyLXRlc3Qvc3JjL2FwcC91c2VyL2FsYnVtcy9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2FsYnVtcy9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRpdGxle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/albums/preview/preview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/albums/preview/preview.component.ts ***!
  \**********************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PreviewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/user/albums/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.scss */ "./src/app/user/albums/preview/preview.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/user/posts/post.service.ts":
/*!********************************************!*\
  !*** ./src/app/user/posts/post.service.ts ***!
  \********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.consts */ "./src/app/app.consts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostService = /** @class */ (function () {
    function PostService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.postSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.loadPosts();
    }
    PostService.prototype.loadPosts = function () {
        var _this = this;
        this.authService.getLoggedInUser().subscribe(function (user) {
            if (user) {
                _this.http.get(_app_consts__WEBPACK_IMPORTED_MODULE_4__["Base_URL"] + 'posts?userId=' + user.id).subscribe(function (posts) {
                    if (posts && posts.length) {
                        _this.postSubject.next(posts);
                    }
                });
            }
        });
    };
    PostService.prototype.getPosts = function () {
        return this.postSubject;
    };
    PostService.prototype.getComments = function (post) {
        return this.http.get(_app_consts__WEBPACK_IMPORTED_MODULE_4__["Base_URL"] + 'comments?postId=' + post.id);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/user/posts/posts.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/posts/posts.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\n  <form class=\"searchForm\">\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Search in posts\" (input)=\"filterPosts($event.target.value)\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n  </form>\n</div>\n\n<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let post of posts;trackBy:trackByFn\">\n    <mat-expansion-panel-header (click)=\"togglePost(post)\">\n      <mat-panel-title>\n        {{post.title}}\n      </mat-panel-title>\n      <mat-panel-description>\n        <span *ngIf=\"post.comments\">comments: {{post.comments.length}}</span>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>{{post.body}}</p>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/user/posts/posts.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/posts/posts.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered {\n  display: flex;\n  justify-content: center; }\n  .centered .searchForm {\n    max-width: 400px;\n    width: 100%;\n    padding: 2rem 0; }\n  .full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maW5nZXJwaWNoL0RvY3VtZW50cy9wcm9qZWN0cy9hbmd1bGFyLXRlc3Qvc3JjL2FwcC91c2VyL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHdCQUF1QixFQU14QjtFQVJEO0lBSUksaUJBQWdCO0lBQ2hCLFlBQVc7SUFDWCxnQkFBZSxFQUNoQjtFQUVIO0VBQ0UsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5zZWFyY2hGb3Jte1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMnJlbSAwO1xuICB9XG59XG4uZnVsbC13aWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/posts/posts.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/posts/posts.component.ts ***!
  \***********************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.service */ "./src/app/user/posts/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService) {
        this.postService = postService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent.prototype.getComments = function (post) {
        this.postService.getComments(post).subscribe(function (comments) {
            post.comments = comments;
        });
    };
    PostsComponent.prototype.togglePost = function (post) {
        if (!post.comments) {
            this.getComments(post);
        }
    };
    PostsComponent.prototype.filterPosts = function (text) {
        var _this = this;
        var regex = new RegExp(text);
        this.postService.getPosts().subscribe(function (posts) {
            _this.posts = posts.filter(function (post) {
                return regex.test(post.title) || regex.test(post.body);
            });
        });
    };
    PostsComponent.prototype.trackByFn = function (post) {
        return post.id;
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/user/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/user/posts/posts.component.scss")]
        }),
        __metadata("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/user/todos/todos.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/todos/todos.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<input type=\"checkbox\" [(ngModel)]=\"check\" (change)=\"filterCompleted(check)\">-->\n\n<mat-slide-toggle [(ngModel)]=\"check\" (change)=\"filterCompleted(check)\">Completed</mat-slide-toggle>\n\n<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\" *ngFor=\"let todo of todos;trackBy:trackByFn\">\n    <mat-icon>{{todo.completed ? 'done' : ''}}</mat-icon>\n    {{todo.title}}\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/user/todos/todos.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/todos/todos.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdG9kb3MvdG9kb3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/todos/todos.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/todos/todos.component.ts ***!
  \***********************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.service */ "./src/app/user/todos/todos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosComponent = /** @class */ (function () {
    function TodosComponent(todosService) {
        this.todosService = todosService;
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.loadTodos();
    };
    TodosComponent.prototype.loadTodos = function () {
        var _this = this;
        this.todosService.getTodos().subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodosComponent.prototype.filterCompleted = function (justCompletedTodos) {
        var _this = this;
        this.todosService.getTodos().subscribe(function (todos) {
            _this.todos = todos.filter(function (todo) { return !justCompletedTodos || todo.completed; });
        });
    };
    TodosComponent.prototype.trackByFn = function (todo) {
        return todo.id;
    };
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/user/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.scss */ "./src/app/user/todos/todos.component.scss")]
        }),
        __metadata("design:paramtypes", [_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/app/user/todos/todos.service.ts":
/*!*********************************************!*\
  !*** ./src/app/user/todos/todos.service.ts ***!
  \*********************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.consts */ "./src/app/app.consts.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodosService = /** @class */ (function () {
    function TodosService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.todosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.loadTodos();
    }
    TodosService.prototype.loadTodos = function () {
        var _this = this;
        this.authService.getLoggedInUser().subscribe(function (user) {
            if (user) {
                _this.http.get(_app_consts__WEBPACK_IMPORTED_MODULE_2__["Base_URL"] + 'todos?userId=' + user.id).subscribe(function (todos) {
                    if (todos && todos.length) {
                        _this.todosSubject.next(todos);
                    }
                });
            }
        });
    };
    TodosService.prototype.getTodos = function () {
        return this.todosSubject;
    };
    TodosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], TodosService);
    return TodosService;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _albums_albums_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums/albums.component */ "./src/app/user/albums/albums.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/user/posts/posts.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/user/todos/todos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'posts' },
    { path: 'albums', component: _albums_albums_component__WEBPACK_IMPORTED_MODULE_2__["AlbumsComponent"] },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"] },
    { path: 'todos', component: _todos_todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"] },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/user/posts/posts.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/user/todos/todos.component.ts");
/* harmony import */ var _albums_albums_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./albums/albums.component */ "./src/app/user/albums/albums.component.ts");
/* harmony import */ var _posts_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/post.service */ "./src/app/user/posts/post.service.ts");
/* harmony import */ var _todos_todos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todos/todos.service */ "./src/app/user/todos/todos.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _albums_albums_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./albums/albums.service */ "./src/app/user/albums/albums.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _albums_preview_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./albums/preview/preview.component */ "./src/app/user/albums/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"], _albums_albums_component__WEBPACK_IMPORTED_MODULE_5__["AlbumsComponent"], _albums_preview_preview_component__WEBPACK_IMPORTED_MODULE_11__["PreviewComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]
            ],
            entryComponents: [_albums_preview_preview_component__WEBPACK_IMPORTED_MODULE_11__["PreviewComponent"]],
            providers: [
                _posts_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"], _todos_todos_service__WEBPACK_IMPORTED_MODULE_7__["TodosService"], _albums_albums_service__WEBPACK_IMPORTED_MODULE_9__["AlbumsService"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map