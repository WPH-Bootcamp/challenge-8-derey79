import { useId } from 'react';

interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'number';
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  placeholder?: string;
  required?: boolean;
}

export default function Input({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
}: InputProps) {
  const id = useId(); // Membuat ID unik otomatis untuk aksesibilitas (label htmlFor)

  return (
    <div className='flex flex-col gap-2'>
      <label
        htmlFor={id}
        className='text-left text-sm font-bold text-main-color'
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='ui-input-base'
      />
    </div>
  );
}
