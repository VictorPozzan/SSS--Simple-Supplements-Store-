import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  learnMore: boolean = false;

  constructor(private scroller: ViewportScroller) {}

  ngOnInit() {}

  learnMoreAction() {
    this.learnMore = !this.learnMore;
    this.goScrollMore();
  }

  goScrollMore() {
    this.learnMore === true
      ? this.scroller.scrollToAnchor('targetMore')
      : this.scroller.scrollToAnchor('targetLess');
  }
}
