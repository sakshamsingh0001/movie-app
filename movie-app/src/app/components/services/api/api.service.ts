import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from './api-config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private SEARCH_URL = `${API_CONFIG.BASE_URL}/search/movie?api_key=${API_CONFIG.API_KEY}`;

  constructor(
    private http: HttpClient) {}

  // Search movies by query
  searchMovies(query: string): Observable<any> {
    const url = `${this.SEARCH_URL}&query=${encodeURIComponent(query)}`;
    return this.http.get<any>(url);
  }

  // Fetch movies based on a dynamic URL (don't add the base URL again)
  getMovies(url: string): Observable<any> {
    // Log the URL before making the request
    console.log('API Request URL:', url);
    return this.http.get<any>(url);
  }

  postForm(url: any, obj:any, params:any = null){
    const convtParams = this.configureParams(params)
    return this.http.post(`${API_CONFIG.BASE_URL}`, obj)

  }

  configureParams(params:any){

  }

  // Helper method to construct the URL for popular movies with pagination
  // getPopularMovies(page: number): Observable<any> {
  //   // Construct the URL dynamically using only the query parameters
  //   const url = `${API_CONFIG.BASE_URL}?page=${page}&api_key=${API_CONFIG.API_KEY}`;
  //   return this.getMovies(url); // Use the getMovies method with the constructed URL
  // }
}
