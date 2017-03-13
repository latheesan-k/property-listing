import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppConfig {

    private config: Object = null;

    constructor(private http: Http) { }

    public get(key: any) {
        return this.config[key];
    }

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get('config.json').map( res => res.json() ).catch((error: any):any => {
                console.log('Configuration file "config.json" could not be read');
                resolve(true);
                return Observable.throw(error.json().error || 'Internal Server Srror');
            }).subscribe( (responseData: Object) => {
                this.config = responseData;
                resolve(true);
            });
        });
    }
}
