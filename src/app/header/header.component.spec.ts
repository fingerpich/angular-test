import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {AuthService} from '../auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {User} from '../user/user';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ AuthService ],
      imports: [ HttpClientModule, RouterTestingModule,
        BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click logout', async(() => {
    spyOn(component, 'logout');
    component.user = ({name: 'me', email: 'me@testing', company: {name: 'testingCompany'}} as User);
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('a.userLink').textContent).toBe('me');
    const logoutBtn = fixture.debugElement.nativeElement.querySelector('button.logout');
    logoutBtn.click();
    fixture.whenStable().then(() => {
      expect(component.logout).toHaveBeenCalled();
    });
  }));
});
