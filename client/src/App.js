import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";


import Register from './Components/Register'
import Home from './Components/Home';

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function App() {
  return (
   <ApolloProvider client={client}>
    <div className="App">
      
    </div>
    <Home />
    {/* <Register /> */}
   </ApolloProvider>

  );
}

export default App;
