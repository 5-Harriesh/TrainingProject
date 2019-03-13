import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from './../../../environments/environment'
import { Observable } from 'rxjs';


@Injectable()
export class NotesService {

  notesURL =  environment.apiUrl+'notes/save'
  notesRetURL = environment.apiUrl+'notes/load'

  constructor(private _http: HttpClient) { }

  saveNotes(note : object ) {
    return this._http.post(this.notesURL,note,{ responseType: 'text'});
  }

  getNotes(): Observable<String> {
    return this._http.get<String>(this.notesRetURL);
  }

}
