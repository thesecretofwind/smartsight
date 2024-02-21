export class TreeNode {
  constructor(
    public name: string,
    public level: number,
    public children: TreeNode[] = [],
  ) {}
}
