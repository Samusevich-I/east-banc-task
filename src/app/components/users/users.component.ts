import { Component, Input, OnInit } from '@angular/core';
import { IGitUsersResponse } from 'src/app/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent{
  @Input() result: IGitUsersResponse;
  @Input() isLoading: boolean;

  emptyMsg: string = 'No data to show...';

  constructor() {}
}
