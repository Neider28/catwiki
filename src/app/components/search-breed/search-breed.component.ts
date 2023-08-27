import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from 'src/app/services/cat.service';
import { Breed } from 'src/app/interfaces/breed.interface';

@Component({
  selector: 'app-search-breed',
  templateUrl: './search-breed.component.html',
  styleUrls: ['./search-breed.component.css']
})
export class SearchBreedComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly catService: CatService
  ) {}

  keyword = 'name';
  data: Breed[] = [];

  ngOnInit(): void {
    this.catService.getMainBreeds().subscribe(data => {
      this.data = data.filter((item: any) => {
        if(item.image) {
          return item;
        }
      });
    });
  }

  selectEvent(item: any) {
    this.router.navigate([`/detail/${item.id}`]);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any){
    // do something when input is focused
  }
}
