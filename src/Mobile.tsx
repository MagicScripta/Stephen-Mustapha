import React from 'react'
import VerticalHelper from './components/VerticalHelper'

const Mobile = () => {
  return (
    <div className={`h-screen w-screen bg-blue-400 text-white font-main `}>
      <VerticalHelper
        child={
          <p className={`w-3/4 m-auto align-center text-6xl`}>
            Hey, I haven't made a mobile version of my website yet feel free to
            open up the website on a computer.
          </p>
        }
        className={``}
      />
    </div>
  )
}

export default Mobile
