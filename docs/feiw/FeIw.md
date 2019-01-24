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

## JS

### 节流和防抖

#### 节流

将多次执行变成每隔一段时间执行

```javascript
/**
 * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      回调函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
 *                                如果想忽略结尾函数的调用，传入{trailing: false}
 *                                两者不能共存，否则函数不能执行
 * @return {function}             返回客户调用函数
 */
const throttle = (func, wait, options) => {
  let context, args, result;
  let timeout = null;
  // 之前的时间戳
  let previous = 0;
  // 如果 options 没传则设为空对象
  if (!options) options = {};
  // 定时器回调函数
  let later = function() {
    // 如果设置了 leading，就将 previous 设为 0
    // 用于下面函数的第一个 if 判断
    previous = options.leading === false ? 0 : _.now();
    // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    // 获得当前时间戳
    let now = _.now();
    // 首次进入前者肯定为 true
    // 如果需要第一次不执行函数
    // 就将上次时间戳设为当前的
    // 这样在接下来计算 remaining 的值时会大于0
    if (!previous && options.leading === false) previous = now;
    // 计算剩余时间
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 如果当前调用已经大于上次调用时间 + wait
    // 或者用户手动调了时间
    // 如果设置了 trailing，只会进入这个条件
    // 如果没有设置 leading，那么第一次会进入这个条件
    // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
    // 其实还是会进入的，因为定时器的延时
    // 并不是准确的时间，很可能你设置了2秒
    // 但是他需要2.2秒才触发，这时候就会进入这个条件
    if (remaining <= 0 || remaining > wait) {
      // 如果存在定时器就清理掉否则会调用二次回调
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      // 判断是否设置了定时器和 trailing
      // 没有的话就开启一个定时器
      // 并且不能不能同时设置 leading 和 trailing
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};
```

#### 防抖

防抖动是将多次执行变为最后一次执行

```javascript
// 这个是用来获取当前时间戳的
function now() {
  return +new Date();
}
/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
function debounce(func, wait = 50, immediate = true) {
  let timer, context, args;

  // 延迟执行函数
  const later = () =>
    setTimeout(() => {
      // 延迟函数执行完毕，清空缓存的定时器序号
      timer = null;
      // 延迟执行的情况下，函数会在延迟函数中执行
      // 使用到之前缓存的参数和上下文
      if (!immediate) {
        func.apply(context, args);
        context = args = null;
      }
    }, wait);

  // 这里返回的函数是每次实际调用的函数
  return function(...params) {
    // 如果没有创建延迟执行函数（later），就创建一个
    if (!timer) {
      timer = later();
      // 如果是立即执行，调用函数
      // 否则缓存参数和调用上下文
      if (immediate) {
        func.apply(this, params);
      } else {
        context = this;
        args = params;
      }
      // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
      // 这样做延迟函数会重新计时
    } else {
      clearTimeout(timer);
      timer = later();
    }
  };
}
```

### 事件冒泡和捕获

#### 冒泡

