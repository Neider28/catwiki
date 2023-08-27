import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly titleService: Title
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.titleService.setTitle('CatWiki');
  }
}
