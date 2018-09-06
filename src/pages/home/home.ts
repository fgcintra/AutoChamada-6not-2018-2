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
  public log: String = '';

  googleLogin() {
    this.auth.googleLogin(this.log).then(
      function(res) {
        this.log = 'RESPOSTA: ' + JSON.stringify(res);
      }
    ).catch(
      function(erro) {
        this.error = erro;
      }
    );
  }

}
