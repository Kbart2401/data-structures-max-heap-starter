class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    let parentIdx = Math.floor((idx) / 2)
    return parentIdx
  }

  getLeftChild(idx) {
    return 2 * idx;
  }

  getRightChild(idx) {
    return 2 * idx + 1;
  }

  siftUp(idx) {
    if(idx === 1) return;
    let parent = this.array[this.getParent(idx)]
    if(this.array[idx] > parent) {
      this.array[this.getParent(idx)] = this.array[idx]
      this.array[idx] = parent;

      this.siftUp(this.getParent(idx))
    }
  }

  insert(val) {
    
    this.array.push(val)
    this.siftUp(this.array.length-1)
  }

  siftDown(idx) {
    let parentVal = this.array[idx]
    let leftChildVal = this.array[this.getLeftChild(idx)]
    let rightChildVal = this.array[this.getRightChild(idx)]
    let largerChildIdx;
    
    if (leftChildVal === undefined) leftChildVal = -Infinity
    if (rightChildVal === undefined) rightChildVal = -Infinity
    
    if (parentVal > leftChildVal && parentVal > rightChildVal) return;

    if (leftChildVal > rightChildVal) {
      largerChildIdx = this.getLeftChild(idx)
      // this.array[this.getLeftChild(idx)] = parentVal
      // this.array[idx] = leftChildVal
    }
    else {
      largerChildIdx = this.getRightChild(idx)
    } 
    let largerVal = this.array[largerChildIdx]
    this.array[largerChildIdx] = parentVal
    this.array[idx] = largerVal

    this.siftDown(largerChildIdx)
    
  }

}

module.exports = {
  MaxHeap
};

let heap1 = new MaxHeap();
// heap1.array = [null, 100, 50, 27, 60];
// heap1.siftUp(4);
// console.log(heap1.array)

// heap1.insert(42);
// heap1.insert(32);
// heap1.insert(24);
// heap1.insert(100);
// console.log(heap1)