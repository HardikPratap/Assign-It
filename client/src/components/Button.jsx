import clsx from 'clsx'
import React from 'react'

function Button({icon,className,lable,type,onClick=()=>{}}) {
  return (
    <button 
        type={type || "button"} 
        className={clsx("bg-gradient-to-tl from-gray-500 to-white",className)} 
    >
        <span>{lable}</span>
        {icon && icon}
    </button>
  );
};

export default Button
