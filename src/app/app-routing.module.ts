import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'list-movies',
    loadChildren: () => import('./pages/list-movies/list-movies.module').then( m => m.ListMoviesPageModule)
  },
  {
    path: 'modal-movie',
    loadChildren: () => import('./modals/modal-movie/modal-movie.module').then( m => m.ModalMoviePageModule)
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
