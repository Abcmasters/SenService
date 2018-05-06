import { Component } from '@angular/core';
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
Bezeichnung: string[];
errorMessage: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public network: NetworkEngineProvider ) {

  }

    getCountries() {
        this.network.getCountries()
            .subscribe(
                countries => this.Bezeichnung = countries,
                error =>  this.errorMessage = <any>error);
    }
    ionViewDidLoad() {this.getCountries();
    this.bname = this.navParams.get('Benutzername');this.nname = this.navParams.get('Nachname');this.vname = this.navParams.get('Vorname');this.email = this.navParams.get('Mail'); }
}
