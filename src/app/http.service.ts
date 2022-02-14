import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, delay, finalize, map, Observable, of, throwError } from 'rxjs';

export interface IGitUsersResponse {
  items: IGitUser[];
  total_count: number;
}

export interface IGitUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  result$: Observable<IGitUsersResponse>;
  isLoading$: Observable<boolean>;  

  constructor(private angularHttp: HttpClient) {}

  search(userName: string) {
    const params = {
      q: userName,
      page: 1
    };
    
    // Possible nice-to-have improvment -> Pagination

    this.isLoading$ = of(true);

    this.result$ = this.angularHttp.get(environment.url, { params }).pipe(
      delay(1000),
      map((obj: any) => obj),
      catchError((err) => {
        console.log('Error:', err);
        return throwError(() => err);
      }),
      finalize(() => (this.isLoading$ = of(false)))
    );
  }
}
