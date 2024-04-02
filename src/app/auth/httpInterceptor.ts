import {HttpInterceptorFn} from "@angular/common/http";
import {Globals} from "../../globals";

export const HttpInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem("Token");

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  // Pass the cloned request with the updated header to the next handler
  return next(authReq);
};
