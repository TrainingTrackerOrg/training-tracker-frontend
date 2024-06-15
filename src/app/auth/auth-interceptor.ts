import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('accessToken');
      if (token) {
          const token = localStorage.getItem('accessToken');
          request = request.clone({
              setHeaders: {Authorization: `Bearer ${token}`}
          });
      }

      return next.handle(request);
  }
}
