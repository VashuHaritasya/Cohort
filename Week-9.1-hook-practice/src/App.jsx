import React, { useEffect, useState } from "react";

function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [value, timeout]);

  return debouncedValue;
}

function App() {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500); // 500 milliseconds debounce delay

  useEffect(() => {
    fetch("");
  }, [debouncedValue]);

  return (
    <>
      Debounced value is {debouncedValue}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
}

export default App;
