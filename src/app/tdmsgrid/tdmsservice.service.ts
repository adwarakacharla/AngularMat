import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TDMS } from '../model/tdms';

@Injectable({
  providedIn: 'root'
})
export class TdmsserviceService {

  constructor(private http: HttpClient) { }

  findRecords(pageNumber = 0, pageSize = 3): Observable<TDMS[]> {
    return this.http.get<TDMS[]>('api/tdms', {
      params: new HttpParams()
        .set('pageNum', pageNumber.toString())
        .set('size', pageSize.toString())
    });
  }

}
