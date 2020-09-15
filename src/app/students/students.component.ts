import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students= 
  [
    {name:"Smruti", gender:"FEMALE", hours:35},
    {name:"Kevin", gender:"MALE", hours:62},
    {name:"Shreya", gender:"FEMALE", hours:86},
    {name:"Lyndon", gender:"MALE", hours:26},
    {name:"Amir", gender:"MALE", hours:100},
  ];
  classification: string
}
