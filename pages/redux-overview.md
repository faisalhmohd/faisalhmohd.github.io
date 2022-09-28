---
title: How does Redux Work?
---

# {% $markdoc.frontmatter.title %}

*Published at 19th March 2019*


> Disclaimer
> - This article skims through a slimmed down implementation of Redux to get an understanding of the fundamentals (minus sanity checks and other details mentioned below).
> - This article does not promote the use of Redux. Before implementing Redux in your application, you may want to go through [the creators note](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) and [official docs](https://redux.js.org/faq/general#when-should-i-use-redux)

Before we dive deep, let's first grasp what problem does Redux solve for your front-end application.

> "A predictable state container for JavaScript apps."

Redux is used to store the application state. Which means, you can store a particular variable in the Redux State which then can be accessible in different parts of your application (similar to a global variable).

The approach that Redux takes is using the publish/subscribe (PubSub) pattern (a form of [Observer Pattern](https://github.com/millermedeiros/js-signals/wiki/Comparison-between-different-Observer-Pattern-implementations#publish--subscribe-pubsub)) which is also very similar to the event driven architecture used in JavaScript.

Events of types are dispatched/published (either by User action or by Browser action) and certain areas of the app subscribe to these events for post processing.

## Primary Flow

For the entire application, there is a single source of truth (called store).

```javascript
const store = {};  // Stores the entire application state
```

The `store` is read-only. To mutate the state, one has to dispatch an event.

A dispatch event (aka `action`) is an object that only contains the type of event along with its payload.

```javascript
const action = {
  type: 'MY_EVENT_TYPE',
  payload: myPayload
};

dispatch(action);
```

Once dispatched, the application state is mutated via a `reducer`.

```javascript
function reducer(initialState, action) {
  switch(action) {
    case 'MY_EVENT_TYPE':
      return {
        ...initialState, action.payload
      }
  }
}
```

Finally, a `listener` is a function that subscribes to changes when the `store` is mutated.

```javascript
function onStoreChange() {
 // Things to execute
}
```

To summarise, here is the flow

[![Redux Diagram.png](https://svbtleusercontent.com/nwEedwRVYEbTccY4Ni38Rd0xspap_small.png)](https://svbtleusercontent.com/nwEedwRVYEbTccY4Ni38Rd0xspap.png)

Let's dive into how to achieve such a flow.

## Implementation of Redux Fundamentals

We first start by creating the store wrapper. This method will eventually entail majority of the logic inside Redux.

```javascript
function createStore() {
  // Creating Store logic goes here
}
```

Let's store the Application State in a variable called `currentState`. We can pass in `initialState` in case we want to have it pre-loaded.

```diff-javascript
-  function createStore() {
-    // Create Store logic goes here
+  function createStore(intiialState) {
+    let currentState = initialState;
  }

```

Allow the retrieval of `currentState`.

```diff-javascript
  function createStore(intiialState) {
    let currentState = initialState;
+
+    function getState() {
+      return currentState;
+    }
+
+    return {
+      getState
+    };
  }
+
+  const store = createStore();
+  console.log(store.getState()); // OUTPUT: undefined
```

Lets create a `reducer` that would eventually modify the `currentState`.

```diff-javascript
...

+  function reducer(state = { brand: 'Toyota', model: 'Corolla' }, action) {
+    switch(action.type) {
+    case 'UPDATE_BRAND':
+      return { ...state, brand: action.payload };
+    case 'UPDATE_MODEL':
+      return { ...state, model: action.payload };
+    default:
+      return state;
+    }
+  }
+
   const store = createStore();
...
```

Here we set the `initialState` to be a plain object with brand and model set. There are 2 action types ('UPDATE_BRAND' and 'UPDATE_MODEL') that allow mutation of the existing `currentState`.

Plugging this reducer into the `createStore` method such that it can mutate the `currentState`.

```diff-javascript
-  function createStore(initialState) {
+  function createStore(reducer, initialState) {
     let currentState = initialState;

     function getState() {
       return currentState;
     }

+    function dispatch(action) {
+      currentState = reducer(currentState, action);
+      return action;
+    }
+
     return {
       getState,
+      dispatch
     };
@@ -21,5 +26,8 @@ function reducer(state = { brand: 'Toyota', model: 'Corolla' }, action) {
   }
 }

-  const store = createStore();
+  const store = createStore(reducer);
   console.log(store.getState()); // undefined
+
+  store.dispatch({ type: 'UPDATE_MODEL', payload: 'Land Cruiser' });
+  console.log(store.getState()); // { brand: 'Toyota', model: 'Land Cruiser' }
```

When we `dispatch`, the `store` mutates the existing application state and stores it within `currentState`. The resultant can be seen when we do a `store.getState()`.

Now that we know how to mutate the existing state, lets try to subscribe to these changes so that we can post process.

Before we go ahead with the subscription logic, lets first create few listeners that would eventually be executed.

```diff-javascript
...

   console.log(store.getState()); // { brand: 'Toyota', model: 'Land Cruiser' }
+
+  const myListener = () => {
+    console.log(`My Listener is fired ${JSON.stringify(store.getState())}`);
+  };
```
Add the `subscribe` method on `createStore` that would register/unregister `listeners`.

```diff-javascript
   function createStore(reducer, intiialState) {
     let currentState = initialState;
+    let listeners = [];

     function getState() {
       return currentState;
     }

+    function subscribe(listener) {
+      listeners.push(listener);
+
+      return function unSubscribe() {
+        const index = listeners.indexOf(listener);
+        listeners.splice(index, 1);
+      }
+    }
+
     function dispatch(action) {
       currentState = reducer(currentState, action);
       return action;
@@ -12,7 +22,8 @@ function createStore(reducer, intiialState) {

     return {
       getState,
-      dispatch
+      dispatch,
+      subscribe
     };
   }

@@ -36,3 +47,4 @@ console.log(store.getState()); // { brand: 'Toyota', model: 'Land Cruiser' }
   const myListener = () => {
     console.log(`My Listener is fired ${JSON.stringify(store.getState())}`);
   };
+  store.subscribe(myListener);
```
Now that our `createStore` has a subscribe method, we can add `listeners` to the store. But they currently never get executed.

Lets allow `dispatch` to execute listeners.

```diff-javascript
...

   function subscribe(listener) {
+    if(typeof listener !== 'function') {
+      throw new Error('A listener can only be a function');
+    }
+
     listeners.push(listener);

     return function unSubscribe() {
      const index = listeners.indexOf(listener);
       listeners.splice(index, 1);
     }
   }

   function dispatch(action) {
     currentState = reducer(currentState, action);
+
+    listeners.forEach(listener => listener());
+
     return action;
   }

...
```

For every dispatch, the listeners are fired so that they can post execute. This is a very important section since this adds flexibility to tie it with your front-end framework/library. You may use this to mount/unmount or re-render your components or for other endless possibilities.

This concludes that we finally have our own implementation of Redux which may be used at your will.

Full code is available in [here](https://repl.it/@faisalhmohd/slim-redux).

## Summary

1. We create a `createStore` method that `getState`, `dispatch` and `subscribe` a single `reducer`.
2. We learn that `currentState` within `createStore` cannot be mutated directly, a dispatch is required to to mutate it.
3. The `currentState` acts as a source of truth for the entire application.
4. We learn how to achieve a simple Pub/Sub pattern =)

## Diving Deeper

The existing `createStore` method can be seen [here](https://github.com/reduxjs/redux/blob/master/src/createStore.js) where it has many sanity checks, allows you to add multiple `reducer`, replacing the existing `reducer` as well as add `observable`'s. However it still follows the above fundamental details as per today.

Hope this article helped you understand the fundamentals of how Redux works.

Feel free to ping me for feedback & comments.