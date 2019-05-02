# ARRAY MODIFICATIONS

Files used to finish the task 4: task4/index.js

## STEP 1: Test removing a row functionality

  1. Try to remove first row, try to remove last row, try to remove some middle rows. Any thoughts?
  2. Think about solution to fix the janky problem we have now. What might be the reason behind that?

## STEP 2: Fix it

  1. There are two problems here:
    1.1. When removing the element of the structure, React then re-renders the app based on the keys. If the previous value doesn’t match the key, it re-renders the element
    1.2. We’re passing rowIdx and columnIdx props to Cell component. One of them gets changed when removing a row above. If only we could identify our cell position in the array differently… ?

  2. Hint: ShouldComponentUpdate won't help here, we need to do some changes in props we're passing.

  3. Once done, switch to the next exercise.

## WAY AHEAD OF THE GROUP?

1. When user clicks on a 'population' header, reorder countries in decreasing order. When clicking again, reorder them in increasing order. You only need one render of one component to achieve it. Do you know which one?