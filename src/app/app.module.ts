import { NgModule } from '@angular/core';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBreedComponent } from './components/search-breed/search-breed.component';
import { ModalSearchComponent } from './components/modal-search/modal-search.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PhotoComponent } from './components/photo/photo.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    SearchBreedComponent,
    ModalSearchComponent,
    DetailComponent,
    PhotoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
