var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a-b;
});


function binarySearch(arr, x)
{    
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (r >= l) {
         mid = l + Math.floor((r - l) / 2);
   
        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;
   
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            r = mid - 1;
              
        // Else the element can only be present
        // in right subarray
        else 
            l = mid + 1;
    }
   
    // We reach here when element is not
    // present in array
    return -1;
}
  
    arr = numbers;
    x = 2;
    n = arr.length;
    result = binarySearch(arr, x);
if(result == -1){
    console.log('404');
} else
console.log(`found (x = ${x}) in: ` + result);
console.log(numbers);
