import React from 'react';
import styled from 'styled-components';
import Text from '../@atoms/Text';

type LabelProps = {
    label : string;
};

const InputLabel: React.FC<LabelProps> = ({label}) => {
  return (
    <Text type='title2'>{label}</Text>
  );
};

export default InputLabel;

