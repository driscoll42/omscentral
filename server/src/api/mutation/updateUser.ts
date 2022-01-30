import { badRequest, forbidden } from '@hapi/boom';

import { updateUser } from '../../functions';
import { MutationResolvers } from '../../graphql';
import { userSchema } from '../schema';

type Resolver = MutationResolvers['updateUser'];

export const resolver: Resolver = async (_, { user }, { req }) => {
  if (req.userId !== user.id) {
    throw forbidden();
  }

  const { value, error } = await userSchema.validate(user);
  if (error) {
    throw badRequest(error.message);
  }

  return updateUser(req.userId, value);
};
