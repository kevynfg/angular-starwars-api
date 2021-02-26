import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-container',
  templateUrl: './sw-container.component.html',
  styleUrls: ['./sw-container.component.scss'],
})
export class SwContainerComponent implements OnInit {
  @Input() swCharacter = 'Yoda';

  constructor() {}

  ngOnInit(): void {}
}
