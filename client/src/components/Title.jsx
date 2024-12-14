import clsx from 'clsx'
import React from 'react'

function Title({title , className}) {
  return (
    <h2 className={clsx("text-2xl font-semibold capitalize text-primary",className)}>
      {title}
    </h2>
  )
}

export default Title
