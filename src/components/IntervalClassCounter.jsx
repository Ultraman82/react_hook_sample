import React, { useEffect, useState } from "react";

function IntervalClassCounter() {
  const [count, setcount] = useState(0);

  const tick = () => {
    setcount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
}

export default IntervalClassCounter;
