import React, {useState} from 'react';
import moment from 'moment';

const DateTimeComponent = () => {
  const [seconds, setSeconds] = useState(0);

  setTimeout(() => {
    setSeconds(moment().format('ss'));
  }, 1000)
  
  return (
    <div className='dateTime'>
      <div>{moment().format('Do MMM YYYY')}</div>
      <div>{moment().format(`ddd h:mm:${seconds} a`)}</div>
    </div>
  )
};

export default DateTimeComponent;