// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
  if(idx === undefined) return true;
  let parentVal = array[idx]

  let leftChildVal = array[2 * idx]
  let rightChildVal = array[2 * idx + 1 ]
  let largerChildIdx;
  
  if (leftChildVal === undefined) leftChildVal = -Infinity
  if (rightChildVal === undefined) rightChildVal = -Infinity
  
  // if (parentVal > leftChildVal && parentVal > rightChildVal) return true;

  if (leftChildVal > rightChildVal) {
    largerChildIdx = leftChildVal
    // array[getLeftChild(idx)] = parentVal
    // array[idx] = leftChildVal
  }
  else {
    largerChildIdx = rightChildVal
  } 

  let largerVal = array[largerChildIdx]

  array[largerChildIdx] = parentVal
  array[idx] = largerVal

  return isMaxHeap(array, leftChildVal) && isMaxHeap(array, rightChildVal)

}


module.exports = {
  isMaxHeap
};
