import React from 'react';
import numeral from 'numeral';
import {Text} from 'react-native';

const FormatNumber = ({format, children}) => {
  return (
    <Text>{numeral(children).format(children.length > 3 ? format : '0')}</Text>
  );
};

export default FormatNumber;
