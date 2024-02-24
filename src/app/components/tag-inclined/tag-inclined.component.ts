import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tag-inclined',
  templateUrl: './tag-inclined.component.html',
  styleUrls: ['./tag-inclined.component.css'],
})
export class TagInclinedComponent implements OnInit {
  @Input() tagName = '';

  constructor() {}

  ngOnInit() {}
}
