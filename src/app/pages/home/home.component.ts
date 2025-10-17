import { Component } from '@angular/core';
import { HomeHeaderComponent } from "../../layouts/home-layout/home-header/home-header.component";
import { AdminFooterComponent } from "../../layouts/admin-layout/admin-footer/admin-footer.component";
import { HomeFooterComponent } from "../../layouts/home-layout/home-footer/home-footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeaderComponent,
    HomeFooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
