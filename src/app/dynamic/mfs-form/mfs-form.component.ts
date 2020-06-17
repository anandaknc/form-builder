import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-mfs-form',
  templateUrl: './mfs-form.component.html',
  styleUrls: ['./mfs-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MfsFormComponent implements OnInit {

  private formMetadata;

  constructor() { }


  ngOnInit(): void {
  }

}
