import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import round from 'src/core/utils/round';
import { Course } from 'src/graphql';

import { useStyles } from './Metrics.styles';

interface Props {
  className?: string;
  course: Course;
}

const Metrics: React.FC<Props> = ({ className, course: { metric } }) => {
  const classes = useStyles();

  const data: { label: string; title: string; value: number }[] = [
    {
      label: 'Avg. Workload',
      value: metric?.reviews.workload.mean ?? 0,
      title: 'Hours per week',
    },
    {
      label: 'Avg. Difficulty',
      value: metric?.reviews.difficulty.mean ?? 0,
      title: '1-Very Easy, 5-Very Hard',
    },
    {
      label: 'Avg. Rating',
      value: metric?.reviews.rating.mean ?? 0,
      title: '1-Strongly Disliked, 5-Strongly Liked',
    },
    {
      label: 'Reviews',
      value: metric?.reviews.count ?? 0,
      title: 'Number of reviews',
    },
  ];

  return (
    <Card className={className}>
      <CardContent className={classes.cardContent}>
        <Grid container>
          {data.map(({ label, value, title }) => (
            <Grid item xs={12} md={3} key={label} className={classes.metric}>
              <Tooltip title={title} placement="top">
                <div>
                  <Typography variant="body2" color="textSecondary">
                    {label}
                  </Typography>
                  <Typography variant="subtitle2">{round(value, 2)}</Typography>
                </div>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Metrics;
