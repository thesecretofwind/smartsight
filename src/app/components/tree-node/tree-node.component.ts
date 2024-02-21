import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'src/app/types/TreeNode';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.less']
})
export class TreeNodeComponent implements OnInit {
  @Input() node!: TreeNode

  constructor() { }

  ngOnInit(): void {
  }

}
