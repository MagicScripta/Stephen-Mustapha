import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

const Sports = () => {
  return (
    <div className={`p-3 h-full`}>
      <Scrollbars autoHide autoHideTimeout={2000} autoHideDuration={1000}>
        <a
          className={`font-bold hover:text-black`}
          target={`_blank`}
          href={`http://nlsa4life.msa4.rampinteractive.com/`}
        >
          Football
        </a>
        <hr />
        <br />
        I was born and bred in Nigeria who's national sport is Football so I
        naturally grew to be skilled in the sport. I started off playing as a
        goalie in elementary school, I then grew to play right wing back in
        junior school and then wing forward in senior school. I currently play
        for the Feildians in the St. John's Intermediate Mens League as a right
        wing back.
        <br />
        <br />
        <span className={`font-bold`}>Basketball</span>
        <hr />
        <br />
        Basketball is the sport I love the most and have played it for the last
        decade or so (on and off as it may be). My sister started learning to
        play basketball when I was around 12 years old and I joined in since I
        was on a school break. Since then I've been to a few camps and played at
        my home court{' '}
        <a
          className={`font-bold hover:text-black`}
          target={`_blank`}
          href={`https://www.instagram.com/area1basketball/`}
        >
          Area1Basketball in Abuja, Nigeria
        </a>{' '}
        and I can say with certainty Basketball is a sport that puts my heart at
        ease.
      </Scrollbars>
    </div>
  )
}

export default Sports
