import React, { useState, useEffect } from 'react';
import Text from './Text';

interface ErrMessageProps {
  errMsg: string;
  isError: boolean;
}

const ErrMessage: React.FC<ErrMessageProps> = ({errMsg, isError}) => {
  const [message, setMessage] = useState(errMsg);

  useEffect(() => {
    if (isError) {
      setMessage(errMsg);
    }
  }, [isError, errMsg]);

  return (
    <div style={{ minHeight: '1.5em' }}>
      {isError && <Text color='primary' type='subtitle1'>{message}</Text>}
    </div>
  );
};

export default ErrMessage;
