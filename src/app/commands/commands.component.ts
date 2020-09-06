import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goto(location:string)
  {
    this.router.navigate([location]);
  }
}
