import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthComponent } from './component/auth/auth.component';
import { AuthActivateRouteGuard } from './routeguards/routeguard';
import { TestComponent } from './component/test/test.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { LogoutComponent } from './component/logout/logout.component';

export const routes: Routes = [
//  {path: '**' }


  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'logout', component: LogoutComponent, data: {title: 'Logout'}},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthActivateRouteGuard], data: {title: 'Profile'}},
  {path: 'auth', component: AuthComponent, data: {title: 'auth'}},
  {path: 'test', component: TestComponent, canActivate: [AuthActivateRouteGuard], data: {title: 'Test'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: '**', redirectTo: 'login'}
  // z. B.: { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
