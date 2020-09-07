import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor() { }
  openCurly ="{";
  closeCurly ="}"

  openAngle = "<";
  closeAngle = ">";
  ngOnInit(): void {}

}
