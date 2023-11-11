import { useEffect, useState } from 'react';

const isServer = typeof window === 'undefined';
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useHeader = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (!isServer) {
      window.addEventListener('scroll', () => {
        const isScroll = window.scrollY > 80;
        setScroll(isScroll);
        const header = document.querySelector('#container_header');
        if (isScroll) {
          header?.classList.add('is-sticky');
        } else if (window.scrollY === 0) {
          header?.classList.remove('is-sticky');
        }
      });
    }
  }, []);
  return { scroll };
};
