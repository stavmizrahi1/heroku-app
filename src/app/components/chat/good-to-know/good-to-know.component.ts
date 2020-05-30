import { Component, Input, OnInit } from '@angular/core';
import { KnowledgeItem } from '../models/knowledge-item.model';

@Component({
  selector: 'app-good-to-know',
  templateUrl: './good-to-know.component.html',
  styleUrls: ['./good-to-know.component.scss']
})
export class GoodToKnowComponent implements OnInit {
  @Input() goodToKnowList: KnowledgeItem[] = [];


  constructor(
  ) { }

  ngOnInit(): void {
  }

}
