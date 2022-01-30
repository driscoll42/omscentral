import Knex from 'knex';

import { CourseMetric } from '../../src/models';
import { addColumn, dropColumn } from '../utils';

exports.up = async (knex: Knex) => {
  await addColumn(knex, CourseMetric.tableName, 'semesters', (tb) => {
    tb.jsonb('semesters').notNullable().defaultTo([]);
  });
};

exports.down = async (knex: Knex) => {
  await dropColumn(knex, CourseMetric.tableName, 'semesters');
};
