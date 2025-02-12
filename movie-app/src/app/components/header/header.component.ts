import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/api/api.service';
import { API_CONFIG } from '../services/api/api-config';
import { environment } from 'src/environment/environment';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 

  isDarkTheme: boolean = false;
  searchQuery: any;
  showDropdown: boolean = true;
  movies: any;
  selectedTab: string | null = null;

  constructor(
    private router: Router,
    private http: HttpService,
    public dialog: MatDialog
  ) { }

  @ViewChild('searchModal') searchModal!: TemplateRef<any>;


  ngOnInit() {
    // this.onSearch(this.searchQuery)

  }

  closeModal(): void {
    this.dialog.closeAll();
  }

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
    {
      name: 'HOME', dropdown: null,
      click: () => {
        this.navigateToHome()
      }
    },
    { name: 'MOVIES', dropdown: null },
    { name: 'GENRE', dropdown: ['Action', 'Comedy', 'Drama'] },
    { name: 'YEAR', dropdown: ['2023', '2022', '2021'] },
    { name: 'OTT', dropdown: null },
    { name: 'WEB SERIES', dropdown: null },
    { name: 'TV SERIES', dropdown: null }
  ];



  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }

  // onSearch(query:string) {
  //   console.log('Search Query in the box:', query)
  //     this.http.getSearchMovies(`API_CONFIG.BASE_URL ,${query}`).subscribe((response:any) => {
  //       this.
  //     })
  //  }
  onSearch(searchQuery: any) {
    console.log('Search Query in the box:', searchQuery);
    this.http.getSearchMovies(searchQuery).subscribe((response: any) => {
      this.movies = response.results;
      console.log('Searched Movies', this.movies);
      if (this.searchQuery.trim() !== '') {
        this.dialog.open(this.searchModal, {
          width: '1400px'
        });
      }
    }, error => {
      console.log('Error Searching Movies', error);
    });

  }

  // onclick(): void {
  //   console.log('On Click Search Is Working ')
  //   if (this.searchQuery.trim() !== '') {
  //     this.dialog.open(this.searchModal, {
  //       width: '400px'
  //     });
  //   }
  // }

  navigateToHome() {
    this.router.navigate([''])
    window.location.reload()
    // console.log('Home Clicked')
  }

}
