import { Routes } from '@angular/router';
import {ProfileComponent} from "./user/profile/profile.component";
import {FormRegisterComponent} from "./auth/form-register/form-register.component";
import {FormLoginComponent} from "./auth/form-login/form-login.component";
import {IndexRequestsComponent} from "./user/index-requests/index-requests.component";
import {GroupComponent} from "./conv-group/group/group.component";
import {CommunityComponent} from "./channel/community/community.component";
import {ConversationMainComponent} from "./conversation-main/conversation-main.component";

export const routes: Routes = [
  {
    path:'',
    redirectTo:"/login",
    pathMatch: "full"
  },
  {
    path:'private',
    component: ConversationMainComponent,
    },
  {
    path:'profile',
    component: ProfileComponent,
    }, //:id
  {
    path:'login',
    component: FormLoginComponent,
    },
  {
    path:'register',
    component: FormRegisterComponent,
    },
  {
    path:'requests',
    component: IndexRequestsComponent,
    },
  {
    path: 'groups',
    component: GroupComponent,},
  {
    path: 'community',
    component: CommunityComponent,
  }



];
