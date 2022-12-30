import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-List';
  // Create a constructor
  constructor(){
    // Change the title value
    // It will change the title after 2seconds
    /*setTimeout(() => {
      this.title='Changed-Title'
    }, 2000);*/
  }
}
