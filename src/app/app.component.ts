import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserLayoutComponent } from "./modules/user/user-layout/user-layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'New_Project';
}
