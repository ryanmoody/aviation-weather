import { Card, Metric, Text } from '@tremor/react';
import { VALUE_PLACEHOLDER } from '../../constants';

const SingleMetric = ({ metric = VALUE_PLACEHOLDER, title }) => {
  return (
    <Card>
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
};

export default SingleMetric;
