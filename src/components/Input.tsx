import type { ChangeEventHandler, KeyboardEventHandler } from 'react';

interface InputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
}

const Input = ({ value, onChange, onKeyDown }: InputProps) => {
  return (
    <label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Add Todo"
      />
    </label>
  );
};

export default Input;
