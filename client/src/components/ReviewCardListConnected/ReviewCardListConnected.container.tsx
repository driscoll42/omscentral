import * as sentry from '@sentry/browser';
import qs from 'query-string';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useQueryParams from 'src/core/hooks/useQueryParams';
import { ReviewSortKey as SortKey } from 'src/core/types';
import asArray from 'src/core/utils/asArray';
import useSession from 'src/core/utils/useSessionStorage';
import { ReviewsQueryVariables, useReviewsQuery } from 'src/graphql';

import ReviewCardListConnected from './ReviewCardListConnected';

enum QueryParam {
  Course = 'course',
  Semester = 'semester',
  Sort = 'sort',
}

interface Props {
  variables?: ReviewsQueryVariables;
  pagination?: boolean;
  before?: JSX.Element;
}

const ReviewCardListConnectedContainer: React.FC<Props> = ({
  variables = {},
  pagination = true,
  before,
}) => {
  const history = useHistory();
  const location = useLocation();

  const params = useQueryParams<{
    [QueryParam.Course]: string[];
    [QueryParam.Semester]: string[];
    [QueryParam.Sort]: SortKey;
  }>();

  const courseFilter = asArray<string>(variables.course_ids || params.course);
  const semesterFilter = asArray<string>(params.semester);
  const sortKey = params.sort || SortKey.Created;

  const [paginate, setPaginate] = useState(pagination);
  const [limit, setLimit] = useSession('rcl:l', paginate ? 10 : 10e6);

  const reviews = useReviewsQuery({
    variables: {
      ...variables,
      limit,
      order_by_desc: [sortKey, SortKey.Created],
      course_ids: courseFilter,
      semester_ids: semesterFilter,
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleLoadMore = async () => {
    if (reviews.loading) {
      return;
    }

    try {
      await reviews.fetchMore({
        variables: {
          offset: reviews.data!.reviews!.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (fetchMoreResult?.reviews?.length) {
            setPaginate(fetchMoreResult.reviews.length >= limit);
            return {
              ...prev,
              reviews: prev.reviews.concat(fetchMoreResult.reviews),
            };
          } else {
            setPaginate(false);
            return prev;
          }
        },
      });
    } catch (error) {
      sentry.captureException(error, {
        level: sentry.Severity.Error,
        extra: {
          ...variables,
          last_offset: reviews.data?.reviews?.length,
        },
      });
    }
  };

  const handleFilterChange = (param: QueryParam) => (filter: string[]) => {
    if (filter.sort().join(',') !== courseFilter.sort().join(',')) {
      setLimit(10);

      history.push({
        search: qs.stringify({
          ...qs.parse(location.search),
          [param]: filter,
        }),
      });
    }
  };

  const handleCourseFilterChange = handleFilterChange(QueryParam.Course);
  const handleSemesterFilterChange = handleFilterChange(QueryParam.Semester);

  const handleSortKeyChange = (key: SortKey) => {
    if (key !== sortKey) {
      setLimit(10);

      history.push({
        search: qs.stringify({
          ...qs.parse(location.search),
          sort: key,
        }),
      });
    }
  };

  return (
    <ReviewCardListConnected
      loading={reviews.loading}
      reviews={reviews.data?.reviews}
      courseFilter={variables.course_ids == null ? courseFilter : undefined}
      onCourseFilterChange={handleCourseFilterChange}
      semesterFilter={semesterFilter}
      onSemesterFilterChange={handleSemesterFilterChange}
      sortKey={sortKey}
      onSortKeyChange={handleSortKeyChange}
      onLoadMore={
        paginate &&
        reviews.data?.reviews?.length &&
        reviews.data.reviews.length >= limit
          ? handleLoadMore
          : undefined
      }
      before={before}
      highlight={(variables.query || '').toLowerCase()}
    />
  );
};

export default ReviewCardListConnectedContainer;
