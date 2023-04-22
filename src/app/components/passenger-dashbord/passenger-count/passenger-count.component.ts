import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss'],
})
export class PassengerCountComponent implements OnInit {
  @Input() propertyBinding!: any;
  Ischekindate!: number;
  constructor() {}
  ngOnInit(): void {
    // console.log(this.propertyBinding);
   return this.propertyBinding.filter(
      (ele: { checkInDate: number }) => ele.checkInDate > 0
    ).length;

  }

}
