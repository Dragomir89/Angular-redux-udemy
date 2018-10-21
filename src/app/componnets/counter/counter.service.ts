import { Injectable } from "@angular/core";
import { Http } from '@angular/http'


@Injectable()
export class CounterService {
    private baseUrl = 'http://localhost:5000/';
    constructor( private http: Http) { }
    getData(params) {
        return this.http.get(this.baseUrl + params).toPromise().then(()=>{
            // start new action
        })
    }
}