import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchText: string | number = "mobile";
  @Output() searchValueChanged = new EventEmitter<string | number>();
  constructor(private route: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.navigate(['home']);

  }
  changedSearchText() {
    this.searchValueChanged.emit(this.searchText);

  }

}
