import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    // Sử dụng property của object inputRef
    inputRef.current?.focus();
  };
  return (
    <div>
      <label htmlFor="input">Name</label>
      <input
        ref={inputRef}
        id="input"
        type="text"
        placeholder="Input name..."
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
