import { useRef, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number>(null);

  const start = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = window.setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1);
  };

  const stop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  return (
    <div>
      <h2>Timer: {seconds} (seconds)</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;
