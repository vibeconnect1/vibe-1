import React, { useState, useEffect } from "react";

const RemainingTime = ({ dueDate }) => {
  const targetDate = new Date(dueDate).getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());
  const [isPastDue, setIsPastDue] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      const timeElapsed = calculateTimeElapsed();
      setTimeLeft(timeLeft);
      setTimeElapsed(timeElapsed);
      setIsPastDue(timeLeft.total <= 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      total: difference,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function calculateTimeElapsed() {
    const now = new Date().getTime();
    const difference = now - targetDate;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div>
     {!isPastDue && <p style={{ color:  "green"  }}>
        {timeLeft.days > 0 ? timeLeft.days: ""}{timeLeft.days>0?"d":""} {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s left
      </p>}
      {isPastDue && (
        <div>
          <p style={{color: "red"}}>
            {timeElapsed.days} d, {timeElapsed.hours} h ago
           
          </p>
        </div>
      )}
    </div>
  );
};

export default RemainingTime;
