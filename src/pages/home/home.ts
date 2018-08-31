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

  googleLogin() {
    this.auth.googleLogin().then(
      // Agora temos o perfil do usuário em this.auth.userProfile
    ).catch(
      // Deu erro
    );
  }

}
