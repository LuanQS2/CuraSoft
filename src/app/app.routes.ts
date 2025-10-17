import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DefaultLoginComponent } from './components/default-login/default-login.component';

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "login",
    component: DefaultLoginComponent
  }
];
