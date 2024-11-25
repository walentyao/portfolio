import { useEffect } from 'react';

export const useTitle = (title: string = 'Portfolio') => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
