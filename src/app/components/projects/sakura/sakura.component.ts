import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-sakura',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ThemeDirective,
    CarouselComponent,
    CarouselInnerComponent,
    NgFor,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink,
  ],
  templateUrl: './sakura.component.html',
  styleUrl: './sakura.component.scss',
})
export class SakuraComponent implements OnInit {
  slides: any[] = new Array(7).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOnInit(): void {
    this.slides[0] = {
      src: 'assets/images/sakura/sakura 1.jpg',
    };
    this.slides[1] = {
      src: 'assets/images/sakura/sakura 2.jpg',
    };
    this.slides[2] = {
      src: 'assets/images/sakura/sakura 3.jpg',
    };
    this.slides[3] = {
      src: 'assets/images/sakura/sakura 4.png',
    };
    this.slides[4] = {
      src: 'assets/images/sakura/sakura 5.png',
    };
    this.slides[5] = {
      src: 'assets/images/sakura/corte 1 sakura 3d.png',
    };
    this.slides[6] = {
      src: 'assets/images/sakura/fachada sakura.png',
    };
    
  }
}
