import React, { useEffect, useState } from 'react'
import VerticalHelper from './VerticalHelper'
import { getInitialScheme, getMainBorder, getPeripheralBorder } from '../tools'

interface aboutProps {
  name: string
  index: number
  border: boolean
  setDisplay: React.Dispatch<React.SetStateAction<number>>
}

const Banner = (props: aboutProps) => {
  let [scheme, setScheme] = useState(getInitialScheme())
  let [isHover, setIsHover] = useState(false)
  let [textSize, setTextSize] = useState(0)

  useEffect(() => {
    const handleStorage = () => {
      let scheme = localStorage.getItem('colorScheme')
      if (scheme) {
        setScheme(JSON.parse(scheme))
      }
    }

    window.addEventListener('ThemeChange', () => handleStorage())
    return () =>
      window.removeEventListener('ThemeChange', () => handleStorage())
  }, [])

  useEffect(() => {
    setTextSize(
      document.getElementById('left-console') === null
        ? 0 // @ts-ignore
        : Math.round(document.getElementById('left-console').clientWidth / 10)
    )
  }, [])

  const getBG = () => {
    switch (props.index) {
      case 1:
        return `bg-sports`
      case 2:
        return `bg-gaming`
      case 3:
        return `bg-earth`
      default:
        return `bg-experience`
    }
  }

  return (
    <a
      onClick={() => props.setDisplay(props.index)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      id={'tab-' + props.name}
      style={{ fontSize: textSize + 'px' }}
      className={`font-[stencil] cursor-pointer grid grid-cols-1`}
    >
      <div
        className={`bg-cover ${getBG()} ease-in-out duration-300 z-0 ${getMainBorder(
          scheme
        )} ${
          isHover ? `blur-[2px]` : `blur-[1px] border-2`
        } h-full w-full col-start-1 row-start-1`}
      />
      <div
        className={`bg-black h-full w-full col-start-1 row-start-1 z-10 opacity-30`}
      />
      <VerticalHelper
        child={
          <p
            className={`ease-in-out duration-300 text-[#F3F3F3] ${
              isHover ? `scale-150` : ``
            }`}
          >
            {props.name}
          </p>
        }
        className={`col-start-1 row-start-1 z-20 ${getPeripheralBorder(
          scheme
        )} ${isHover && props.border ? `border-l-4` : ``}`}
      />
    </a>
  )
}

export default Banner
