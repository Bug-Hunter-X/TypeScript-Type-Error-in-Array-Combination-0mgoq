# TypeScript Type Error in Array Combination

This repository demonstrates a common TypeScript type error that occurs when combining arrays of inconsistent types. The `combine` function is designed to merge two number arrays, but if one of the arrays contains elements of a different type, a type error will occur.

## Bug Description

The bug arises because the TypeScript compiler enforces type safety.  When `arr2` contains a string ("6"), the compiler detects a type mismatch between the expected `number[]` and the actual `(number | string)[]`. This results in a compile-time error, preventing the code from executing.

## Solution

The solution involves ensuring type consistency across all arrays passed to the `combine` function. This can be achieved through type checking or by modifying the function to accommodate different types of arrays. The solution demonstrates a corrected function that uses type guards to handle the situation appropriately.