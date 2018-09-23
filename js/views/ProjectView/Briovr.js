import React from 'react'
import TitleDivier from './components/TitleDivider'
import ProjectTitle from './components/ProjectTitle'
import IntroRole from './components/IntroRole'
import Problem from './components/Problem'
import TableComponent from './components/TableComponent'
import FindingComponent from './components/FindingComponent'
import LayoutImage from './components/LayoutImage'
import LayoutText from './components/LayoutText'
import LayoutThree from './components/LayoutThree'
import Reflection from './components/Reflection'
import LayoutHalf from './components/LayoutHalf'

const style = {
  color: '#5C41B4',
  TextonColor: 'text-light',
  titleBgP: 'right',
  bgSize: ''
}

const titleText1 = {title: 'Research'}

const titleText2 = {title: 'Solution'}

const titleText3 = {title: 'UX Design'}

const titleText4 = {title: 'UI Design'}

const titleText5 = {title: 'Learnings'}

const placeholder = require('../../../assets/images/proj_cycnav/journey_map.jpg')

const projectTitle = {
  title: 'CYCNAV',
  logo: '../../../assets/images/proj_cycnav/cycnav_logo_w.svg',
  field: 'UI/UX, Interaction Design',
  intro: 'Behaviour system for online VR platform',
  link: 'briovr',
  bgImg: '../../../assets/images/proj_cycnav/title_img.png'
}

const introRole = {
  content: 'BRIOVR is an online 3D platform for creating Interactive VR content. This tool allows users to upload their models to the cloud, create animations and interactions, and share instantly with others.',
  role: 'As the leading UX designer, my role is to create a modular system for users to add interactions in the 3D space. The steps I have taken are:',
    duties:['User interviews',
'Comparative analysis',
'Affinity mapping',
'Design workshops',
'Wireframe development',
'Usability testing',
'Prototype development'],
  img: '../../../assets/images/proj_cycnav/title_img.png'
}

const challenge = {
  title: 'Challenge',
  sectionClass:'list-style-circle',
  content:[ 'Create an intuitive and easy to use interactive system for BRIOVR. Client and management requests include:',
    'No coding knowledge is required',
    'Click, drag and drop only',
    'No Node graph',
    'Need to have game play mechanics (click, move, pickup etc)']
}
const background ={
    title:'background',
    imgLeft:'',
    contentRight:['BRIOVR has all the major features contained in the card menu at the bottom. The center screen is the model viewer. ',
'My goal is to seamlessly introduce the behaviour system into the current builder environment, allowing anyone to create complex interactions that could only be done by coders at comfort. ']
}

const competitor = {
  title: 'Comparative Analysis',
  content: 'At the discovery phase of my project, I researched other apps and softwares in order to get a better understanding of the problem.',
  columns: [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Code type',
    accessor: 'code'
  }, {
    Header: 'learning time',
    accessor: 'time'
  }, {
    Header: 'User type',
    accessor: 'user'
  }],
  data: [{
    name:'Unreal',
    code: 'Blueprint (C++)',
    time: '10 hours',
    user: 'Game developer'
},{
  name:'Unity',
  code: 'C#',
  time: '12 hours',
  user: 'Game developer'
},{
  name:'Play Canvas',
  code: 'Javascript',
  time: '2.5 hours',
  user: 'Front End Dev'
},{
  name:'InstaVR',
  code: '/',
  time: '5 min',
  user: '360 video maker'
}]
}

const findingCompetitor = {
  subtitle: 'finding',
  content: 'The capatibility of an app or software is often inversely corrolated with the amount of time the user need to spend learning. Unreal and Unity allows the users to create almost anything they can, but takes over 10 hrs to master such softwares, whereas InstaVR only requires the uses to spend 5 minutes learning how to make a 360 video.'
}

const userJourney = {
  title: 'User journey',
  content: 'After studying other applications and interviews. I came up with a simplified user journey for the system. This helped me realize that Creating interactions comes at the late stage of the user flow.',
  img: '../../../assets/images/proj_cycnav/journey_map.jpg',
  label: 'I decide not to include the behaviour onboarding in the main onboarding. Only when people expressed enough interest to click on the feature should I show them how to play with behaviour.'
}

const game ={
    title:'Gamification Study',
    contentLeft:['Other than the competitors, there are games and tools which make the creation of logics fun. To name a couple: ',
'Little big planet: creates mode contains lots of trigger for user to create their own level.',
 'Little Bits: Electronic building blocks empowering kids to build bots. '],
 imgRight:'',
}

const rules = {
  title: 'Setting Rules',
  content:'Once I am happy with when and how the behaviours should be introduced to the users, it is time to layout the logics. The system is compromised by two types: motion and trigger.',
  imgLeft: '../../../assets/images/proj_cycnav/phone.svg',
  imgRight: '../../../assets/images/proj_cycnav/bikelight.svg',
  contentLeft: [
    <b className='b-indent'>Motion</b>,
    'Straight forward object transformation and animation.',
    'Example: move, rotate, scale'
  ],
  contentRight: [
    <b className='b-indent'>Trigger</b>,
    'The logic that sets off the mechanism.',
    'Example: click, look, time'
  ]
}

const behaviourflow1 = {
    title:'Behaviour flow',
  content: 'After conducting the various studies to gather insight about how other people have created the interaction system. I had came up with the basic laws for users to create either simple or advanced behaviours. ',
  img: '../../../assets/images/proj_cycnav/journey_map.jpg',
}

const behaviourflow2 = {
  content: 'All of the interactions is based on the user adding types of behaviours (trigger or motion) to the object. This can be done actively or passively. To further expand the logics above, two examples are shown below:',
  img: '../../../assets/images/proj_cycnav/journey_map.jpg',
}

const sketches ={
    title:'Sketches',
    imageLeft:'',
    contentRight:['The design process started with low fidelity sketches. This was the way to iterate through many design options quickly. I asked the team to sketch with me during a design sprint. Collecting their ideas helped me to align with the team and gain better idea on the technical aspect.',
    'After numerous validation and iteration, I am settled at design v6.']
}

const wireframes ={
    title:'Wireframes',
    contentLeft:['I have created both low and high fidelity wireframes with for different user test purposes.',
    'The  paper wireframes are used to quickly obtain user feedback at group design workshops - testers were mainly from within the team.',
    'The digital wireframes are used for individual user test so all the user behaviours are closely observed and recorded. I expanded the testers to be outside the company. '],
    imgRight:''
}

const usability = {
  title: 'Usability Test',
  content: 'What I am aiming to finding out from the usability test is how well people can learn to understand the system. The testers were coming from all sorts of professions ranging from 18 to 60. ',
  table:'',
  label:'The result has showed promising improvements after the onboarding is been introduced. People with coding background tend to perform better. '
}

const iterations = {
  title: 'Iterations',
  sectionClass:'list-style-circle',
  content: [
    'We focuse improvements on the following two major components:',
    'Spend more time with the user on the onboarding, especially when they are connecting the bike light to the app.',
    'Redefine the search process to make it more intuitive, less steps.',
    'Reduce the number of button on the lights, and increase the size'
  ],
  img: '../../../assets/images/proj_cycnav/journey_map.jpg'

}

const testResult = {
  title: 'Result',
  columns: [{
    Header: 'Feature',
    accessor: 'feature' // String-based value accessors!
  }, {
    Header: 'Problem',
    accessor: 'problem'
  }, {
    Header: 'Iteration',
    accessor: 'iteration'
  }, {
    Header: 'Results',
    accessor: 'result'
  }],
  data: [{
    feature: 'App to Device transition',
    problem: 'User stuck after connect to bike light',
    iteration: 'Redirect to app main map',
    result: '50% Smooth'
  }, {
    feature: 'Onboarding',
    problem: 'User neglected message to transit to ',
    iteration: 'Full screen instruction',
    result: '25% Smooth'
  }, {
    feature: 'Bike light navigation',
    problem: 'Missing or unclear indicators',
    iteration: 'Create vartions in indicator size',
    result: '75% Smooth'
  }]
}

const prototypeApp = {
  title: ' Prototype - APP',
  content: 'We had a few variations for the Prototype as shown below. One consideration that is more important than the asthetics of the app itself, is the readability of the screen under different light conditions.',
  imgLeft: '../../../assets/images/proj_cycnav/prototye-1.png',
  imgMiddle: '../../../assets/images/proj_cycnav/prototye-2.png',
  imgRight: '../../../assets/images/proj_cycnav/prototype-3.png',
  contentLeft: 'Design 1: a green theme is used as we are hoping to achive a eco travel method.',
  contentMiddle: 'Design 2: a green theme is used as we are hoping to achive a eco travel method.',
  contentRight: 'Design 3: a green theme is used as we are hoping to achive a eco travel method. '
}

const decision = {
  title: 'Decision',
  content: 'In the end, we decide to go with design 3 due to its readability even under extreme sun light. For this design,the users can grasp the information in the shortest amoutn of time, which is fatal when they are on the road.',
  img: {placeholder}
}

const prototypeDevice = {
  title: 'Prototype - Bike Light',
  content: 'Same as the app, we tested multiple paper prototypes before making a decision. ',
  img: {placeholder},
  label: 'The Best result is a fluid capsule with a slanted angle for optimized viewing experience.'
}

const reflections = [
  {subject: 'Adaptive design is crucial for various format of medium.',
    learn: 'The essense of UX design is to solve problems, not using templates '
  }, {
    subject: 'Sometimes the perfect solution is not one, but multiple approaches.',
    learn: 'If we have not done the user test and market analysis, we were Automatically assumed to go with one of the twocompletely different method for the problem we are presented. By adapting the UX research process we were able to focus on our users, coming up with valid solutions for the problems insead of making assumptions for the sake of building a tool.'
  }, {
    subject: 'Being able to pick up new skills and learn quickly is part of the UX.',
    learn: 'This probject was done with limited time and resources. at times I had to learn new softwares, pick up technical skills along the way. This is not only helpful to me personaly, but it broadens my pespective as an UX design, where I was able to develop empathy for other field of personnels.'
  }
]

class Briovr extends React.Component {
  render () {
    return (
      <div>
        <ProjectTitle content={projectTitle} style={style} />
        <div className='project-content-layout'>
          <IntroRole content={introRole} />
          {/* early state research */}
          <TitleDivier content={titleText1} style={style} />
          <LayoutText content={challenge} style={style} />
          <LayoutHalf content={background} style={style} />
          <TableComponent content={competitor} style={style} />

          <LayoutImage content={userJourney} />
          <LayoutHalf content={game} />

          {/* Solution */}
          <TitleDivier content={titleText2} style={style} />
          <LayoutHalf content={rules} />
          <LayoutImage content={behaviourflow1} />
          <LayoutImage content={behaviourflow2} />

          {/* UX */}
          <TitleDivier content={titleText3} style={style} />
          <LayoutHalf content ={sketches} style={style} />
          <LayoutHalf content ={wireframes} style={style} />

    
          <LayoutImage content={iterations} />
          <TableComponent content={testResult} style={style} />

          {/* UI design */}
          <TitleDivier content={titleText4} style={style} />
          <LayoutThree content={prototypeApp} />
          <LayoutImage content={decision} />
          <LayoutImage content={prototypeDevice} />

          {/* results and reflections */}
          <TitleDivier content={titleText5} style={style} />
          <Reflection content={reflections} />

        </div>
      </div>
    )
  }
}

export default Briovr
