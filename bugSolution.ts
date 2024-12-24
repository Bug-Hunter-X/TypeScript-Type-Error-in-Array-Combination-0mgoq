function combine(arr1: number[], arr2: number[]): number[];
function combine(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[];
function combine(arr1: any[], arr2: any[]): any[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6"]; 

const combined = combine(arr1, arr2); // Now this works
console.log(combined); 