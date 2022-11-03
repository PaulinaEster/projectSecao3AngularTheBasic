import { Component, OnInit } from '@angular/core';
import { Recepi } from '../recepi.model';

@Component({
  selector: 'app-recepis-list',
  templateUrl: './recepis-list.component.html',
  styleUrls: ['./recepis-list.component.css']
})
export class RecepisListComponent implements OnInit {

  recepes: Recepi[] = [
    new Recepi("Paulina", "sou lesbica e tenho 20 anos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfI8TAyV-3CZI_06umx-7vr6t6nI7BMIX8w-5ASiKYsNxBzK37D9Xcpa3adK9t5_Ut9B4&usqp=CAU"),
    new Recepi("Paulina", "sou lesbica e tenho 20 anos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfI8TAyV-3CZI_06umx-7vr6t6nI7BMIX8w-5ASiKYsNxBzK37D9Xcpa3adK9t5_Ut9B4&usqp=CAU"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
