
// dec (optional) : mode decreasing
function QuickSort(arr, dec) {
  let amount = arr.length;

  if (amount <= 1) {
    return arr;
  }

  let pivot = arr[0]; 
  let left = []; // left part of an array
  let right = []; // right part of an array
  
  for (let i = 1; i < amount; i++) {
    if(arr[i] < pivot) 
    { left.push(arr[i]) }
    else { right.push(arr[i]) }
  }
   //console.log(`arr: ${arr} // For pivot = ${pivot} : \n left = [${left}] \n right = [${right}] \n`);
  // choose mode
  console.log(arr);
  if(dec === true){
    return [...QuickSort(left), pivot, ...QuickSort(right)].reverse() 
  }
  
  return [...QuickSort(left), pivot, ...QuickSort(right)]
}

console.log(QuickSort([1,3,2,9,5,8,7,6,0],true));

