import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TDMS } from '../model/tdms';
import { TdmsserviceService } from './tdmsservice.service';

@Component({
  selector: 'app-tdmsgrid',
  templateUrl: './tdmsgrid.component.html',
  styleUrls: ['./tdmsgrid.component.css']
})
export class TdmsgridComponent implements OnInit, AfterViewInit  {


  displayedColumns = ["seqNo", "first_name", "last_name", "career"];
  dataSource: MatTableDataSource<TDMS>;
  data: TDMS[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private tdmsService: TdmsserviceService) { 
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  getRecords() {
    this.tdmsService.findRecords(this.paginator.pageIndex, this.paginator.pageSize).subscribe(
      (response) => {
        console.log('response received')
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error('Request failed with error');
      },
      () => {
        console.error('Request completed');
      })
  }

}
