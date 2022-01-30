import { PartialModelObject as PMO } from 'objection';

import { Review, User } from '../models';
import { id } from '../utils';
import { indexReview } from './indexReviews';
import { upsertReviewCourseMetrics } from './utils';

export const insertReview = async (
  review: PMO<Review>,
  user: User,
): Promise<Review> => {
  const inserted = await Review.eagerQuery().insertAndFetch({
    ...review,
    author_id: user.id,
    id: id(),
  });

  await Promise.all([
    upsertReviewCourseMetrics(inserted),
    indexReview(inserted, 'create'),
  ]);

  return inserted;
};
