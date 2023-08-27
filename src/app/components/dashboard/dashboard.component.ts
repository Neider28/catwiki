import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { Breed } from 'src/app/interfaces/breed.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private readonly catService: CatService) {}

  handleModal = false;
  mainBreeds: Breed[] = [];
  allBreeds: Breed[] = [];
  links: string[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.catService.getMainBreeds().subscribe(data => {
      this.allBreeds = data.filter((item: any) => {
        if(item.image) {
          return item;
        }
      });

      while (this.mainBreeds.length < 4) {
        const index = Math.floor(Math.random() * this.allBreeds.length);
        const breed = this.allBreeds[index];

        if (!this.mainBreeds.includes(breed)) {
          this.mainBreeds.push(breed);
          this.links.push(`/detail/${breed.id}`);
        }
      }

      this.isLoading = false;
    });
  }

  handleModalSearch() {
    this.handleModal = true;
  }

  closeModalEmitter(handle: boolean) {
    this.handleModal = handle;
  }
}
