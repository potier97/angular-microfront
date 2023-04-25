import { Component } from '@angular/core';
import { CommonsLibService } from '@commons-lib';
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public envName: string = environment.env;
  title = 'mf-shell';
  
  constructor(public commonsLibService: CommonsLibService) {}
}
