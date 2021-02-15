import React from 'react';

 interface Props {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}

export const Counter: React.FC<Props> = ({ children }) => {
  const [count, setCount] = React.useState(0);
  return <div>{children({ count, setCount })}</div>;
};
