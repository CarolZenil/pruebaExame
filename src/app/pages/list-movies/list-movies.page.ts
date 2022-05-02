import { Component, OnInit } from '@angular/core';
import { Platform, ModalController,NavController } from '@ionic/angular';
import { ModalMoviePage } from '../../modals/modal-movie/modal-movie.page';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.page.html',
  styleUrls: ['./list-movies.page.scss'],
})
export class ListMoviesPage implements OnInit {
  movies:any;
  movie_list:any;
  search: string = '';

  constructor(private navCtrl: NavController, private modalController: ModalController,private movieService:MoviesService) { }
  async ngOnInit() {
    await this.getMovies();
  }

  async getMovies() {
    return new Promise((resolve, reject) => {
      this.movieService.getMovies()
        .toPromise()
        .then(
          res => { // Success
          let response = res;
          this.movie_list = response;
          this.movies = response;
          resolve(res);
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
  }

  openModal(movie){
    this.modalController.create({
      component: ModalMoviePage,
      componentProps: {
        movie: movie,
      }
    }).then(modal=> modal.present());
  }

  doSearch(){
    this.movies = this.movie_list;
    if(this.search != ''){
      let movies_search = [];
      movies_search.push(this.movies.find(item => item.show.name == this.search))
      this.movies = movies_search;
    }
    
  }


}
