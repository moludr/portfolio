import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Input } from '@angular/core/src/metadata/directives';
import 'rxjs/add/operator/map';
import { Message } from '_debugger';
import { RequestOptions } from '@angular/http/src/base_request_options';



@Injectable()


export class ContactService {

  private _getUrl="/api/messages";
  private _postUrl ="/api/message";

  constructor( private _http: Http) { }

       getMessages(){
            return this._http.get(this._getUrl)
             .map((Response: Response)=>Response.json());
         }

      addMessage(message:Message){
        let headers = new Headers({'content-Type':'application/json'});
        let options = new RequestOptions({headers :headers});
        return this._http.post(this._postUrl,JSON.stringify(message),options)
        .map((response: Response)=>response.json());
      }
}
