import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrierungPage} from "../registrierung/registrierung";
import {NetworkEngineProvider} from "../../providers/network-engine/network-engine";
import { AlertController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
id_contact:any;
bname:any;
vname:any;
nname:any;
email:any;
Angebot: string[];
errorMessage: string;
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient  ,  public network: NetworkEngineProvider ) {
  }

    getAngebote() {
        this.network.getAngebote()
            .subscribe(
                angebot => this.Angebot = angebot,
                error =>  this.errorMessage = <any>error);
    }
    ionViewDidLoad() {this.getAngebote();
    this.id_contact = this.navParams.get('ID');this.bname = this.navParams.get('Benutzername');this.nname = this.navParams.get('Nachname');this.vname = this.navParams.get('Vorname');this.email = this.navParams.get('Mail'); }

    updateAngebot(id_angebot, id_contact) {
        let url = "http://shop2.iwslabor.de/api/updateBestellung.php";
        var param = JSON.stringify({ id_angebot: id_angebot, id_contact: id_contact});
        this.data = this.http.post(url, param);
        this.data.subscribe(data => {  console.log(data)
        });
    }
}
