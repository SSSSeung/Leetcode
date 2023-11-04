// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sumNumbers(root: TreeNode | null): number {
  if (!root) return 0;

  const queue = [{ node: root, value: "0" }];
  let idx = 0;
  let ans = 0;

  while (idx < queue.length) {
    const { node, value } = queue[idx];

    if (node.left || node.right) {
      if (node.left) {
        queue.push({ node: node.left, value: value + node.val });
      }
      if (node.right) {
        queue.push({ node: node.right, value: value + node.val });
      }
    } else {
      ans += parseInt(value + node.val);
    }

    ++idx;
  }
  return ans;
}
