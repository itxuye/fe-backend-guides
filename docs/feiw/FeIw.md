# itxuye

## 基本算法

### 排序

#### 冒泡排序

- 每次比较相邻的两个数，如果后一个比前一个小，换位置

```javascript
const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
```

#### 快排

- 采用二分法，取出中间数，数组每次和中间数比较，小的放到左边，大的放到右边, 递归调用

```javascript
const quickSort = arr => {
  if (arr.length == 0) {
    return []; // 返回空数组
  }

  let cIndex = Math.floor(arr.length / 2);
  let c = arr.splice(cIndex, 1);
  let l = [];
  let r = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < c) {
      l.push(arr[i]);
    } else {
      r.push(arr[i]);
    }
  }
  return quickSort(l).concat(c, quickSort(r));
};
```

### 二叉树层序遍历

```javascript
const nodes = {
  node: 6,
  left: {
    node: 5,
    left: {
      node: 4
    },
    right: {
      node: 3
    }
  },
  right: {
    node: 2,
    right: {
      node: 1
    }
  }
};
```

#### 前序遍历

- 访问根结点；
- 前序遍历根结点的左子树；
- 前序遍历根结点的右子树。

```javascript
const result = []
const dfs (nodes)=> {
  if(nodes.node) {
    result.push(nodes.node)
    nodes.left && dfs(nodes.left)
    nodes.right && dfs(nodes.right)
  }
}
dfs(nodes)
```

#### 中序遍历

- 中序遍历根结点的左子树；
- 访问根结点；
- 中序遍历根结点的右子树；

```javascript
const result = []
const dfs (nodes)=> {
   if(nodes.node) {
    nodes.left && dfs(nodes.left)
    result.push(nodes.node)
    nodes.right && dfs(nodes.right)
  }
}
dfs(nodes)
```

#### 后序遍历

- 后序遍历根结点的左子树；
- 后序遍历根结点的右子树；
- 访问根结点。

```javascript
const result = []
const dfs (nodes)=> {
   if(nodes.node) {
    nodes.left && dfs(nodes.left)
    nodes.right && dfs(nodes.right)
    result.push(nodes.node)
  }
}
dfs(nodes)
```

#### 广度优先遍历

广度优先遍历二叉树(层序遍历)是用队列来实现的，从二叉树的第一层（根结点）开始，自上至下逐层遍历；在同一层中，按照从左到右的顺序对结点逐一访问。

按照从根结点至叶结点、从左子树至右子树的次序访问二叉树的结点。步骤：

- 初始化一个队列，并把根结点入列队；
- 当队列为非空时，循环执行步骤 3 到 4，否则执行结束；
- 出队列取得一个结点，访问该结点；
- 若该结点的左子树为非空，则将该结点的左子树入队列，若该结点的右子树为非空，则将该结点的右子树入队列；

```javascript
const result = [];
const queue = [nodes];
const bfs = count => {
  count = count || 0;
  if (queue[count]) {
    result.push(queue[count].node);
    let left = queue[count].left;
    let right = queue[count].right;
    if (left) {
      queue.push(left);
    }
    if (right) {
      queue.push(right);
    }
    bfs(++count);
  }
};
```

### 二叉树的最大深度

通过不断地递归得到子树高度，然后左右子树比较返回更大的那一个

```javascript
const maxDepth = root => {
  if (root === null) {
    //注意等号
    return 0;
  } else {
    let leftDepth = maxDepth(root.left),
      rightDepth = maxDepth(root.right);

    let childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;

    return childDepth + 1; //根节点不为空高度至少为1
  }
};
```
