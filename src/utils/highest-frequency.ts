/* eslint-disable curly */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
export function mostFrequent(arr:Array<any>, n:any)
{

    // Sort the array
    arr.sort();

    // find the max frequency using linear
    // traversal
    let max_count = 1; let res = arr[0];
    let curr_count = 1;

    for (let i = 1; i < n; i++) {
        if (arr[i] == arr[i - 1])
            curr_count++;
        else
            curr_count = 1;

        if (curr_count > max_count) {
            max_count = curr_count;
            res = arr[i - 1];
        }
    }

    return res;
}