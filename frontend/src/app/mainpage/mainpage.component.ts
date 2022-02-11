import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  articles: Article[] = [new Article("Artikel 1", "Lorem Ipsum"), new Article("Artikel 2", "Ülemaa >")];

  constructor() { }

  ngOnInit(): void {
  }

}
