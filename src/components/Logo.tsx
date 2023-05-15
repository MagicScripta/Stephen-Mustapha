import React, { useEffect, useState } from 'react'
import VerticalHelper from './VerticalHelper'

interface LogoProps {
  linkName: string
  link: string
  src: string
}

const Logo = (props: LogoProps) => {
  const [isHover, setIsHover] = useState(false)
  const [logoSize, setlogoSize] = useState(0)

  const hover = () => {
    setIsHover(true)
  }
  const noHover = () => {
    setIsHover(false)
  }

  useEffect(() => {
    setlogoSize(
      document.getElementById('top') === null
        ? 0 // @ts-ignore
        : Math.round(document.getElementById('top').clientHeight / 2)
    )
  }, [document.getElementById('top')])

  useEffect(() => {
    let divisor = isHover ? 1.6 : 2
    setlogoSize(
      document.getElementById('top') === null
        ? 0 // @ts-ignore
        : Math.round(document.getElementById('top').clientHeight / divisor)
    )
  }, [isHover])

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
