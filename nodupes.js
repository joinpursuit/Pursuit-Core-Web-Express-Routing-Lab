function rm_dupe(arr){
    const dupes = {}
    const out = []
    for(i = 0; i < arr.length; i ++){
        key = arr[i]
        if(!dupes[key]){
            out.push(key)
        }
        dupes[key] = true;
    }
    return out;
}

const arr1 = [1,2,3,4,5,6,6,6,7,8]

console.log(rm_dupe(arr1))

//binary search takes a sorted array as an input
function binary_search(arr, tar){
    let start = 0;
    let end = arr.length - 1;
    return binary_search_recursive(arr,tar,start,end)
    
    
}

function binary_search_recursive(arr,tar,start,end){
    if (end = start <= 1){
        if(arr[start] === tar){
            return start
        }else{
            if (end-start === 1 && arr[end] === tar){
                return end
            }
        }
        return -1;
    }
    
    const middle = math.floor((end + start)/2)
    if (arr[middle] >= tar){
        return binary_search_recursive(arr,tar,start,middle)
    }
    return binary_search_recursive(arr,tar,start,middle);
}
let arr = [1, 3, 5, 7, 8, 9]; 

let y = 4;


console.log("this is binary search recursive",binary_search(arr,y))




// function frontback(arr){
    //     let string = arr.split('')
    //     let first = arr[0]
//     let last = arr[arr.length-1]
//     string[0] = last;
//     string[string.length-1] = first;
//     return string.join('')
// }

// let string1 = "jay"

// console.log(frontback(string1));








let iterativeFunction = function (arr, x) { 
   
    let start=0, end=arr.length-1; 
          
    // Iterate while start not meets end 
    while (start<=end){ 
  
        // Find the mid index 
        let mid=Math.floor((start + end)/2); 
   
        // If element is present at mid, return True 
        if (arr[mid]===x) return true; 
  
        // Else look in left or right half accordingly 
        else if (arr[mid] < x)  
             start = mid + 1; 
        else
             end = mid - 1; 
    } 
   
    return false; 
} 

console.log(iterativeFunction(arr,x))   

let x = 5; 

x = 6;

console.log(iterativeFunction(arr,x))


// x = 6; 
   
// if (iterativeFunction(arr, x, 0, arr.length-1)) 
//     document.write("Element found!<br>"); 
// else document.write("Element not found!<br>"); 