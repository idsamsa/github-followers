import { throwError } from 'rxjs';

export class AppError{
    constructor(public originalError?: any){}

    handleError(error){
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
              console.log(errorMessage);
              return throwError(errorMessage);
      }
}