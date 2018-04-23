let testArr = [4,3,2,1];
let splitTestArr = [[4],[3],[2],[1]];
let sortTestArr = [1,2,3,4];

let test2Arr = [5,4,3,2,1];
let split2 = [[5,4,3],[2,1]];


let merge1 = [1,3,5,7,9];
let merge2 = [2,4,6,10];

let merge3 = [1,2,3,4,5,6,7,9,10];

let test1 = [9, 10, 82];
let test2 = [3, 27, 38, 43];
let test12 = [9, 10, 82, 3, 27, 38, 43];
let expect12 = [3, 9, 10, 27, 38, 43, 82];

// let test1 = [1,3,5];
// let test2 = [7,8];
// let expect12 = [1,3,5,7,8];

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split(testArr)).toEqual([[4,3],[2,1]]);
  });
  it('is able to split an odd-length array into two halves', function() {
    // your code here
    expect(split(test2Arr)).toEqual(split2);
  });
});

describe('merge sorted arrays function', function(){
  it('is able to merge two sorted arrays of equal length', function(){
    expect(merge(merge1,merge2)).toEqual(merge3);

  });
  it('is able to merge two sorted arrays of different length', function(){
    expect(merge(test1, test2)).toEqual(expect12);
   // expect(merge(merge1,merge2)).toEqual(merge3);
  })
})

describe('can split and merge arrays to sort them', function(){
  it('does not screw up an already sorted array', function(){
    expect(mergeSort(merge1)).toEqual(merge1);
  })

  it('properly sourts our array', function(){
    expect(mergeSort(test12)).toEqual(expect12);
  })
})
