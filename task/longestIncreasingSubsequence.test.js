const lengthOfLIS = require('./longestIncreasingSubsequence')


test('Properly returns the longest increasing subsequence', () => {
    expect(lengthOfLIS([10,9,2,5,3,7,101,18])).toBe(4)
})

test('Test with an empty array', () => {
    expect(lengthOfLIS([])).toBe(0)
})

test('Test with an array of length 1', () => {
    expect(lengthOfLIS([5])).toBe(1)
})

test('Test with an array of length greater than 2500', () => {
    expect(lengthOfLIS(Array(2501).fill(1))).toBe('Please enter an array of length <= 2500')
})

test('Test with one or more elements in the input array greater than 10^4', () => {
    expect(lengthOfLIS(Array(25).fill(10001))).toBe('Error: invalid input')
})

test('Test with one or more elements in the input array less than 10^4', () => {
    expect(lengthOfLIS(Array(25).fill(-10001))).toBe('Error: invalid input')
})

test('Test with an array that is already sorted in increasing order', () => {
    expect(lengthOfLIS([1, 2, 3, 4, 5])).toBe(5)
})

test('Test with an array that is already sorted in decreasing order', () => {
    expect(lengthOfLIS([5, 4, 3, 2, 1])).toBe(1)
})

test('Test with an array that has repeated elements', () => {
    expect(lengthOfLIS([1, 2, 3, 2, 4, 3, 5])).toBe(5)
})

test('Test with an array that has negative elements', () => {
    expect(lengthOfLIS([-1, 2, 3, -2, 4, -3, 5])).toBe(5)
})

test('Test with an array that has only one element repeated multiple times', () => {
    expect(lengthOfLIS(Array(1000).fill(5))).toBe(1)
})

test('Test with an array that has multiple increasing subsequences of the same length', () => {
    expect(lengthOfLIS([1, 2, 4, 3, 5, 4, 6])).toBe(5)
})

test('Test with an array that has a mix of positive and negative values', () => {
    expect(lengthOfLIS([-1, 2, 6, 3, -4, 5, -2, 7, -3])).toBe(5)
})

test('Test with an array that has all elements equal to the minimum value allowed by the constraints (i.e., -10^4)', () => {
    expect(lengthOfLIS(Array(1000).fill(-10000))).toBe(1)
})

test('Test with an array that has all elements equal to the maximum value allowed by the constraints (i.e., 10^4)', () => {
    expect(lengthOfLIS(Array(1000).fill(10000))).toBe(1)
})

test('Test with an array of length 2500 that has alternating positive and negative values', () => {
    expect(lengthOfLIS(Array.from({ length: 2500 }, (_, i) => i % 2 === 0 ? i + 1 : -i))).toBe(1250)
})

test('Test with an array of length 2500 that has all elements equal', () => {
    expect(lengthOfLIS(Array(2500).fill(5))).toBe(1)
})

test('Test with an array of strings', () => {
    expect(lengthOfLIS(Array(12).fill('Hello'))).toBe('Error: invalid input')
})

test('Test with an array of floats', () => {
    expect(lengthOfLIS(Array(12).fill(1.1))).toBe('Error: invalid input')
})

test('Test with an array that has alternating integers and floats', () => {
    expect(lengthOfLIS(Array.from({ length: 12 }, (_, i) => i % 2 === 0 ? i + 1 : i + 0.1))).toBe('Error: invalid input')
})
