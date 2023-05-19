import React, { useEffect, useState } from 'react'
import VerticalHelper from './VerticalHelper'
import { getMainBG } from '../tools'

interface ColorSchemeProps {
  schemeNumber: number
  parentHeight: number
}

const ColorScheme = (props: ColorSchemeProps) => {
  const [isHover, setIsHover] = useState(false)
  const [height, setHeight] = useState(props.parentHeight)
  const [isSelected, setIsSelected] = useState(false)
  const [size, setSize] = useState(0)

  const hover = () => {
    setIsHover(true)
  }
  const noHover = () => {
    setIsHover(false)
  }

  const setScheme = () => {
    localStorage.setItem('colorScheme', JSON.stringify(props.schemeNumber))
    window.dispatchEvent(new Event('ThemeChange'))
  }

  useEffect(() => {
    const handleStorage = () => {
      let scheme = localStorage.getItem('colorScheme')
      if (scheme) {
        JSON.parse(scheme) === props.schemeNumber
          ? setIsSelected(true)
          : setIsSelected(false)
      }
    }

    window.addEventListener('ThemeChange', () => handleStorage())
    return () =>
      window.removeEventListener('ThemeChange', () => handleStorage())
  }, [props.schemeNumber])

  useEffect(() => setHeight(props.parentHeight), [props.parentHeight])
  useEffect(() => {
    isSelected
      ? setSize(Math.round(height * 0.65))
      : isHover
      ? setSize(Math.round(height) * 0.8)
      : setSize(Math.round(height * 0.5))
  }, [isHover, height, isSelected])

  return (
    <VerticalHelper
      child={
        <span
          onClick={setScheme}
          onMouseEnter={hover}
          onMouseLeave={noHover}
          style={{ height: size + 'px', width: size + 'px' }}
          className={`rounded-full inline-block ease-in-out duration-200 cursor-pointer ${getMainBG(
            props.schemeNumber
          )}`}
        />
      }
      className={``}
    />
  )
}

export default ColorScheme
