import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/Servicios/UserService/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService,
    private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> {
    request = this.addToken(request);
    
    return next.handle(request);
  }

  private addToken(request: HttpRequest<unknown>){
    const token = this.authService.getToken();
    
    
   
    if(token){
        const authReq = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`)
          
        });
        
        return authReq;
    }
    
    return request;
  }
  
  manejoError(error: HttpErrorResponse) {
    console.log('Sucediò un error');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError('Error personalizado')
  }

}