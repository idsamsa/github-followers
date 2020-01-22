import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { IPost } from '../post/post';


@Injectable({
  providedIn: 'root'
})

export class PostService {
private url = 'https://jsonplaceholder.typicode.com/posts'
constructor(private http: HttpClient ) {
  
 }

 getAll(): Observable<IPost[]>{ 
  return this.http.get<IPost[]>(this.url)
    .pipe(
      retry(1),
    catchError(this.handleError)
    );
}

create(resource){
  return this.http.post(this.url,resource)
  .pipe(
    retry(1),
    catchError(this.handleError)
  );
}

update(resource){ 
  return this.http.put(this.url + '/' + resource.id,resource)
}

delete(resource){
  return this.http.delete(this.url + '/' + resource.id)
  .pipe(
    retry(1),
    catchError(this.handleError)      
  );
}



/*
 methode of handle Errors
*/
private handleError(error: Response)
{
  if(error.status === 404)
  {
    return Observable.throw(new NotFoundError);
  }
  if(error.status === 400){
    return Observable.throw(new BadInput);
  }
  return Observable.throw(new AppError);
  }

}
