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
}

module.exports = {
  MaxHeap
};

let heap1 = new MaxHeap();
heap1.array = [null, 100, 50, 27, 60];
heap1.siftUp(4);
console.log(heap1.array)