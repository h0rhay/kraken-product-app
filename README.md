<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

# Octopus Frontend product app

Thanks for sending this through. I had fun completing the challenge. 
The app renders an intro screen where you can click the product tile in question and see the supplied design.
I wanted to explore the dynamic routing with Next JS and felt this behaviour more closely aligns with a 'real world' product page which would potentially have a different directory setup utilising the product id.
I've tried to keep the mobile version very close to the supplied design. Subtle differences lie in the complexity of measuring the spacing and font sizes on the png image.
I have ensured the main integration tests pass, and mirror the app functionality of incrementing and decrementing and adding to cart.
Couldnt resist adding a cart counter badge!
Unit tests have been added for the core components to ensure consistency when engineers update them.
I left the CSS in JS alone as, for an app this small, the global file was perfectly fit for purpose. In a more complex app with multiple states then a CSS in JS solution would be easier to maintain.
There is a `desktop` branch with a wide screen view, as I was not sure if the goal was to closely follow the design, or to foolow this statement: _Ideally the app should be responsive._

---

In this code test, you'll be asked to:

- Make a simple React app that follows the design in `design.jpg`, consumes the API and makes the front end tests pass. Ideally the app should be responsive.

We've included:

- A sample [Next.js](https://nextjs.org/) project with a Typescript setup for your convenience, but you're welcome to swap it out for another framework if you prefer
- Some CSS colour variables that match the colours in the design
- The assets that you will need to complete the design

You're also welcome to write more tests for other parts of the application - but design those however you like.

## Getting started

First you'll need to install your dependencies. We've used yarn, if you have another preference feel free to remove the lock file and use what you are comfortable with:

```sh
cd client && yarn
```

## Start the app

```sh
yarn dev
```

This will do two things:

- Start a Next.js app running in development on <http://localhost:3000>
- Start a graphQL stub server running on <http://localhost:3001/graphql>

## Running tests

You can run tests from the client directory.

```sh
cd client && yarn test
```

This should give you two failures:

```sh
FAIL test/product.test.js
    ✕ should be able to increase and decrease product quantity
    ✕ should be able to add items to the basket
```

The task is to build the app that passes these tests.

## What we're looking for

We would like you to demonstrate your ability to:

- Reason through a programming problem
- Implement a visual design
- Implement some user interactions
- Write code that is easy to understand and extend
- Write tests that document and safeguard the program's behaviour
- Use a version control system (e.g. git) to effectively convey intent
- Write Typescript typings for the components you create, and also the typings for the GraphQL API response

Notes:

- This has not been set up with any type of CSS-in-JS, but if that is something you would like to add, please feel free.

Best of luck!
