import { Component, Input } from '@angular/core';
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
}
