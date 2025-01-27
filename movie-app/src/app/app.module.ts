import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MoviesComponent } from './components/movies/movies.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,  // Add this to enable animations
    ToastrModule.forRoot({
      timeOut: 3000,      // Duration of toast display
      positionClass: 'toast-top-right',  // Position of the toast
      preventDuplicates: true           // Prevent duplicate toasts
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
