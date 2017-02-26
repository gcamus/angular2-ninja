import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'PonyRacer';
  user: any = {name: 'Guillaume'};

  onNewRace() {
    // add a flashy message for the user.
  }
}
