import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-ui',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, CommonModule],
  templateUrl: './main-ui.component.html',
  styleUrl: './main-ui.component.scss',
})
export class MainUiComponent {
  expandedSidenav = true;
}
