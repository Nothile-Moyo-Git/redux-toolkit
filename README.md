# Nothile's Redux Toolkit App

This app is currently deployed to Github pages.

View app: https://nothile-moyo-git.github.io/redux-toolkit/

## Installation
This app is built in React, Redux Toolkit, React Redux, SCSS and Google Firestore for the backend.

Install packages: npm install

Reduce deficiencies: npm audit fix

Run app localy: npm run start

## Description
This App was designed to learn the fundamentals of redux and how they work with redux in order to work on legacy apps.
It was also used to experiment with gradients, layouts, & partials in SCSS.

It creates a store in the 'index.js' function in the store folder.
This acts as a global 'state' for my application.
On initial render, the app grabs the current cart from the database using the fetch API. It does this by dispatching 'fetchCartData'.

Once it grabs the cart, it displays it, and if the user updates the cart in any way, we update our redux store and we send a put request to the database.

This allows us to have a realtime redux store for our state and our database.

For our API calls, we used JavaScript promises with nested asynchronous functions (so we can use try catch in our redux slices).

Regarding styling, I created a 'Shared.scss' file in the styles folder.
This contains all my partial references. 
In branding you can see the gradients I've created. 
I use animations alongside manipulating the gradient for the gradient color.

## Further information
You can find out more about Redux here: 

https://redux.js.org/

https://redux-toolkit.js.org/

## Screenshot
![image](https://user-images.githubusercontent.com/15236959/178575324-f970dfa5-72fb-4d4c-aff9-3907b68a34c6.png)



