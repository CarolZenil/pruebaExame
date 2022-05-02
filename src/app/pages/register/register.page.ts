import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {
    name: "",
    user:"",
    password:""
  };

  constructor(private navCtrl: NavController,private localNotifications: LocalNotifications,private registerService:RegisterService) { }

  async ngOnInit() {
    
    await this.getData();
  }

  register(fRegister: NgForm) {  
  
    if (fRegister.invalid) { return; }
    this.saveUser();
  }

  saveUser(){
    localStorage.setItem("name", this.user.name);
    localStorage.setItem("user", this.user.user);
    localStorage.setItem("password", this.user.password);
    localStorage.setItem("date", String(new Date()));
    this.notification();
    this.navCtrl.navigateForward('/login');
  }

  notification(){
    this.localNotifications.schedule({
      id: 1,
      text: 'Registro Exitoso',
    });
  }

  
  async getData() {
    return new Promise((resolve, reject) => {
      this.registerService.register()
        .toPromise()
        .then(
          res => { // Success
          console.log(res);
          let response = res['results'];
          console.log(response);
          this.user.name = response[0].name.title +" "+ response[0].name.first +" "+ response[0].name.last ;
          this.user.user = response[0].login.username; 
          resolve(res);
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
  }

}
