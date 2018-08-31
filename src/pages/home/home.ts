import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public auth: AuthProvider) {

  }

  public error : any;

  googleLogin() {
    this.auth.googleLogin().then(
      // Agora temos o perfil do usuário em this.auth.userProfile
    ).catch(
      function(erro) {
        this.error = erro;
      }
    );
  }

}
