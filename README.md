# atlas-web_graphql
In this project, I will create an application using a query language, designed to make APIs fast, flexible and developer-friendly. <br>
In the first part, I will create the back-end part using ExpressJs and set up GraphQl with all the parts (schema, root query and resolve function). <br>
In second part, I will connect my back-end to mongoDB and test my queries to GraphQL server using Graphiql.<br>
In the last part, I will create the front-end part using ReactJS and the GraphQL Client Apollo.

# GraphQL: A Powerful Query Language

## What is GraphQL?

GraphQL is an open-source data query and manipulation language for APIs. It provides a more efficient, powerful, and flexible alternative to traditional REST APIs. With GraphQL, clients can request exactly the data they need in a single API call, reducing over-fetching and under-fetching issues common in REST APIs.

## What is GraphiQL?

GraphiQL is an in-browser IDE (Integrated Development Environment) for exploring and testing GraphQL APIs. It provides a user-friendly interface for writing, validating, and executing GraphQL queries and mutations. GraphiQL is an essential tool for developers working with GraphQL, as it allows them to interact with the API and visualize the response data.

## How to Test Queries Using GraphiQL

To test queries using GraphiQL, follow these steps:

1. Open GraphiQL in your web browser by navigating to the GraphQL endpoint URL (e.g., `http://localhost:4000/graphql`).
2. In the left pane, write your GraphQL query or mutation.
3. Click the play button or press `Ctrl+Enter` (Command+Enter on Mac) to execute the query.
4. The response will be displayed in the right pane, where you can inspect the data returned by the API.

## What is Apollo?

Apollo is a popular open-source implementation of GraphQL, providing a set of tools and libraries for building GraphQL servers and clients. It includes:

- **Apollo Server**: A library for building GraphQL servers on top of Node.js.
- **Apollo Client**: A library for consuming GraphQL APIs in client-side applications (React, Angular, Vue, etc.).
- **Apollo Link**: A library for creating custom network links to modify GraphQL requests and responses.
- **Apollo Cache**: A normalized data cache for efficient data management and UI rendering.

## How to Connect to MongoDB

To connect your GraphQL server to a MongoDB database, you can use the `mongoose` library in Node.js. Here's a basic example:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
```

After establishing the connection, you can define your data models using Mongoose schemas and use them in your GraphQL resolvers.

## How to Make Queries from React

To make GraphQL queries from a React application using Apollo Client, follow these steps:

1. Install the required dependencies: `@apollo/client` and `graphql`.
2. Import the necessary functions and hooks from `@apollo/client`:

```javascript
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
```

3. Create an instance of `ApolloClient` and wrap your React app with `ApolloProvider`.
4. Define your GraphQL query using the `gql` tag:

```javascript
const GET_DATA = gql`
  query {
    # your query here
  }
`;
```

5. Use the `useQuery` hook to execute the query and retrieve the data:

```javascript
const { loading, error, data } = useQuery(GET_DATA);
```

6. Handle the loading, error, and data states in your component's JSX.

## How to Make GraphQL Server Accept Requests from Another Server

To make your GraphQL server accept requests from another server, you need to handle CORS (Cross-Origin Resource Sharing) on the server-side. In an Apollo Server setup, you can use the `cors` middleware:

```javascript
const { ApolloServer } = require('apollo-server');
const cors = require('cors');

const server = new ApolloServer({
  // ...
});

server.applyMiddleware({ app, cors: true }); // Enable CORS for all origins
// or
server.applyMiddleware({ app, cors: { origin: 'http://your-allowed-origin.com' } }); // Allow specific origin
```

This will allow your GraphQL server to accept requests from other servers or origins, depending on your CORS configuration.