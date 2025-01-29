# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications: an infinite loop caused by incorrectly using the `useEffect` hook.

The `bug.js` file contains a component that attempts to increment a counter within the `useEffect` hook without specifying any dependencies. This leads to an infinite loop, as the state change triggers a re-render, which again triggers the `useEffect` hook, and so on.

The `bugSolution.js` file demonstrates the correct way to use the `useEffect` hook by specifying an empty dependency array `[]` to ensure that the effect runs only once after the initial render, or by adding the count variable as a dependency `[count]` to prevent infinite rerenders. 

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop in the browser's console or the browser crashing.
