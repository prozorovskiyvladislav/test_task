import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Router from './router.component';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GIT_HUB_AUTH_TOKEN}`
  }
})

const router = createBrowserRouter([
  { path: "*", Component: Router}
])

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
    
  );
}

export default App;
