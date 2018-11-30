import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [AuthGuard] },
];
export default null;
