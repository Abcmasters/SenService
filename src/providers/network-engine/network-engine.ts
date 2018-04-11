import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkEngineProvider {
result:any;
  constructor(public http: HttpClient) {
    console.log('Hello NetworkEngineProvider Provider');
  }





  writeTable(vname,n,bn,m,pw) : Promise<any>
  {
    let url = "http://shop2.iwslabor.de/api/create.php";
      var param = JSON.stringify({ vname: vname , name: n , bname: bn, mail:m , pw: pw});
    let request = this.http.post(url, param);

    return request.toPromise();

  }


  userverify(bn, pw) {

      let url = "http://shop2.iwslabor.de/api/auth.php";
      var param = JSON.stringify({ bn: bn, pword:pw});
      let request = this.http.post(url, param).subscribe(data => {this.result = data;});



  }
}
