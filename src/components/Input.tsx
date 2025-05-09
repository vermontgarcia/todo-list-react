import type { ChangeEventHandler, KeyboardEventHandler } from 'react';

interface InputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
}

const Input = ({ value, onChange, onKeyDown }: InputProps) => {
  return (
    <label>
      New Item
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </label>
  );
};

export default Input;
