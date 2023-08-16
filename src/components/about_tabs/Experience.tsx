import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

const Experience = () => {
  return (
    <div className={`p-3 h-full`}>
      <Scrollbars autoHide autoHideTimeout={2000} autoHideDuration={1000}>
        <a
          className={`font-bold hover:text-black pb-3`}
          target={`_blank`}
          href={`https://www.mun.ca/main/about/`}
        >
          Memorial University of Newfoundland
        </a>
        <hr />
        <br />
        I am a fourth-year computer science major at Memorial University of
        Newfoundland and set to graduate at the end of the year. I've had the
        opportunity to learn from so many experienced professors at MUN taking
        courses related to Machine Learning, Game Programming(AI), Algorithms
        design and analysis and even just general programming guidelines and
        methodology.
        <br />
        <br />
        <a
          className={`font-bold hover:text-black pb-3`}
          target={`_blank`}
          href={`https://www.rotulu.com/`}
        >
          Rotulu
        </a>
        <hr />
        <br />
        During my time at{' '}
        <a
          className={`font-bold hover:text-black`}
          target={`_blank`}
          href={`https://www.rotulu.com/`}
        >
          Rotulu
        </a>
        {` `}I was opportune to work with a small team of 5 to build the
        company's first website and product. I gained experience using workflow
        tools like Git and JIRA while learning to carry everyone along with my
        work and follow them in theirs. A good majority of the work I did was on
        the company's brochure page and I was able to gain experience in
        multiple languages and frameworks like JavaScript, Java, VueJS and
        Cypress. I am truly grateful for the work culture and passion I found at
        Rotulu and you are welcome to{' '}
        <a
          className={`font-bold hover:text-black`}
          target={`_blank`}
          href={`https://www.rotulu.com/`}
        >
          visit their page to learn more about them
        </a>
        .
      </Scrollbars>
    </div>
  )
}

export default Experience
