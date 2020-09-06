import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goto(location:string)
  {
    this.router.navigate([location]);
  }

}
