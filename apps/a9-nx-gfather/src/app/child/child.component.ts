import { Component, OnInit } from '@angular/core';
import { ParentComponentBase } from '../parent/parent.component';

@Component({
  selector: 'a9-nx-gfather-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent extends ParentComponentBase {}
