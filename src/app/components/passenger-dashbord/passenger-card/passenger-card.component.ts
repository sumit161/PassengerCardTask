import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss'],
})
export class PassengerCardComponent implements OnInit {
  @Input() propertyBinding!: any;
  input: boolean = false;
  newId!: number;
  getLocaleId!: number;
  id!: number;
  Isvisible: boolean =true;
  // template!:HTMLInputElement
  // @Output() coustomEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() coustomEvent = new EventEmitter<{
    param1: string;
    param2: number;
  }>();
  @Output() coustomEventRemove = new EventEmitter<number>();

  property: boolean = false;
  constructor() {}
  OnEdit(para: HTMLInputElement, id: number) {
    this.id = id;
    this.Isvisible = !this.Isvisible;
    this.property = !this.property;
    this.coustomEvent.emit({ param1: para.value, param2: id });
  }

  OnRemove(id: number) {
    this.coustomEventRemove.emit(id);
  }

  ngOnInit(): void {}
}
/*   flag:boolean=true
  flagOnclick(para: HTMLInputElement, id: number){
    this.flag=!this.flag
    console.log(this.flag)

  this.coustomEvent.emit({ param1: para.value, param2: id });

  } */
// console.log(this.propertyBinding);
