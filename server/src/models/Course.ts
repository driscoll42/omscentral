import { Domain } from './Domain';
import { CourseMetric } from './CourseMetric';

export class Course extends Domain {
  id!: string;
  department!: string;
  number!: string;
  name!: string;
  foundational!: boolean;
  deprecated!: boolean;

  metric!: CourseMetric;

  static tableName = 'omscentral_course';

  static relationMappings = {
    metric: {
      relation: Domain.HasOneRelation,
      modelClass: CourseMetric,
      join: {
        from: `${Course.tableName}.id`,
        to: `${CourseMetric.tableName}.course_id`,
      },
    },
  };

  static jsonSchema = {
    type: 'object',
    required: [
      'id',
      'department',
      'number',
      'name',
      'foundational',
      'deprecated',
    ],
    properties: {
      id: { type: 'string' },
      department: { type: 'string' },
      number: { type: 'string' },
      name: { type: 'string' },
      foundational: { type: 'boolean' },
      deprecated: { type: 'boolean' },
      metric: CourseMetric.jsonSchema,
    },
  };

  static eagerQuery = () => Course.query().withGraphFetched('[metric]');
}
