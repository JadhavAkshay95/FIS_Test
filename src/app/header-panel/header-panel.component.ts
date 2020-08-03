import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss']
})
export class HeaderPanelComponent implements OnInit {
  @Input() rejectedCount;@Input() selectedCount;
  constructor() { }

  ngOnInit(): void {
  }

}
