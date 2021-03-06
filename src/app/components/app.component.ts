import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'eastBanc-task';
  isEmptyMessageVisible = false;

  constructor(public httpService: HttpService) { }

  searchUsers(value: string) {
    this.httpService.search(value);
  }
}
