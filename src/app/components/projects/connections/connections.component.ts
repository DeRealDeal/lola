import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-connections',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './connections.component.html',
  styleUrl: './connections.component.scss',
})
export class ConnectionsComponent {
  title: any;
  client: any;
  mainDescription: any;
  mainImageURL: any;
}
