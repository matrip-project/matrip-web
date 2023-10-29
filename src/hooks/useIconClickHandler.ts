import { MouseEvent, MouseEventHandler, useCallback } from 'react';

export const useIconClickHandler = (callback: (event: MouseEvent<SVGElement>) => void): MouseEventHandler<SVGElement> => {
  const handleClick = useCallback((event: MouseEvent<SVGElement>) => {
    if (callback) {
      callback(event);
    }
  }, [callback]);

  return handleClick;
};
