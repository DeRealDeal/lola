import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  navigate(path: string, relativeToParent = false) {
    console.log(path, this.activatedRoute, relativeToParent)
    if(relativeToParent){
      this.router.navigate([path]);

    }
    else{

      this.router.navigate([path], { relativeTo: this.activatedRoute });
    }
  }
}
