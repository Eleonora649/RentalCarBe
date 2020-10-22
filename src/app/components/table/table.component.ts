import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

import { MyTableConfig } from './table-config.component';

@Component({
  selector: 'app-mytable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class MyTableComponent { 
  @Input() tableConfig : MyTableConfig;
  @Input() data: any[];
  keys: string[];

  ngOnChanges() {
    this.keys = Object.keys(this.data[0]);
  }

  delete(data) {
    for(let i = 0; i < this.data.length; ++i){
      if (this.data[i] === data) {
          console.log(this.data[i]);
          this.data.splice(i,1);
      }
      console.log('delete: '+ this.data[i]);
    }
  }

  update(data) {
    for(let i = 0; i < this.data.length; ++i){
      if(this.data[i] === data) {
        console.log("modifica di: " + this.data[i]);
      }
    }
  }
}
