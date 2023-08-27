import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private readonly http: HttpClient) { }

  getMainBreeds() {
    return this.http.get<any>(`${environment.API}/breeds`);
  }

  getBreedById(id: string) {
    return this.http.get<any>(`${environment.API}/breeds/${id}`);
  }

  getImagesById(id: string) {
    return this.http.get<any>(`${environment.API}/breeds/images/${id}`);
  }
}
