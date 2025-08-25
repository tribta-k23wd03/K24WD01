import { useEffect, useRef, useState } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0);

  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((p) => p + 1)}>Increate Count</button>
      <p>Number of render component: {renderCount.current}</p>
    </div>
  );
}

export default RenderCounter;
