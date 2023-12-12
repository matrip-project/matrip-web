import { useEffect, DependencyList } from 'react';

export function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps: DependencyList = [],
): void {
  useEffect(() => {
    const t = setTimeout(fn, waitTime);
    return () => {
      clearTimeout(t);
    };
  }, [fn, waitTime]);
}
