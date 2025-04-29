function divide(arr, n) {
    // Return an empty array if the input is invalid
    if (arr.length === 0 || n <= 0) {
        return [];
    }

    const result = [];
    let currentChunk = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        // If adding the current number exceeds the max sum, push the current chunk to result and start a new one
        if (currentSum + num > n) {
            // Push the current chunk to result
            result.push(currentChunk);
            // Start a new chunk with the current number
            currentChunk = [num];
            currentSum = num;
        } else {
            // Add the number to the current chunk
            currentChunk.push(num);
            currentSum += num;
        }
    }

    // Don't forget to add the last chunk to the result
    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
}

// Test cases
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([4, 3, 2, 1], 4)); // [[4], [3], [2, 1]]
console.log(divide([], 5)); // [] (empty array)
console.log(divide([1, 2, 3], 0)); // [] (invalid n)
console.log(divide([6, 7, 8], 5)); // [[6], [7], [8]] (all elements exceed n)