function InsertionSort(arr,dec) {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let j = i-1;
    while ((j >= 0) && (current < arr[j])) {
        arr[j+1] = arr[j];
        j--;
    }
    console.log(arr);
    arr[j+1] = current
       
 }

  if(dec === true){
    return arr.reverse() 
  }
  
  return arr
}


console.log(InsertionSort([2,8,6,7,9,0]));