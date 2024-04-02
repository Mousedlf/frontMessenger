import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {Globals} from "../globals";
import {HttpInterceptor} from "./auth/httpInterceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([HttpInterceptor])),
    //Globals,

  ]
};
