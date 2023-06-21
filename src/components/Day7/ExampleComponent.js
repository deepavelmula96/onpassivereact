import React, { useState, useMemo } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // Define a memoized value using useMemo
  const doubledCount = useMemo(() => {
    console.log('Calculating doubledCount...');
    return count * 2;
  }, []);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <h2>Doubled Count: {doubledCount}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
