import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Laptop } from './laptop'
import {LaptopService} from './laptop.service'
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  laptopForm:FormGroup;
  
  constructor(private laptopService: LaptopService, private fb:FormBuilder) { }

  ngOnInit(): void 
  {
    this.getAllLaptops();
    
    this.laptopForm = this.fb.group
    ({
      'name': ['', [Validators.required]],
      'cpu': ['', [Validators.required, Validators.pattern(
            "(Intel core i[3579] [0-9]{4,}[A-Za-z]*)" +
            "|(AMD Ryzen [3579] [0-9]{4,}[A-Za-z]*)")
          ]],
      'ram': [4, [Validators.min(4)]],
      'storage':this.fb.group
      ({
        'nvme': [0, []],
        'ssd': [0, []],
        'hdd': [0, []]
      }),
      'gpu': ['', [Validators.pattern("(Intel U?HD [56][23]0)|" +
      "([Nn]vidia Geforce [GR]TX [123][06][5678]0)(| super| Ti)")]]
    });
  }

  laptop: Laptop = new Laptop(); //DONT FORGET THE CONSTRUCTOR
  private getValue(key: string){return this.laptopForm.get(key).value;}
  private getStorage(key: string){return this.laptopForm.get('storage').get(key).value;}
  addLaptop()
  {
    this.laptop.name = this.getValue('name');
    this.laptop.cpu = this.getValue('cpu');
    this.laptop.ram = this.getValue('ram');
    this.laptop.nvme = this.getStorage('nvme')
    this.laptop.ssd = this.getStorage('ssd')
    this.laptop.hdd = this.getStorage('hdd')
    this.laptop.gpu = this.getValue('gpu');

    console.log(this.laptop);
    this.laptopService.addLaptop(this.laptop)
    .subscribe
    (
      laptop =>{this.laptops.push(laptop)},
      err =>console.log(err)
    )
  }
  laptops:Laptop[] = []
  getAllLaptops()
  {
    this.laptopService.getLaptops().
    subscribe
    (
      laptopList => 
      {
        console.log(this.laptops);
        this.laptops = laptopList;
      },
      err =>{console.log(err)} 
    )
  }
  deleteLaptop(id:number)
  {
    this.laptopService.deleteLaptop(id)
    .subscribe
    (
      () => {this.laptops = this.laptops.filter(l => l.id !=id);},
      err => console.log(err)
    )
  }

}
