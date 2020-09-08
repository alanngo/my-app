import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }
  openCurly ="{";
  closeCurly ="}"
  openAngle = "<";
  closeAngle = ">";

  ngOnInit(): void {
  }

}
