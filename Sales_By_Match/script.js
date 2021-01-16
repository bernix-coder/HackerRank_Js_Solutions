function sockMerchant(n, ar) {
    let pairCount = 0;
  for (let i = 0; i < n; i++){
    
      for(let k = i + 1; k < n; k++){
          if(ar[i] === ar[k]){
              pairCount +=1
              n -=2
              ar.splice(k,1)
              ar.splice(i,1)
              i --
         
          }
      }
  }
      return pairCount
  
  
  }

  //Demo Example

document.write(sockMerchant (4, [1,1,3,3]))
  
/**
 * Code explanation
 * 
 * We take the first element in the array (a)... Then loop through the remaining elements in the array(b)
 * If an element in b matches the first item (a),
 * 1. we increase the paircount by 1
 * 2. remove the element at  index i and k
 * substrate 2 from n. //This is to reduce the number of elements in the array
 * 
 */