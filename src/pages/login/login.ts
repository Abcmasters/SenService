import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrierungPage} from "../registrierung/registrierung";
import {NetworkEngineProvider} from "../../providers/network-engine/network-engine";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    responsetext:any;
    data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public network: NetworkEngineProvider, public http: HttpClient) {
  }
    userverify(bn, pw) {

        var url = "http://shop2.iwslabor.de/api/auth.php";
        var param = JSON.stringify({ bn: bn, pword:pw});
        this.data = this.http.post(url, param);
        this.data.subscribe(data => { if(data.Passwort = 'Valide'){ this.navCtrl.setRoot(HomePage)}});

  }


nextPage(){
      this.navCtrl.push(RegistrierungPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
