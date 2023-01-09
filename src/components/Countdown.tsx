import React, { useState, useEffect } from 'react';
import { formatNumber } from '../utils';

interface Props {
  targetDate: Date;
}

const CountdownTimer: React.FC<Props> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeDifference: number = +targetDate - +currentDate

      if (timeDifference < 0) {
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className='timer-container'>
      <p>{timeRemaining.days} days</p>
      <div className='hour-container'>
        <p>{timeRemaining.hours}:</p>
        <p>{formatNumber(timeRemaining.minutes)}:</p>
        <p>{formatNumber(timeRemaining.seconds)}</p>
      </div>
    </div>
  );
}

export default CountdownTimer;
