import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-item',
  templateUrl: './sw-item.component.html',
  styleUrls: ['./sw-item.component.scss'],
})
export class SwItemComponent implements OnInit {
  @Input() swCharacter: any;

  constructor() {}

  ngOnInit() {}
}
