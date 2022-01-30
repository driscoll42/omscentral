import { notFound } from '@hapi/boom';

import { getUser } from '../../functions';
import { QueryResolvers } from '../../graphql';

type Resolver = QueryResolvers['user'];

export const resolver: Resolver = async (_, { id }) => {
  const user = await getUser(id);
  if (!user) {
    throw notFound();
  }
  return user;
};
