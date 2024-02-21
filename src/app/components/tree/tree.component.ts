// import { ArrayDataSource } from '@angular/cdk/collections';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree'
import {  Component } from '@angular/core';

// import { TreeNode } from 'src/app/types/TreeNode';
interface ExampleFlatNode {
  disabled: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

const TREE_DATA: ExampleFlatNode[] = [
  {
    name: 'Fruit',
    disabled: true,
    level: 0,
  },
  {
    name: 'Apple',
    disabled: false,
    level: 1,
  },
  {
    name: 'Banana',
    disabled: false,
    level: 1,
  },
  {
    name: 'Fruit loops',
    disabled: false,
    level: 1,
  },
  {
    name: 'Vegetables',
    disabled: true,
    level: 0,
  },
  {
    name: 'Green',
    disabled: true,
    level: 1,
  },
  {
    name: 'Broccoli',
    disabled: false,
    level: 2,
  },
  {
    name: 'Brussels sprouts',
    disabled: false,
    level: 2,
  },
  {
    name: 'Orange',
    disabled: true,
    level: 1,
  },
  {
    name: 'Pumpkins',
    disabled: false,
    level: 2,
  },
  {
    name: 'Carrots',
    disabled: false,
    level: 2,
  },
];



@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less'],
})
export class TreeComponent {

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.disabled
  );

  dataSource = new ArrayDataSource<ExampleFlatNode>(TREE_DATA);
  hasChild = (_:number, node: ExampleFlatNode) => node.disabled;

  constructor() {}
  getParentNode(node: ExampleFlatNode) {
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: ExampleFlatNode) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }


}
