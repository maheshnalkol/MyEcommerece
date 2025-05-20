import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss'],
})
export class SiderbarComponent implements OnInit {
  dropdownOpen: boolean = false;
  showSidebar: boolean = false;

  constructor(
    private _authService: AuthService,
    private _routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.checkState();
    this.checkRoute();
  }

  checkRoute() {
    this._routes.url.subscribe((s) => {
      const match = s.some((seg) => seg.path === '');
      if (match) {
        this.showSidebar = false;
      }
    });
  }

  checkState() {
    this._authService.checkTokenstate.subscribe((s) => {
      this.showSidebar = s;
    });
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
