import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MusicLibraryComponent} from './components/music-library/music-library.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'library', component: MusicLibraryComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
