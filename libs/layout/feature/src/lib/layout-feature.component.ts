import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'omnia-layout-feature',
  templateUrl: './layout-feature.component.html',
  styleUrls: ['./layout-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
