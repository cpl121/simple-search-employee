import { TestBed } from '@angular/core/testing';
import { HttpService } from './http-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

describe('HttpServiceService', () => {
  let service: HttpService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const server = "http://localhost:3000";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be call getEmployees sucessfully', () => {
    const url: string = server + "/api" + "/employees";
    const http = spyOn(httpClient, "get");
    service.getEmployees();
    expect(http).toHaveBeenCalledWith(url);
  });
});


export class HttpServiceServiceMock {

  getEmployees() {
    return new Observable<Employee[]>();
  }
}