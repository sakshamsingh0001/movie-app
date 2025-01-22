import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'http://127.0.0.1:8000/send-email'

  constructor(private http: HttpClient) { }

  postForm(payload: { recipient: string, subject: string, message: string }): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, payload, { headers });
  }



}
