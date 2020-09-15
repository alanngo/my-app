import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
  openCurly ="{";
  closeCurly ="}"

  openAngle = "<";
  closeAngle = ">";
  ngOnInit(): void {
  }
  
  visible = true;

  arr = ["flask", "shell", "sql", "java", "spring"]

}
