import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NetworkEngineProvider} from "../../providers/network-engine/network-engine";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {LoginPage} from "../login/login";
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegistrierungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrierung',
  templateUrl: 'registrierung.html',
})
export class RegistrierungPage {
responsetext:any;
  constructor(public navCtrl: NavController, public network: NetworkEngineProvider, public formbuilder: FormBuilder , private alertCtrl: AlertController) {







  }

  addTable(vname,n,bn,m,pw){
this.network.writeTable(vname,n,bn,m,pw).then(data =>
    {
      console.log("Ich habe folgendes erhalten : " + JSON.stringify(data));
      this.responsetext="" + JSON.stringify(data);

        if(data == 'Error'){ let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: 'Irgendwas hat nicht geklappt!',
            buttons: ['Ok']
        });
            alert.present();}
        if(data == 'Erfolg'){ let alert = this.alertCtrl.create({
            title: 'Erfolg!',
            subTitle: 'Registrierung erfolgreich!',
            buttons: ['Ok']
        });
            alert.present();}


    })


 this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrierungPage');
  }

}
