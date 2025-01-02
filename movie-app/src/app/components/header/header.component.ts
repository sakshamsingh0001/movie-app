import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isDarkTheme: boolean = false;
  searchQuery: any;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme; // Toggle the theme
    if (this.isDarkTheme) {
      document.body.classList.add('dark-toggle'); // Add the class to the body
    } else {
      document.body.classList.remove('dark-toggle'); // Remove the class
    }
  }

  onSearch() { }


}
