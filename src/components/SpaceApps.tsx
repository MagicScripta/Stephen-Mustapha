import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import presentation from '../assets/nasa_presentation_certificate.jpg'
import participation from '../assets/nasa_participation_certificate.jpg'

const SpaceApps = () => {
  return (
    <div className={`p-3 h-full`}>
      <Scrollbars autoHide autoHideTimeout={2000} autoHideDuration={1000}>
        NASA Space Apps is most likely the most knowledge packed academic
        related group project I've worked on. My team came out to have the best
        presentation in St. John's and despite not being able to proceed to
        nationals we were very proud to see that our teamwork was evident and
        noticed in such a short time.
        <br />
        <br />
        <img className={`pb-1`} src={presentation} alt={`Best Presentation`} />
        <hr />
        <br />
        We were given almost complete freedom in our choices for the languages
        and frameworks we used and how to approach the problems provided giving
        us full creative freedom. My team chose to work on the communication
        barrier between the earth and moon in their exploration missions, we
        chose to design a user interface and propose an approach to tackle the
        inflexibility of the current methods we have for communication offering
        better speed and reliability. My team had a variety of students from a
        diverse set of branches in and outside of STEM and were able to pool
        together some pretty cool ideas.
        <br />
        <br />
        <img src={participation} alt={`Participation`} />
      </Scrollbars>
    </div>
  )
}

export default SpaceApps
