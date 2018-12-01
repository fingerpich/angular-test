import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthService} from '../auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ AuthService ],
      imports: [ HttpClientModule, FormsModule, RouterTestingModule,
        BrowserAnimationsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit should be disabled when input is empty', fakeAsync(() => {
    fixture.whenStable().then(() => {
      component.ngOnInit();
      component.email = '';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.email = '';
        fixture.detectChanges();
        expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBe(true);
      });
    });
  }));
  it('submit is available when input is valid', fakeAsync(() => {
    component.email = 'me@gmail.com';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBe(false);
    });
  }));
});
