import { Component } from '@angular/core';
import { ToggleThemeComponent } from "./Components/toggle-theme/toggle-theme.component";

@Component({
  selector: 'app-root',
  imports: [ToggleThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chat-App';
  constructor(){

  }
}
