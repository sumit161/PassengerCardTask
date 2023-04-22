import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-dashbord',
  templateUrl: './passenger-dashbord.component.html',
  styleUrls: ['./passenger-dashbord.component.scss'],
})
export class PassengerDashbordComponent implements OnInit {
  PassengerArray: Array<any> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children:  null ,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ] ,
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children:null ,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children:  [{ name: 'Jessica', age: 1 }] ,
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children:  null ,
    },
  ];

  newarray: Array<any> = this.PassengerArray;

  constructor() {}

  ngOnInit(): void {}
  callback(data: { param1: string; param2: number }) {
    // console.log(data.param1,data.param2,data.param3);
    this.PassengerArray.map((ele) => {
      if (ele.id === data.param2) {
        ele.fullname = data.param1;
      }
    });
  }

  callback1(id: any) {
    // console.log(id);
    // this.PassengerArray.map((ele) => {
    //   if (ele.id === id) {
    //     console.log(id);
    //   }
    // });
    //   console.log(this.PassengerArray.filter((ele) => ele.id !== id));
    //   this.newarray = this.PassengerArray;
    //  this.newarray.splice(0,0)
    //   console.log(this.PassengerArray);
    //   console.log(this.newarray);
    this.PassengerArray = this.PassengerArray.filter((ele) => ele.id !== id);
  }
}
