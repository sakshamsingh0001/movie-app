import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isDarkTheme: boolean = false;
  searchQuery: any;
  showDropdown: boolean = true;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme; // Toggle the theme
    if (this.isDarkTheme) {
      document.body.classList.add('dark-toggle'); // Add the class to the body
    } else {
      document.body.classList.remove('dark-toggle'); // Remove the class
    }
  }

//   types = [
//     { name: 'HOME'},
//     { name : 'MOVIES'}, 
//     {name : 'GENRE'},
//     {name : 'YEAR'},
//     {name : 'OTT'},
//     {name : 'WEB SERIES'},
//     {name : 'TV SERIES'},
//  ];

//  showValue(){
//      if (this.types == "GENRE")
//  }

// types = [
//   { name: 'HOME', dropdown: null },
//   { name: 'MOVIES', dropdown: null },
//   { name: 'GENRE', dropdown: ['Action', 'Comedy', 'Drama'] },
//   { name: 'YEAR', dropdown: ['2023', '2022', '2021'] },
//   { name: 'OTT', dropdown: null },
//   { name: 'WEB SERIES', dropdown: null },
//   { name: 'TV SERIES', dropdown: null }
// ];

types = [
  { name: 'HOME', dropdown: null },
  { name: 'MOVIES', dropdown: null },
  { name: 'GENRE', dropdown: ['Action', 'Comedy', 'Drama'] },
  { name: 'YEAR', dropdown: ['2023', '2022', '2021'] },
  { name: 'OTT', dropdown: null },
  { name: 'WEB SERIES', dropdown: null },
  { name: 'TV SERIES', dropdown: null }
];

selectedTab: string | null = null;

selectTab(tabName: string) {
  this.selectedTab = tabName;
}

  onSearch() { }

}
