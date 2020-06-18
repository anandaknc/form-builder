import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screen-details',
  templateUrl: './screen-details.component.html',
  styleUrls: ['./screen-details.component.scss']
})
export class ScreenDetailsComponent implements OnInit {
  @Input() model: any ;
  constructor() { }

  ngOnInit(): void {
  }

}
