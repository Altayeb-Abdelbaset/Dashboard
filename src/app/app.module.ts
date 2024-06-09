import { NgChartsConfiguration } from './../../node_modules/ng2-charts/lib/ng-charts.provider.d';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { HomeComponent } from './home/home.component';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlidetwoComponent } from './slidetwo/slidetwo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadbarComponent,
    HomeComponent,
    SlideOneComponent,
    SlidetwoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
