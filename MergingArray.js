// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

// The resulting array is sorted in ascending order.

// Any duplicate values are removed, so each integer appears only once.

// If both input arrays are empty, return an empty array.

// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.


//solution
function mergeArrays(arr1, arr2) {
  
  return [...new Set (arr1.concat(arr2))].sort((x,y)=> x-y)
  
}

console.log(mergeArrays([14,2,4,5,6],[1,3,6,5,33,2]))
