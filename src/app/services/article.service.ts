import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../article/modules/article.modul';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly APIURL = environment.APIURL;

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.APIURL + 'articles');
  }
}
