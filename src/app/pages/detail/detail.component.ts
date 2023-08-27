import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Breed } from 'src/app/interfaces/breed.interface';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly titleService: Title,
    private readonly catService: CatService
  ) { }

  imageHandle = new Image();

  breed!: Breed;
  image: string = '';
  images = [];
  isLoading = true;
  isError = false;

  ngOnInit(): void {
    window.scroll(0, 0);

    this.catService.getBreedById(this.activatedRoute.snapshot.params['id']).subscribe(
      (data) => {
        if(JSON.stringify(data) === '{}') {
          this.isError = true;
          return;
        }

        this.breed = data;
        this.image = `https://cdn2.thecatapi.com/images/${this.breed.reference_image_id}.jpg`;

        this.imageHandle.src = this.image;
        this.imageHandle.onerror = () => {
          this.image = '../../../assets/img/default.png';
        };

        this.titleService.setTitle(`Cat - ${this.breed.name}`);

        this.catService.getImagesById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
          this.images = data;

          this.isLoading = false;
        });
      }
    );
  }
}
