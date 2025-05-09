import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const newreq = req.clone({
            headers: req.headers.append('Authorization', 'Bearer X100X456UI')
        });
        console.log(newreq);
        return next.handle(newreq);
    }
}