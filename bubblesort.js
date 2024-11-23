const bubbleSort = (array) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);               

  /*
    step 1 : let swapped 
    loop 1 : (outer)
        step 2 : (i) swapped = false
        step 2 : (ii)
                loop 1 : 
                    step 1 : i = 0 
                    step 2 : 0 < 5 - 1 => 4 true
                    step 3 : 
                        if(29 > 10) true 
                        array[0] = 10 
                        array[1] = 29
                        swapped = true
                    step 4 : i++   = 1 
                    [10, 29, 14, 37, 14]

                loop 2 :     
                    step 2 : 1 < 5 - 1 => 4 true
                    step 3 : 
                        if(29 > 14) true 
                        array[1] = 14 
                        array[2] = 29
                        swapped = true
                    step 4 : i++   = 2  
                     [10, 14, 29, 37, 14]
                
                loop 3 :     
                    step 2 : 2 < 5 - 1 => 4 true
                    step 3 : 
                        if(29 > 37) false 
                    step 4 : i++   = 3
                    [10, 14, 29, 37, 14]
                
                loop 4 
                    step 2 : 3 < 5 - 1 = 4 true
                    step 3 : 
                        if(37 > 14)     true
                        array[3] = 14
                        array[4] = 37
                        swapped = true
                    step 4 : i++ => 4
                    [10, 14, 29, 14, 37]
                
                loop 5 :
                    step 2 : 4 < 5-1 => 4 < 4 false
                    exit from for loop

                    step 3 : condition (outer loop)  
                    while(true) swapped = true
                    
                    again from loop1
                loop 1 : 
                    step 1 : i = 0 
                    step 2 : 0 < 5 - 1 => 4 true
                    step 3 : 
                        if(10 > 14) false
                        swapped = false
                    step 4 : i++ = 1 
                    [10, 14, 29, 14, 37]
                 loop 2 :     
                    step 2 : 1 < 5 - 1 => 4 true
                    step 3 : 
                        if(14 > 29) false
                        swapped = false
                    step 4 : i++   = 2  
                     [10, 14, 29, 14, 37]
                
                loop 3 :     
                    step 2 : 2 < 5 - 1 => 4 true
                    step 3 : 
                        if(29 > 14) true 
                        array[2] = 14
                        array[3] = 29
                        swapped = true
                    step 4 : i++   = 3
                    [10, 14, 14, 29, 37]
                
                loop 4 
                    step 2 : 3 < 5 - 1 = 4 true
                    step 3 : 
                        if(29 > 37) false
                        swapped = false
                    step 4 : i++ => 4
                    [10, 14, 14, 29, 37]
                
                loop 5 :
                    step 2 : 4 < 5-1 => 4 < 4 false
                    exit from for loop

                    step 3 : condition (outer loop)  
                    while(true) swapped = true
 
                

                    
    
  */
  return array;
};

console.log(bubbleSort([29, 10, 14, 37, 14]));