import React, { useEffect, useState } from 'react'
import VerticalHelper from './VerticalHelper'
import { getMainBG } from '../tools'

interface ColorSchemeProps {
  schemeNumber: number
}

const ColorScheme = (props: ColorSchemeProps) => {
  const [isHover, setIsHover] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [size, setSize] = useState(0)

  const hover = () => {
    setIsHover(true)
  }
  const noHover = () => {
    setIsHover(false)
  }

  const getOurHeight = () => {
    return document.getElementById('color-schemes') === null
      ? 0 // @ts-ignore
      : document.getElementById('color-schemes').clientHeight
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

  useEffect(() => {
    isSelected
      ? setSize(Math.round(getOurHeight() * 0.65))
      : isHover
      ? setSize(Math.round(getOurHeight()) * 0.8)
      : setSize(Math.round(getOurHeight() * 0.5))
  }, [isHover, document.getElementById('color-schemes'), isSelected])

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
