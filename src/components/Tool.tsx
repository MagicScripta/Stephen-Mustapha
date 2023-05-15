import VerticalHelper from './VerticalHelper'
import React, { useEffect, useState } from 'react'
import '../circles.css'

interface toolsProps {
  name: string
  index: number
  link: string
  className: string
  setDisplay: React.Dispatch<React.SetStateAction<number>>
}

const Tool = (props: toolsProps) => {
  const [toolSize, setToolSize] = useState(0)
  const [isHover, setIsHover] = useState(false)

  const hover = () => {
    setIsHover(true)
    setToolSize(
      document.getElementById('tools') === null
        ? 0 // @ts-ignore
        : Math.round(document.getElementById('tools').clientHeight / 1.8)
    )
  }

  const noHover = () => {
    setIsHover(false)
    setToolSize(
      document.getElementById('tools') === null
        ? 0 // @ts-ignore
        : Math.round(document.getElementById('tools').clientHeight / 2)
    )
  }

  useEffect(() => {
    setToolSize(
      document.getElementById('tools') === null
        ? 0 // @ts-ignore
        : Math.round(document.getElementById('tools').clientHeight / 2)
    )
  }, [])

  return (
    <a
      onClick={() => props.setDisplay(props.index)}
      className={props.className + ` cursor-pointer grid grid-cols-1`}
      onMouseEnter={hover}
      onMouseLeave={noHover}
    >
      <VerticalHelper
        child={
          <div
            id="circles"
            style={{ height: toolSize * 2, width: toolSize * 2 }}
          >
            <div className="circle1 bg-white" />
            <div className="circle2 bg-white" />
            <div className="circle3 bg-white" />
          </div>
        }
        className={`col-start-1 row-start-1 ${
          isHover ? `visible` : `invisible`
        }`}
      />
      <VerticalHelper
        child={
          <div
            style={{ width: toolSize + 'px', height: toolSize + 'px' }}
            className={`ease-in-out duration-300 rounded-full overflow-hidden border-white border-4`}
          >
            <img className={``} src={props.link} alt={props.name} />
          </div>
        }
        className={`col-start-1 row-start-1`}
      />
    </a>
  )
}

export default Tool
