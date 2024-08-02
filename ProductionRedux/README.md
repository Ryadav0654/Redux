# React + Redux

> Documentation: `https://react-redux.js.org/tutorials/quick-start`

**Install Redux Toolkit and React Redux**

```cmd
npm install @reduxjs/toolkit react-redux
```

## Redux

### Create a Redux Store

```js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true,
});

export default store;
```

1. **Importing `configureStore`**:

   ```javascript
   import { configureStore } from "@reduxjs/toolkit";
   ```

   - This line imports the `configureStore` function from Redux Toolkit. `configureStore` is a utility that simplifies the process of setting up a Redux store with good defaults.

2. **Importing the `cartReducer`**:

   ```javascript
   import cartReducer from "../slice/cartSlice";
   ```

   - This line imports the `cartReducer` from the `cartSlice` file. This reducer is responsible for managing the state and actions related to the `cart` slice of the Redux state.

3. **Configuring the Store**:

   ```javascript
   const store = configureStore({
   ```

   - This line begins the configuration of the Redux store by calling `configureStore`.

4. **Setting Up the Reducers**:

   ```javascript
   reducer: {
       cart: cartReducer,
   },
   ```

   - The `reducer` property is an object where each key-value pair defines a slice of the state and the corresponding reducer that manages it.
   - `cart: cartReducer` specifies that the `cart` slice of the state will be managed by the `cartReducer`.

5. **Enabling Redux DevTools**:

   ```javascript
   devTools: true,
   ```

   - The `devTools` property is set to `true`, which enables the Redux DevTools extension. This extension provides a powerful set of tools for debugging and inspecting Redux state and actions.

6. **Creating the Store**:

   ```javascript
   });
   ```

   - This line completes the configuration and creation of the Redux store.

7. **Exporting the Store**:
   ```javascript
   export default store;
   ```
   - This line exports the configured store as the default export of the module. This allows the store to be imported and used in other parts of the application, typically in the main entry point where the Redux `Provider` component is set up.

### Provide the Redux Store to React:

``` jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/ >

    < /Provider>
  < /React.StrictMode>
)

```

### Create a Redux state Slice

```js
import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const getItemsSelector = createSelector(
  (state) => state.cart.items,
  (items) => items
);

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
```

1. **Imports**:

   ```javascript
   import { createSlice, createSelector } from "@reduxjs/toolkit";
   ```

   - This line imports the `createSlice` and `createSelector` functions from the Redux Toolkit library. `createSlice` helps create a slice of the Redux state, including actions and reducers. `createSelector` helps create memoized selectors.

2. **Creating the Slice**:

   ```javascript
   const cartSlice = createSlice({
     name: "cart",
     initialState: {
       items: [],
     },
     reducers: {
       addItem: (state, action) => {
         state.items.push(action.payload);
       },
     },
   });
   ```

   - `createSlice` is used to define a slice of the Redux state named "cart".
   - `name` specifies the name of the slice.
   - `initialState` defines the initial state for this slice, which includes an empty `items` array.
   - `reducers` is an object where each key is a function that defines how the state can be updated. Here, there is one reducer `addItem`, which takes the current `state` and an `action`, and adds the `action.payload` to the `items` array.

3. **Creating the Selector**:

   ```javascript
   export const getItemsSelector = createSelector(
     (state) => state.cart.items,
     (items) => items
   );
   ```

   - `createSelector` is used to create a memoized selector function.
   - The first argument is an input selector function that takes the entire Redux state and returns the `items` array from the `cart` slice.
   - The second argument is an output selector function that takes the `items` array and returns it. This pattern can be useful for more complex state selections where memoization improves performance.

4. **Exporting the Action Creator**:

   ```javascript
   export const { addItem } = cartSlice.actions;
   ```

   - This line exports the `addItem` action creator generated by `createSlice`. This action creator can be dispatched to update the state.

5. **Exporting the Reducer**:
   ```javascript
   export default cartSlice.reducer;
   ```
   - This line exports the reducer function generated by `createSlice` for the `cart` slice. This reducer will handle state updates based on the actions defined in the `reducers` object. This reducer should be added to the store configuration.


### Use Redux State and Actions in React Components:
- Now we can use the React Redux hooks to let React components interact with the Redux store. We can read data from the store with `useSelector`, and dispatch actions using `useDispatch`.