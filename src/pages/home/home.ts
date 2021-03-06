import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrierungPage} from "../registrierung/registrierung";
import {NetworkEngineProvider} from "../../providers/network-engine/network-engine";
import {HttpClient} from "@angular/common/http";
import { AlertController } from 'ionic-angular';

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
Angebot: any;
errorMessage: string;
data:any;
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.network.getAngebote()
            .subscribe(
                angebot => {  if(this.Angebot == []){let alert = this.alertCtrl.create({
                    title: 'Oh nein! :(',
                    subTitle: 'Heute noch kein Angebot wir haben. Warten du musst!',
                    buttons: ['Ok']
                });
                    alert.present();} else{this.Angebot = angebot}},
                error =>  this.errorMessage = <any>error);
        console.log(this.Angebot);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient  ,  public network: NetworkEngineProvider, private alertCtrl: AlertController) {
  }

    getAngebote() {
        this.network.getAngebote()
            .subscribe(
                angebot => {  if(this.Angebot == []){let alert = this.alertCtrl.create({
                    title: 'Oh nein! :(',
                    subTitle: 'Heute noch kein Angebot wir haben. Warten du musst!',
                    buttons: ['Ok']
                });
                    alert.present();} else{this.Angebot = angebot}},
                error =>  this.errorMessage = <any>error);
        console.log(this.Angebot);
    }
    ionViewDidLoad() {this.getAngebote();
    this.id_contact = this.navParams.get('ID');this.bname = this.navParams.get('Benutzername');this.nname = this.navParams.get('Nachname');this.vname = this.navParams.get('Vorname');this.email = this.navParams.get('Mail'); }

    updateAngebot(id_angebot, id_contact) {

        this.getAngebote();
        let alert = this.alertCtrl.create({
            title: 'Angebot annehmen!',
            subTitle: 'Bist du sicher, dass du dieses Angebot annehmen möchtest?',
            buttons: [
                {
                    text: 'Ablehnen',
                    handler: () => {
                    }
                },
                {
                    text: 'Annehmen',
                    handler: () => {
                        let url = "http://shop2.iwslabor.de/api/updateBestellung.php";
                        var param = JSON.stringify({ id_angebot: id_angebot, id_contact: id_contact});
                        this.data = this.http.post(url, param);
                        this.data.subscribe(data => {  console.log(data)
                        });
                        this.getAngebote();
                    }
                }
            ]
        });
    alert.present();
    }
}
