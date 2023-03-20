import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { HttpService } from '../../services/http-service.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { TableModule } from 'primeng/table';
import { of } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { HttpServiceServiceMock } from '../../services/http-service.service.spec';


describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let service: HttpServiceServiceMock;

  const testData: Employee[] = [
    {
      "id": 14,
      "name": "Plan",
      "surname": "Pons",
      "surname2": "Calan",
      "sex": "M",
      "country_id": 3,
      "phone": "56663321",
      "datebirthday": new Date("1996-03-20T00:00:00"),
      "lastModification": new Date("2010-04-05T11:00:32"),
      "phonePrefix": "+(89) 56663321",
      "country": "France",
      "sexLarge": "Women",
  },
  {
      "id": 115,
      "name": "Cantona",
      "surname": "Sor",
      "surname2": "Garcia",
      "sex": "H",
      "country_id": 2,
      "phone": "5666233",
      "datebirthday": new Date("1997-03-10T00:00:00"),
      "lastModification": new Date("2000-02-05T09:00:00"),
      "phonePrefix": "+(55) 56663321",
      "country": "Germany",
      "sexLarge": "Men",
  },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent, FilterPipe],
      imports: [TableModule]
    })
    .compileComponents();
  });


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TableComponent,
        {
          provide: HttpService,
          useClass: HttpServiceServiceMock
        }
      ]
    });
    service = TestBed.inject(HttpService);
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be charge data successfully', () => {
    expect(component.data).toEqual([]);
    spyOn(service, "getEmployees").and.returnValue(of(testData));
    fixture.detectChanges();
    expect(component.data).toEqual(testData);
    // No hay ningún filtro activo, así que se muestrán todas las filas de la tabla, por lo tanto hay 3 tr
    expect(document.getElementsByTagName("table").item(0)?.getElementsByTagName("tr").length).toEqual(3);
  });

  it('should be works filter with name field succesfully', () => {
    expect(component.data).toEqual([]);
    component.filter = "Plan";
    spyOn(service, "getEmployees").and.returnValue(of(testData));
    fixture.detectChanges();
    // Como solo hay 1 elemento que se muestra en la lista, por el filtro, hay 2 tr
    expect(document.getElementsByTagName("table").item(0)?.getElementsByTagName("tr").length).toEqual(2);
    // Y el id coincide con el id del nombre que se ha usado para filtrar
    expect(document.getElementsByTagName("table").item(0)?.getElementsByTagName("td").item(0)?.innerText)
    .toEqual(String(testData[0].id));
  });

  it('should be works filter with country field succesfully', () => {
    expect(component.data).toEqual([]);
    component.filter = "Germany";
    spyOn(service, "getEmployees").and.returnValue(of(testData));
    fixture.detectChanges();
    // Como solo hay 1 elemento que se muestra en la lista, por el filtro, hay 2 tr
    expect(document.getElementsByTagName("table").item(0)?.getElementsByTagName("tr").length).toEqual(2);
    // Y el id coincide con el id del nombre que se ha usado para filtrar
    expect(document.getElementsByTagName("table").item(0)?.getElementsByTagName("td").item(0)?.innerText)
    .toEqual(String(testData[1].id));
  });

  it('should be works filter with sex field succesfully, filtered first objetc', () => {
    expect(component.data).toEqual([]);
    component.filter = "Women";
    spyOn(service, "getEmployees").and.returnValue(of(testData));
    fixture.detectChanges();
    // Como solo hay 1 elemento que se muestra en la lista, por el filtro, hay 2 tr
    expect(document.getElementsByTagName("table").item(0)?.getElementsByTagName("tr").length).toEqual(2);
    // Y el id coincide con el id del nombre que se ha usado para filtrar
    expect(document.getElementsByTagName("table").item(0)?.getElementsByTagName("td").item(0)?.innerText)
    .toEqual(String(testData[0].id));
  });

  it('should be works filter with sex field succesfully, filtered second objetc', () => {
    expect(component.data).toEqual([]);
    component.filter = "Men";
    spyOn(service, "getEmployees").and.returnValue(of(testData));
    fixture.detectChanges();
    // Como solo hay 1 elemento que se muestra en la lista, por el filtro, hay 2 tr
    expect(document.getElementsByTagName("table").item(0)?.getElementsByTagName("tr").length).toEqual(2);
    // Y el id coincide con el id del nombre que se ha usado para filtrar
    expect(document.getElementsByTagName("table").item(0)?.getElementsByTagName("td").item(0)?.innerText)
    .toEqual(String(testData[1].id));
  });

  it('should be works filter with incorrect field succesfully', () => {
    expect(component.data).toEqual([]);
    component.filter = "xxxxx";
    spyOn(service, "getEmployees").and.returnValue(of(testData));
    fixture.detectChanges();
    // Como solo no hay ningún elemento que se muestra en la lista, por el filtro, hay 1 solo tr
    expect(document.getElementsByTagName("table").item(0)?.getElementsByTagName("tr").length).toEqual(1);
    // Y el nombre coincide con el id del nombre que se ha usado para filtrar
    expect(document.getElementsByTagName("table").item(0)?.getElementsByTagName("td").item(0)?.innerText)
    .toBeUndefined();
  });

});
