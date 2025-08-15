import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthComponent } from './component/auth/auth.component';
import { AuthActivateRouteGuard } from './routeguards/routeguard';
import { TestComponent } from './component/test/test.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthActivateRouteGuard]},
  {path: 'auth', component: AuthComponent},
  {path: 'test', component: TestComponent, canActivate: [AuthActivateRouteGuard]}

  // z. B.: { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
