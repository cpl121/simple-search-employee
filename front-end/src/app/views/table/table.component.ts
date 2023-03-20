import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http-service.service';
import { Employee } from '../../interfaces/employee';

const data: Employee[] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() filter: string = "";
  data: Employee[] = [];

  constructor (private service: HttpService) {}

  ngOnInit(): void {
    this.service.getEmployees().subscribe(datos => {
      this.data = datos;
    });
  }

}
