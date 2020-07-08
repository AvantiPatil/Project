import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LoginModel } from '../Home/app.LoginModel';
import { Observable } from 'rxjs';


@Injectable()
export class JWTInterceptor implements HttpInterceptor{
    constructor(private user:LoginModel){ }

    intercept(request:HttpRequest<any>,next:HttpHandler):
    Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.user.token}`
            }
        });
        return next.handle(request);
    }
}