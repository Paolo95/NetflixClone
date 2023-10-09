import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';

const routes: Routes = [
  { path:'search', component: SearchComponent },
  { path:'movie/:id', component: MovieDetailsComponent },
  { path:'it/user-home', component: UserHomeComponent },
  { path: 'it', component: HomeComponent },
  { path: 'en', component: HomeComponent },
  { path: '', redirectTo: 'it', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
