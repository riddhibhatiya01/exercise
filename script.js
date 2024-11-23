// remove duplicate values from the array.

/*
Time complexity : O(n^2)
Space complexity : O(n)
*/

let array = [1,2,2,3,6,6]
let unique = []
let uniqueLength = 0
for(let i = 0 ; i < array.length ; i++)
{

  let found = false
  for(let j = 0 ; j < uniqueLength ; j++)
  {
    if(array[i] === unique[j])
    {
        found = true
        break
    } 
  }
  if(!found)
  {
    unique[uniqueLength] = array[i]
    uniqueLength++                          

  }
}
  /*
    let array = [1,2,2,3,6,6]
    let unique = []
    let uniqueLength = 0

    Dry Run :
    loop 1 : (outer)
        step 1 : i = 0 ;
        step 2 : 0 < 6 true
        step 3 : 
            found = false
            loop 1 : (inner) 
                step 1 : j = 0
                step 2 : 0 < 0 false
                    exit
            
            found = false => !false = true  
            unique[0] = 1 
            uniqueLength ++ => 1
        step 4 : i++ => 1 
    
    loop 2 : (outer)
        step 2 :  1 < 6 true 
        step 3 :  
            found = false
            LOOP 1  (inner)
                step 1 : j = 0 
                step 2 :  0 < 1 true
                step 3 : 
                    2 === 1 false
                
                step 4 : j++ => 1

            loop 2 :  (inner)
                step 2 :  1 < 1 false
                    
            found = false => !false = true  
            unique[1] = 2 
            uniqueLength ++ => 2
        step 4 : i++ => 2    
                      
    loop 3 : (outer)
        step 2 : 2 < 6 true
        step 3 : 
            found = false
            loop 1 : (inner) 
                step 1 : j = 0
                step 2 : 0 < 2 true
                step 3 : 
                    2 === 1 false   
                step 4 : j++ = 1
            loop 2 : (inner)
                step 2 : 1 < 2
                step 3 : 
                    2 ===  2 true (array[2] == unique[1])    
                    found = true 
                    break (exit the loop)

            
            found = true => !true = false  
        step 4 : i++ => 3   
    
    loop 4 : (outer)
        step 2 :  3 < 6 true 
        step 3 :  
            found = false
            LOOP 1  (inner)
                step 1 : j = 0 
                step 2 :  0 < 3 true
                step 3 : 
                    2 === 3 false
                
                step 4 : j++ => 1

            loop 2 :  (inner)
                step 2 :  1 < 1 false
                    
            found = false => !false = true  
            unique[2] = 3
            uniqueLength ++ => 3
        step 4 : i++ => 4
        
    loop 5 : (outer)
        step 2 :  4 < 6 true 
        step 3 :  
            found = false
            LOOP 1  (inner)
                step 1 : j = 0 
                step 2 :  0 < 6 true
                step 3 : 
                    3 === 6 false
                
                step 4 : j++ => 3

            loop 2 :  (inner)
                step 2 :  1 < 1 false
                    
            found = false => !false = true  
            unique[3] = 6 
            uniqueLength ++ => 6
        step 4 : i++ => 5    
                      
    loop 6 : (outer)
        step 2 : 5 < 6 true
        step 3 : 
            found = false
            loop 1 : (inner) 
                step 1 : j = 0
                step 2 : 0 < 2 true
                step 3 : 
                    2 === 1 false   
                step 4 : j++ = 1
            loop 2 : (inner)
                step 2 : 1 < 2
                step 3 : 
                    6 ===  6 true    
                    found = true 
                    break (exit the loop)

            
            found = true => !true = false  
        step 4 : i++ => 6  

     loop 7 : (outer)
        step 2 : 6 < 6 flase 
        exit the loop
        
*/




for(let i =  0 ; i < unique.length ; i++)
{
    console.log(unique[i])
}



 

