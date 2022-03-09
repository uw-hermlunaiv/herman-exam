import React from 'react';

type Props = {
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: string;
}

function Input({ placeholder, label, name, value, error, onChange, type = 'text' }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm"
      >{label}
      </label>
      <input
        type={type}
        className="border p-2 rounded-lg"
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default Input;
