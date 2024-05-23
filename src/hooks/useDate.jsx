import React, { useEffect } from 'react';

export default function useDate() {
  const [date, setDate] = React.useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return date;
}
