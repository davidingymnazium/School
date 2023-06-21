function BubbleSort(arr,dec) {
  //decrease - mode = 'dec'

  for (let i = arr.length - 1; i > 0 ; i--) {
    console.log(arr);
    for (let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]){
        [arr[j] , arr[j+1]] = [arr[j+1], arr[j]]
      }   
    }
  }

  if(dec === true){
    return arr.reverse() 
  }
    return arr
}

console.log(BubbleSort([8,9,6,7,1,0], true));

