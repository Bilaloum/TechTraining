import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { provideFirebaseApp,initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {provideStorage, getStorage} from '@angular/fire/storage'
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInAuthGuardGuard } from './guards/logged-in-auth-guard.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthGuard,LoggedInAuthGuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
