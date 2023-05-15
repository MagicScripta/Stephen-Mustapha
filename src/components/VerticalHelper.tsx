import React from 'react'

interface verticalProps {
  child: React.ReactNode
  className: string
  secondStyle?: object
}

const VerticalHelper = (props: verticalProps) => {
  return (
    <div className={`relative h-full w-full ` + props.className}>
      <div
        style={props.secondStyle}
        className={`m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ease-in-out duration-300`}
      >
        {props.child}
      </div>
    </div>
  )
}

export default VerticalHelper
