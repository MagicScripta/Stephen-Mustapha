import VerticalHelper from './VerticalHelper'
import { useEffect, useState } from 'react'

interface waitingProps {
  done: boolean
  className: string
}

const Waiting = (props: waitingProps) => {
  const [windowHeight, setWindowHeight] = useState(0)
  useEffect(() => {
    setWindowHeight(
      window.innerHeight === null
        ? 0 // @ts-ignore
        : window.innerHeight
    )
  }, [])
  return (
    <div
      className={
        `min-h-full min-w-full bg-blue-400 z-50 ${
          props.done ? `invisible` : `visible`
        } ` + props.className
      }
    >
      <VerticalHelper
        child={
          <div
            className={`preload-juggle ${props.done ? `invisible` : `visible`}`}
            style={{
              width: windowHeight / 2,
              height: windowHeight / 2,
            }}
          >
            <div className="ball" />
            <div className="ball" />
            <div className="ball" />
          </div>
        }
        className={``}
      />
    </div>
  )
}

export default Waiting
