import clsx from 'clsx'
import React from 'react'
const Textbox = React.forwardRef(
    ({ type, placeholder, label, className, register, name, error }, ref) => {
      return (
        <div className='w-full flex flex-col gap-1 mt-8'>
          {label && (
            <label htmlFor={name} className='text-gray-100 text-left'>
              {label}
            </label>
          )}
  
          <div>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              ref={ref}
              {...register}
              aria-invalid={error ? "true" : "false"}
              className={clsx(
                "pl-3 text-sm text-black rounded-lg bg-gray-300 placeholder-black",
                className
              )}
            />
          </div>
          {error && (
            <span className='text-xs text-[#f64949fe] mt-0.5 text-left ml-10 '>{error}</span>
          )}
        </div>
      );
    }
  );
  export default Textbox;