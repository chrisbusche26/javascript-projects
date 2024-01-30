//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function ascend(arr) {
    arr.sort(function (a, b) {
    return a - b;
    });
    return arr;
};
console.log(ascend(nums2));

//Sort each array in decending order.
function descend(arr) {
    arr.sort(function (a, b) {
    return b - a;
    });
    return arr;
};
console.log(descend(nums2));