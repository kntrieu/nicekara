import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { HelpComponent } from '../help/help.component';
import { ProfileComponent } from '../profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'help', component: HelpComponent},
  { path: 'profile', component: ProfileComponent},
  //{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
