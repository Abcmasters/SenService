import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkEngineProvider {
result:any;
data:any;
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
   updateAngebot(id_angebot, id_contact) : Promise<any>
    {

        return this.data.toPromise();

    }

    private apiUrl = 'http://shop2.iwslabor.de/api/read_angebote.php/';
    getAngebote(): Observable<any[]> {
        return this.http.get(this.apiUrl).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const err = error || '';
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}
