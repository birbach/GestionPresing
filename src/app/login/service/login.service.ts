import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly APIURL = environment.APIURL;

  constructor(private http: HttpClient) { }

  login(login: any): Observable<any>{
    return this.http.post<any>(this.APIURL + 'login', login);
  }
}
