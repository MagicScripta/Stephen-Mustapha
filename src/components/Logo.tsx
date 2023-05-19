import React, { useEffect, useState } from 'react'
import VerticalHelper from './VerticalHelper'

interface LogoProps {
  linkName: string
  link: string
  size: number
  src: string
}

const Logo = (props: LogoProps) => {
  const [isHover, setIsHover] = useState(false)
  const [logoSize, setlogoSize] = useState(0)

  const hover = () => setIsHover(true)
  const noHover = () => setIsHover(false)

  useEffect(
    () =>
      isHover ? setlogoSize(props.size / 1.6) : setlogoSize(props.size / 2),
    [isHover, props.size]
  )

  return (
    <a
      onMouseEnter={hover}
      onMouseLeave={noHover}
      href={props.link}
      target={'_blank'}
      className={`hover:border-white border-t-2 border-transparent h-full w-full`}
    >
      <VerticalHelper
        child={
          <img
            src={props.src}
            alt={props.linkName}
            style={{
              width: logoSize + 'px',
              height: logoSize + 'px',
            }}
            className={`p-2 mx-auto ease-in-out duration-300`}
          />
        }
        className={`w-full`}
        secondStyle={{
          width: logoSize + 'px',
          height: logoSize + 'px',
          top: '60%',
        }}
      />
    </a>
  )
}

export default Logo
