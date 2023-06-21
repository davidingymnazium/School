
function SelectionSort(arr, dec) {
  for (let i = 0; i < arr.length; i++) {
      console.log(arr);   
      let extreme = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[extreme]) {
          extreme = j
        }
      }

      if (extreme != i) {
          [arr[i] , arr[extreme]] = [arr[extreme] , arr[i]] 
        }
  }

  if(dec === true){
    return arr.reverse() 
  }

  return arr
}

console.log(SelectionSort([8,9,6,7,1], true));
