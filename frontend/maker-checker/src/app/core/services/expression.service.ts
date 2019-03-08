import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from './../../../environments/environment'

import { IExpression } from '../models/expression.interface';

@Injectable()
export class ExpressionService {

  expressionURL =  environment.apiUrl+'evaluate/'

  constructor(private _http: HttpClient) { }

  getExpression(expression : IExpression ): Observable<String> {
    return this._http.get<String>(this.expressionURL+''+expression.expressionInput);
  }

}
