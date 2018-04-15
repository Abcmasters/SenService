import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrierungPage} from "../registrierung/registrierung";
import {NetworkEngineProvider} from "../../providers/network-engine/network-engine";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bname:any;
vname:any;
nname:any;
email:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
    ionViewDidLoad() { this.bname = this.navParams.get('Benutzername');this.nname = this.navParams.get('Nachname');this.nname = this.navParams.get('Vorname');this.email = this.navParams.get('Mail'); }
}
