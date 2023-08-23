# Notes

## Table of Contents

- [Array Filter Function Explanation](#array-filter-function-explanation)
- [Exploring Routes in the Model-View-Controller (MVC) Architecture](#exploring-routes-in-the-model-view-controller-mvc-architecture)
- [Destructuring Explanation](#Destructuring)

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

# Exploring Routes in the Model-View-Controller (MVC) Architecture

In the context of the Model-View-Controller (MVC) architecture, routes play a significant role in managing incoming requests and directing them to specific parts of the application for processing. Let's delve into the concept of routes within MVC.

## Model-View-Controller (MVC) Overview

MVC is a software architectural pattern that separates an application into three interconnected components:

1. **Model**: Represents the application's data and business logic. It encapsulates the rules and operations related to data manipulation.

2. **View**: Represents the user interface and presents data to users. It receives data from the model and formats it for display.

3. **Controller**: Acts as an intermediary between the model and the view. It receives user input from the view, interacts with the model to process input, and updates the view.

## Routes in the MVC Architecture

Routes define how incoming requests are handled within an MVC application. They establish a mapping between URLs (Uniform Resource Locators) and specific controller actions. Here's how routes function in MVC:

1. **Request**: A user makes a request by entering a URL in a browser or clicking a link. The request is sent to the application's server.

2. **Routing**: The routing system examines the URL to determine which controller action should handle the request. This mapping is defined in a route configuration.

3. **Controller Action**: The controller action is a function in the controller corresponding to the requested URL. It processes the request, interacts with the model, and retrieves or updates data.

4. **Model Interaction**: The controller action interacts with the model to fetch data or perform business logic operations.

5. **View Rendering**: Once the controller action processes the request and obtains data, it may pass the data to a specific view for rendering. The view displays the data suitably.

6. **Response**: The rendered view is sent as a response to the user's browser for display.

## Advantages of Using Routes in MVC

1. **Organization**: Routes provide a structured way to handle different URLs and map them to specific actions within the application.

2. **Separation of Concerns**: Routes maintain a clear separation of concerns between components. Each controller action has specific tasks, fostering modular development.

3. **Flexibility**: Developers can define URLs that correspond to various controller actions, enabling a dynamic user experience.

4. **Maintenance**: Route configuration allows changes to URLs or the application's structure without affecting other code.

In summary, routes in the MVC architecture define the flow of incoming requests through the application, ensuring each URL corresponds to the right controller action for data processing and rendering. This separation and organization contribute to maintainable and efficient application development.

# Destructuring

Destructuring is a feature in JavaScript that allows you to extract values from objects or arrays and assign them to variables in a concise and convenient way. It's commonly used to access specific properties of objects or elements of arrays without having to write repetitive code.

In provided code snippet, we're using destructuring to import functions from the "../controllers/people" module.

```javascript
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");
```

In this line of code, we're importing specific functions from the "../controllers/people" module and assigning them to variables with the same names (getPeople, createPerson, etc.). This process simplifies the way we access and use these functions in our code, promoting better readability and reducing redundancy.
