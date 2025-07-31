import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';  // richtiger Pfad!
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NeighbearsService } from './services/neighbears.service';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthComponent } from './component/auth/auth.component';
import { AuthService } from './component/auth/auth.service';
import { HttpClientXsrfModule } from '@angular/common/http';
import { XhrInterceptor } from './interceptors/interceptor';
import { AuthActivateRouteGuard } from './routeguards/routeguard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,  // Routing-Modul hier importieren
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    })
  ],
  providers: [NeighbearsService, HttpClient, AuthService, {
    provide : HTTP_INTERCEPTORS,
    useClass : XhrInterceptor,
    multi : true
  },AuthActivateRouteGuard
],
  bootstrap: [AppComponent]
})
export class AppModule {}
