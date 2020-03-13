import React from 'react'
import PortfolioLayout from '../components/Portfolio/PortfolioLayout'
import PlayLayout from '../components/Portfolio/PlayLayout'
import { Spring } from 'react-spring'
import * as Scroll from 'react-scroll';
import { Link, Element, animateScroll as scroll } from "react-scroll";

class ProjectMain extends React.Component {
  render () {
    return (
      <div className='main-intro'>
        <div className='project-title-layout designer-intro' >
          <Spring from={{ opacity: 0, marginTop: 200 }} to={{opacity: 1, marginTop: 0}}>
            {({ opacity, marginTop }) =>
              <div style={{opacity, marginTop}} className='main-intro-title'><h1>Hi, I am Kylo Xue</h1><h3>A product designer specializing in building user-centric digital experiences ⚒️.</h3>
              </div>
            }
          </Spring>
          <div className='main-intro-play-container'>
          <div className='main-intro-play-title'>
          <Link activeClass='active' to='project' smooth={true} offset={-70} duration={300} >
            <h3>Projects</h3>
          </Link></div>
          </div>
        </div>
        <Element name='project' ><PortfolioLayout title='Portfolio' /></Element>
        <PlayLayout />
      </div>
    )
  }
}

export default ProjectMain
