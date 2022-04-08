import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloLink,
  ServerError,
  createHttpLink,
} from '@apollo/client';

import { onError } from '@apollo/client/link/error';
import { API_URL } from '@env';
const cache = new InMemoryCache();

const restLink = createHttpLink({
  uri: API_URL,
});
const errorLink = onError(({ networkError, operation, forward }) => {
  const errors = networkError as ServerError;
  console.log(errors);
  forward(operation);
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: ApolloLink.from([errorLink, restLink]),
  cache,
});

export default client;
