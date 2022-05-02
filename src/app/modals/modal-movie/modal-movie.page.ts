import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavParams, NavController, ModalController  } from '@ionic/angular';


@Component({
  selector: 'app-modal-movie',
  templateUrl: './modal-movie.page.html',
  styleUrls: ['./modal-movie.page.scss'],
})
export class ModalMoviePage implements OnInit {

  movie : any;
  
  constructor(public navCtrl: NavController, 
    private navParams: NavParams, 
    private modalController: ModalController,) { }

  ngOnInit() {

    this.movie = this.navParams.get('movie');
  }

  closeModal() {
      this.modalController.dismiss();
  }

}
