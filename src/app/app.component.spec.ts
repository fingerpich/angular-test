import {TestBed, async, fakeAsync} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {routes} from './routes';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {NgModuleFactoryLoader} from '@angular/core';
import {UserModule} from './user/user.module';
import {AuthGuard} from './auth/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientModule, FormsModule,
        BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    const loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = {lazyModule: UserModule};

    router.resetConfig([...routes.filter(route => route.path !== 'user'),
      { path: 'user', loadChildren: 'lazyModule', canActivate: [AuthGuard] },
    ]);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should go login page because its not loggined', fakeAsync(() => {
    expect(location.path()).toBe('/login');
  }));
});
