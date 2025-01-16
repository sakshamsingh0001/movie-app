import { Component } from '@angular/core';
import { HttpService } from 'src/app/components/services/api/api.service';
import { API_CONFIG } from '../services/api/api-config';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  isOverlayVisible: boolean = false; // Flag to toggle overlay visibility
  selectedMovie: any; // Variable to store the selected movie details
  movies: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  lastUrl: string = '';
  isLoading: boolean = false;
  selectedGenre: number[] = [];
  types = [
    { name: 'HOME' },
    { name: 'MOVIES' },
    { name: 'GENRE' },
    { name: 'YEAR' },
    { name: 'OTT' },
    { name: 'WEB SERIES' },
    { name: 'TV SERIES' },
  ];


  genres = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ]


  constructor(private httpService: HttpService) { }

  ngOnInit() {
    const page = 1; // You can make this dynamic based on user interaction or current page
    const apiUrl = `${API_CONFIG.BASE_URL}?page=${page}&api_key=${API_CONFIG.API_KEY}`;
    console.log('Constructed API URL:', apiUrl); // Log the URL for debugging
    this.fetchMovies(apiUrl);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleGenreSelection(genreId: number) {
    if (this.selectedGenre.includes(genreId)) {
      this.selectedGenre = this.selectedGenre.filter((id) => id !== genreId);
    } else {
      this.selectedGenre.push(genreId);
    }
    // this.fetchMovies();
  }


  fetchMovies(url: string): void {
    this.isLoading = true;
    this.lastUrl = url;
    // this.isOverlayVisible = true;

    // Ensure that the URL passed includes required parameters like page and api_key
    if (!url.includes('api_key')) {
      console.error('API URL is missing api_key parameter:', url);
      this.isLoading = false;
      return;
    }

    this.httpService.getMovies(url).subscribe(
      (data) => {
        console.log('API Response:', data); // Log the entire response for inspection

        // Check if the response contains valid data structure
        if (data && data.results && Array.isArray(data.results)) {
          this.movies = data.results;
          this.currentPage = data.page;
          this.totalPages = data.total_pages;
          console.log('Movies:', this.movies); // Log the movies array to see the result
        } else {
          console.log('No Results Found or Invalid Data Structure');
          this.movies = [];
        }

        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching movies:', error);
        this.isLoading = false;
      }
    );
  }

  // Navigate to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      const nextUrl = `${this.lastUrl}&page=${this.currentPage + 1}`;
      this.fetchMovies(nextUrl);
    }
  }

  // Navigate to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      const prevUrl = `${this.lastUrl}&page=${this.currentPage - 1}`;
      this.fetchMovies(prevUrl);
    }
  }

  openOverlay(movie: any): void {
    this.selectedMovie = movie;
    this.isOverlayVisible = true;
    console.log('Selected Movie', this.selectedMovie)
  }

  closeOverlay(): void {
    this.isOverlayVisible = false;
  }
}

