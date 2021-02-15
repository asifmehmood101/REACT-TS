import React from 'react';
import { Counter } from './Counter';

//what we are going to learn in
//props
//hooks
//render props

// ? if you dont want to consider this as mandatory/optional

//props interface/types
interface Person {
  firstName: string;
  lastName: string;
}

interface PropsName {
  text: string;
  ok?: boolean;
  amount?: number;
  fn?: (bob: string) => string;
  personDetail: Person;
  // handle event fucntion
  HandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

//define as typeScript component
const TsComponent: React.FC<PropsName> = ({ text, personDetail }) => {
  return (
    <div>
      <ul>
        <li>{text}</li>
        <li>{personDetail.firstName}</li>
        <li>{personDetail.lastName}</li>
      </ul>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default TsComponent;
