import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, map } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { PasswordChangeModel } from '../models/passwordChangeModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="http://localhost:3000/";
  name: string = "";
  surname:string="";
  userName:string="";
  role:any;
  roles: any[] = [];
  token: any;
  isLoggedIn: boolean = false;
  userId: number = 0;
  email:string = "";

  constructor(
    private httpClient:HttpClient,
    private router: Router,
    private localStorage:LocalStorageService
  ) { }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    const body=JSON.stringify(loginModel);
    console.log("*********************",body);
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",body,{
      headers : new HttpHeaders({
        'api-name':"login",
        "my-head":"okkkkkk"
      }),
    });
  }

  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  }
  logout() {
  
    this.localStorage.clear()
    this.onRefresh();
    this.router.navigate(['/login']);
  }

  // testJsonServer():Observable<CarImage[]>{
  //   console.log("*************testJsonServer called");
  //   return this.httpClient.get<CarImage[]>(this.apiUrl+"login");
  // }
  testJsonServer(){
    console.log("*************testJsonServer called");
    return this.httpClient
    .get(this.apiUrl+"auth",
      {
        headers : new HttpHeaders({
          'api-name':"testJsonServer",
          "my-head":"okkkkkk"
        }),
      }
    )
    .pipe(
      map((res)=>{
        let result = [];
        for( let key in res){
          result.push({key});
          console.log("key",key,res);
        }
        return result;
      })
    )
    .subscribe((res)=>{
      console.log("Subs:",res);
    })
  }
  // testJsonServer(){
  //   console.log("*************testJsonServer called");
  //   return this.httpClient.get<CarImage[]>(this.apiUrl+"login").subscribe(res=>{
  //     console.log("*************",res[0]);
  //   })
  // }

  isAuthenticated(){
    // if(this.localStorage.getItem("token")){
    //   return true;
    // }
    // else{
    //   return false
    // }
    return true;
  }

  userDetailFromToken(){
    // this.token = this.localStorage.getItem("token");
    // let decodedToken = this.jwtHelper.decodeToken(this.token);
    // let name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    // this.name = name.split(' ')[0];
    // let surname = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    // this.surname = surname.split(' ')[1];
    // this.roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    // this.role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    // this.userId =parseInt(decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']);
    // this.email=decodedToken["email"];
    // this.userName= name.split(' ')[0]+" "+ surname.split(' ')[1] ;

    let name = "Piyush Kumar Roy";
    this.name = name.split(' ')[0];
    let surname = "Kumar Roy";
    this.surname = surname.split(' ')[1];
    this.roles = ["admin","View"];
    this.role = "admin";
    this.userId = 123456;
    this.email= "proy@test.com"
    this.userName= name.split(' ')[0]+" "+ surname.split(' ')[1] ;
    
  }

  roleCheck(roleList: string[]) {
    if (this.roles !== null) {
      roleList.forEach(role => {
        if (this.roles.includes(role)) {
          return true;
        } else {
          return false;
        }
      })
      return true;
    } else {
      return false;
    }
  }
  async onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false }
    const currentUrl = this.router.url + '?'
    return this.router.navigateByUrl(currentUrl).then(() => {
      this.router.navigated = false
      this.router.navigate([this.router.url])
    })
  }

  
  changePassword(passwordChangeModel:PasswordChangeModel):Observable<ResponseModel>{
    let newPath = this.apiUrl + "changepassword"
    return this.httpClient
    .post<ResponseModel>(newPath,passwordChangeModel)
  }

  getCurrentUserId():number {
    return this.userId
  }
}
