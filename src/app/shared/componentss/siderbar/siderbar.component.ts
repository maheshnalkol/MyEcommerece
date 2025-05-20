import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss'],
})
export class SiderbarComponent implements OnInit {
  dropdownOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
