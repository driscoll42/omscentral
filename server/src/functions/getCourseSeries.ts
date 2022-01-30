import { keyBy } from 'lodash';

import { unknownSemester } from '../constants';
import { CourseSeriesItem } from '../graphql';
import { Course, Semester } from '../models';

const sql = `
with stats as (
  select
    semester_id,
    count(id) as "count",
    avg(difficulty) as "avg_difficulty",
    avg(rating) as "avg_rating",
    avg(workload) as "avg_workload"
  from
    omscentral_review
  where
    course_id = ?
  group by
    semester_id
)
select
  s.id as "semester_id",
  coalesce(stats.count, 0) as "count",
  round(coalesce(stats.avg_difficulty, 0), 1) as "avg_difficulty",
  round(coalesce(stats.avg_rating, 0), 1) as "avg_rating",
  round(coalesce(stats.avg_workload, 0), 1) as "avg_workload"
from
  omscentral_semester s
left join
  stats
on
  s.id = stats.semester_id
where
  s.id <> ?
order by
  s.id
`;

type Row = Omit<CourseSeriesItem, 'semester'> & { semester_id: string };

export const getCourseSeries = async (
  course: Course,
): Promise<CourseSeriesItem[]> => {
  const [semesters, rows] = await Promise.all([
    Semester.query().then((semesters) => keyBy(semesters, 'id')),
    Course.knex()
      .raw(sql, [course.id, unknownSemester.id])
      .then(({ rows }) => rows as Row[]),
  ]);

  return rows.map(({ semester_id, ...rest }) => ({
    ...rest,
    semester: semesters[semester_id],
  }));
};
