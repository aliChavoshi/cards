import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title : "Neat Tree",
      imageUrl:"assets/images/tree.jpeg",
      username : "nature",
      content:"i saw neat tree "
    },
    {
      title : "snowy mountain",
      imageUrl:"assets/images/mountain.jpeg",
      username : "mountain",
      content:"i saw snowy mountain "
    },
    {
      title : "biking",
      imageUrl:"assets/images/biking.jpeg",
      username : "biking",
      content:"i saw biking "
    }
  ]
}
