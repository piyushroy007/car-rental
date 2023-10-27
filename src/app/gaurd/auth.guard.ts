import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {

  let router = inject(Router);
  let ts = inject(ToastrService);
  let isloggedIn = sessionStorage.getItem("token");
  if (isloggedIn == "false"){
    ts.error("Login","Failed");
    router.navigate(["login"]);
    return false;
  }
  ts.success("Login","success");
  return true;
};
