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

  public logger: any = {content: ''};

  googleLogin() {
    let page = this;
    this.auth.googleLogin(page.logger).then(
      function(res) {
        page.logger.content += 'RESPOSTA: ' + JSON.stringify(res);
      }
    ).catch(
      function(erro) {
        page.logger.content += 'ERRO: ' + JSON.stringify(erro);
      }
    );
  }

}
