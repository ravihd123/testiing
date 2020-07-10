import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-showtabledata',
  templateUrl: './showtabledata.component.html',
  styleUrls: ['./showtabledata.component.scss']
})
export class ShowtabledataComponent implements OnInit {

  tableData: any;

  constructor(private tableSrv: GetdataService, private route: Router) { }

  ngOnInit(): void {
    this.tableSrv.getTableData().subscribe(
      (res) => {
        this.tableData = res;

      }
    )

  }

  showDetails(tabledata) {
    localStorage.setItem('Userdata', JSON.stringify(tabledata))
    this.route.navigateByUrl('userDetails')
  }

}
