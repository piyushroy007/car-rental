import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CarImage } from 'src/app/models/carImage';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  lastName=this.authService.name;
  firstName=this.authService.surname;
  userRol=this.authService.role
  date= new Date();
  @ViewChild('inputf') myInputVariable2: ElementRef= {} as ElementRef;

  constructor(
    private authService:AuthService,
    private toasterService:ToastrService,
    private localStorageService:LocalStorageService,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("****************************nav component",this.lastName,this.firstName,this.authService.name);
  }

  callServer(){
    console.log("*************callServer called");
    this.authService.testJsonServer();
    console.log("nativeElement.value",this.myInputVariable2.nativeElement.innerHTML);
  }
  
  isAuthenticated(){
    if(this.authService.isAuthenticated()){
      return true
    }
    else{
      return false
    }
   }
   checkAdminRole(){
    if(this.authService.role[0]=="admin"){
      return true
    }
    else{
      return false
    
    }
   }

   checkUserRole(){
    if(this.authService.role=="user"){
      return true
    }
    else{
      return false
    }
   }
  
   checkNotRole(){
    if(this.authService.role==null){
      return true
    }
    else{
      return false
    }
   }
  
  logout(){
    this.authService.logout()
    this.toasterService.success("Çıkış Yapıldı","Başarılı")
  }
}

