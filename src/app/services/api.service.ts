import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiURL: string = 'http://www.server.com/api/';

  constructor(private httpClient: HttpClient) {}

  public createQuestion(question: Question) {
    this.httpClient.post(`${this.apiURL}/createQuestion`, question);
  }
}
