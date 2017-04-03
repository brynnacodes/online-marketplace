import { Component } from '@angular/core';
import { Category } from './../category.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  masterCategoryList: Category[] = [
    new Category('Blues'),
    new Category('Hip Hop'),
    new Category('Indie'),
    new Category('World')
  ];
}
