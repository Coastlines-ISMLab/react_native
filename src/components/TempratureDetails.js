import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const TempratureDetails = props => {
  return (
    <Card>
      <Text>{props.temprature}</Text>
    </Card>
  );
};

export default TempratureDetails;
