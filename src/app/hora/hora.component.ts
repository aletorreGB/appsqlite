import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.scss'],
})
export class HoraComponent implements OnInit {
  private places =[
    {
      id:'1',
      title:'Alberto Sanhueza / Pediatra',
      imageURL:'https://polimedica.cl/wp-content/uploads/2018/04/doctor-icono3.png'
    },
    {
      id:'2',
      title:'Alberto Sanhueza / Gastroenterologo',
      imageURL:'https://polimedica.cl/wp-content/uploads/2018/04/doctor-icono3.png'
    },
    {
      id:'3',
      title:'Alejandra Toledo / Matrona',
      imageURL:'https://polimedica.cl/wp-content/uploads/2018/04/doctor-icono3.png'
    }
  ]
  constructor() { }

  ngOnInit() {}

}
