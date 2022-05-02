import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginUser = {
    user:"",
    password:""
  }
  constructor(private localNotifications: LocalNotifications,private navCtrl: NavController) { }

  ngOnInit() {
    
  }
  
  login(fLogin: NgForm) {  
  
    if (fLogin.invalid) { return; }
    this.validateUser();
  }

  validateUser(){
    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("password");
    if(user == this.loginUser.user && pass == this.loginUser.password){
      this.notificationSuccess();
      this.navCtrl.navigateRoot('/list-movies');
    }else {
      this.notificationError();
    }  
  }

  notificationSuccess(){
    this.localNotifications.schedule({
      id: 1,
      text: 'Inicio de Sesión Exitoso',
    });
  }

  notificationError(){
    this.localNotifications.schedule({
      id: 1,
      text: 'Usuario y/o contraseña incorrecta',
    });
  }

}
