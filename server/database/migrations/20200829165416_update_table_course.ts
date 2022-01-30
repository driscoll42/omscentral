import Knex from 'knex';

import { Course } from '../../src/models';
import { addColumn, dropColumn } from '../utils';

exports.up = async (knex: Knex) => {
  await addColumn(knex, Course.tableName, 'link', (tb) => {
    tb.string('link').nullable();
  });
};

exports.down = async (knex: Knex) => {
  await dropColumn(knex, Course.tableName, 'link');
};
