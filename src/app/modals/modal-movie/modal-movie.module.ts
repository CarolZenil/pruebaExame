import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMoviePageRoutingModule } from './modal-movie-routing.module';

import { ModalMoviePage } from './modal-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMoviePageRoutingModule
  ],
  declarations: [ModalMoviePage]
})
export class ModalMoviePageModule {}
