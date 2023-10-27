import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor,HttpRequest } from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req:HttpRequest<any>,next:HttpHandler) {
        let user = true;
        if(!user){
            return next.handle(req);
        }
        console.log("Inside interceptor",req);
        let newRequest:HttpRequest<any>;
        newRequest =req.clone({
            headers:req.headers.set("Authorization","123456789")
        })
        return next.handle(newRequest);
    }

}