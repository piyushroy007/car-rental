import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SubscriptionModel } from 'src/app/models/subscription';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:FormGroup = new FormGroup({});
  dataLoaded=false
  dummy : SubscriptionModel[] = [];
  constructor(
    private  formBuilder:FormBuilder,
    private authService:AuthService,
    private toasterService:ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  this.createLoginForm();
  // this.authService.getSubscriptions().subscribe(data=>{
  //   console.log("88888888888888888",data);
  //   this.dummy = data;
  // });
}
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
    this.toasterService.success("Form Created","Success!")
  }


  login(){
    if(this.loginForm.valid){
      console.log("login form",this.loginForm);
      let loginModel =Object.assign({},this.loginForm.value)
      this.router.navigate(['/home']);
      if(loginModel.email=="piyushbackup101@gmail.com"){
        sessionStorage.setItem("token","true");
      }else{
        sessionStorage.setItem("token","false");
      }
      // this.authService.login(loginModel).subscribe(response=>{
      //   console.log("response :",response);
      //   // this.toasterService.success(response.message,"Success");
      //   // localStorage.setItem("token",response.data.token);
      //   this.dataLoaded=true;
      //   // this.authService.onRefresh();
      //   this.router.navigate(['/home']);
      // }
      // ,responseError=>{
      //   this.toasterService.error(responseError.error,"Error")
      // })
    }
    else {
      this.toasterService.error("Please fill in all fields","Attention!")
    }
  }
}
