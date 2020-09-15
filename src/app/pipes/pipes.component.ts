import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pipes = 
  [
    "async",
    "currency",
    "date",
    "decimal",
    "i18nPlural",
    "I18nSelectPipe",
    "json",
    "keyvalue",
    "lowercase",
    "percent",
    "slice",
    "titlecase",
    "uppercase"
  ]
}
