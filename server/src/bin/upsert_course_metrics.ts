/* eslint-disable simple-import-sort/imports */

import { init } from './utils';
import { logger } from '../components';
import { upsertCourseMetrics } from '../functions';

async function main(): Promise<void> {
  try {
    await upsertCourseMetrics();
  } catch (error: any) {
    logger.error(error);
  }
}

init(main);
