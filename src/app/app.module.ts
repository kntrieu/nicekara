import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NicekaraCustomMaterialModuleModule } from './nicekara-custom-material-module.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { ProfileComponent } from './profile/profile.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    HelpComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    FlexLayoutModule,
    NicekaraCustomMaterialModuleModule, RoutingModule, YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
