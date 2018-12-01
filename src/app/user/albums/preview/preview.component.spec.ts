import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewComponent } from './preview.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule, MatDialogRef,
  MatIconModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('PreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewComponent ],
      imports: [ HttpClientModule, RouterTestingModule,
        BrowserAnimationsModule, MatIconModule, MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
