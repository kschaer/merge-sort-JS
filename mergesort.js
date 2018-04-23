function split(arr){
  let splitPoint = Math.ceil(arr.length/2);
  return [arr.slice(0,splitPoint), arr.slice(splitPoint, arr.length)];
}

function merge(a,b){
  let merged = [];
  // for(let i = 0; i < a.length; i++){
  //   for(let j = 0; j< b.length; j++){

  //   }
  // }

  let i = 0;
  let j = 0;
  //while(merged.length < a.length+b.length){
  while (i<a.length && j<b.length && merged.length <a.length+b.length){
    if(a[i] < b[j]){
      merged.push(a[i]);
      if( i <= a.length-1){
        i++;
      }
    }else{
      merged.push(b[j])
      if( j <= b.length-1){
        j++;
      }
      // if(j === b.length-1){
      //   merged.push(a[a.length-1]);
      // }
    }

  }

  while (i < a.length){
    merged.push(a[i]);
    i++;
  }
  while (j < b.length){
    merged.push(b[j]);
    j++;
  }

  return merged;
}
