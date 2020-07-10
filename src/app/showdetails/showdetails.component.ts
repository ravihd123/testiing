import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.scss']
})
export class ShowdetailsComponent implements OnInit {

  data : any;
  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('Userdata'));
    console.log(this.data)
  }

}
