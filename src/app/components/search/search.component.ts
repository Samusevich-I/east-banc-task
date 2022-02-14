import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() searchUserName: EventEmitter<string> = new EventEmitter();
  @Input() isLoading: boolean = false;

  userName: string = '';

  constructor() {}

  onClickSearchButton() {
    this.searchUserName.emit(this.userName);
  }
}
