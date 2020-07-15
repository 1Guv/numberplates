import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-large-plate-display-input',
  templateUrl: './large-plate-display-input.component.html',
  styleUrls: ['./large-plate-display-input.component.scss']
})
export class LargePlateDisplayInputComponent implements OnInit {

  @Input() plate: string;

  constructor() { }

  ngOnInit() {
  }

}
