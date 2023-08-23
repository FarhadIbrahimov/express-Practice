# Notes

### Array Filter Function Explanation

The purpose of this document is to explain how the `filter` function works in JavaScript arrays, using a code example for illustration.

The `filter` function is a built-in method available for arrays in JavaScript. It allows you to create a new array containing elements that satisfy a specific condition specified by a provided function. This method is useful for selectively manipulating arrays without modifying the original data.

## Example Code

```javascript
const newPeople = people.filter(
  (person) => person.id !== Number(req.params.id)
);
```

In this line of code, people is the original array of person objects, and req.params.id is the ID of the person you want to exclude from the array.

## How the `filter` Function Works

**Breakdown of How the `filter` Function Works:**

- **Iterating through Elements**: The `filter` function iterates through each element of the input array (`people` in this case).

- **Provided Function**: For each element (person) in the array, the provided function is executed. This function takes the current element as an argument.

- **Condition Check**: Inside the provided function, the condition `person.id !== Number(req.params.id)` is evaluated. This condition compares the ID of the current person with the ID from the request parameters. If the condition evaluates to `true`, the person is included in the new array; if it evaluates to `false`, the person is excluded.

- **Creating a New Array**: The `filter` function creates a new array containing only the elements that satisfy the condition. Elements for which the condition is `true` are included in the new array; those for which it's `false` are excluded.

- **Final Result**: The new array, referred to as `newPeople`, contains all the person objects from the original array (`people`), except for the one with the specified ID (`req.params.id`).

In summary, the `filter` function is used to remove a person from the `people` array based on a condition. It creates a new array that contains all elements except the one with the specified ID. This is a powerful method for selectively manipulating arrays without modifying the original array.
