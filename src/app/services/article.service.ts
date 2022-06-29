import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../article/modules/article.modul';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  listArticleSelectedLavage: any[] = [];
  listArticleSelectedPassage: any[] = [];
  listArticleSelectedLavagePassage: any[] = [];

  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly APIURL = environment.APIURL;

  constructor(private http: HttpClient) { }
  // http://localhost:8000/api/article/articlesByService/1
  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.APIURL + 'articles');
  }

  getArticleByService(idArtcile: number): Observable<Article[]> {
    return this.http.get<Article[]>(this.APIURL + 'articlesByService/' + idArtcile);
  }
}
