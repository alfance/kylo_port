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
import LayoutOneThird from './components/LayoutOneThird'
import LayoutTwoThird from './components/LayoutTwoThird'
import Reflection from './components/Reflection'
import LayoutHalf from './components/LayoutHalf'

const style = {
  color: '#dddddd',
  textonColor: 'text-light',
  titleBgP: 'right',
  bgSize: ''
}

const titleText1 = {title: 'Research'}

const titleText2 = {title: 'Content Architecture'}

const titleText3 = {title: 'UX Design'}

const titleText4 = {title: 'UI Design'}

const titleText5 = {title: 'Motion Design'}

const titleText6 = {title:'Reflections'}

const projectTitle = {
  title: 'Fairtrade',
  logo: '../../../assets/images/proj_briovr/brioLogo_horizontal_Wgradient.svg',
  field: 'Product Design',
  intro: 'Mobile platform connecting locals and newcomers',
  link: 'fairtrade',
  bgImg: ''
}

const introRole = {
  sectionClass: 'list-style-circle',
  content: 'Fairtrade is a website/app that enables newly arrived underprivileged migrants, refugees, and people in need to "fair trade" items with locals in order to improve the quality of their lives.',
  role: 'I was part of the funding member of Fairtrade, My responsibilities are the development of the app where I conducted',
  duties: ['Market Research',
    'Comparative analysis',
    'Affinity mapping',
    'Design workshops',
    'Wireframe development',
    'Usability testing',
    'Prototype development'],
  img: '../../../assets/images/proj_briovr/behaviourstart.gif'
}

const problem = {
  title: 'Problem',
  sectionClass: 'list-style-circle',
  content: 'Most refugees and newcomers arrive to a new country with only the clothes on their backs. Upon arrival, they are immediately reliant on donations. Many local families are willing to help. However, there is almost no way to tell whether the items that are donated in good faith are actually needed by the families that receive them. As a result, the recipients often receive an abundance of products that they do not need. '
}
const background = {
  title: 'Background',
  img: '../../../assets/images/proj_briovr/background.png',
  content: 'The fundamental interface of BRIOVR is similar to major design and modeling apps. Majority of the screen is dedicated to the 3D working space while features and tools are located on the side nd bottom.'
}

const competitor = {
  title: 'Comparative Analysis',
  content: 'At the discovery phase of my project, I researched popular apps and softwares in the market to get a better understanding of the problem.',
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
    name: 'Unreal',
    code: 'Blueprint (C++)',
    time: '10 hours',
    user: 'Game developer'
  }, {
    name: 'Unity',
    code: 'C#',
    time: '12 hours',
    user: 'Game developer'
  }, {
    name: 'Play Canvas',
    code: 'Javascript',
    time: '2.5 hours',
    user: 'Front End Dev'
  }, {
    name: 'InstaVR',
    code: '/',
    time: '5 min',
    user: '360 video maker'
  }]
}

const findingCompetitor = {
  subtitle: 'finding',
  content: 'The capatibility of an app or software is often inversely corrolated with the amount of time the user need to spend learning. Unreal and Unity offer the users immensive freedom and abilities - at a cost of 10 plus hours of learning time. On another hand, InstaVR only requires the uses to spend 5 minutes learning how to make a 360 video.'
}

const userJourney = {
  title: 'User journey',
  sectionClass: 'project-layout-wide',
  content: 'After studying other applications and interviews. I came up with a simplified user journey for the system. This helped me realize that Creating **interactions comes at the late stage** of the user flow.',
  img: '../../../assets/images/proj_briovr/user_journey_map.png',
  label: 'Bheaviour onboaridng is separate from the general onboarding.  Combining onboardings have resulted in lose of interests prior to the completion. I then changed the behaviour onboarding to be initiated only when users express interest.'
}

const game = {
  title: 'Gamification Study',
  sectionClass: 'project-layout-wide',
  contentLeft: ['Other than the competitors, we also took inspiration from games and IOT that have creative builder mode. Differ from software, the behaviour system in games and IOT has much less cognitive overload at the learning stage, and is more fun.',
    '**Little big planet**: creates mode contains lots of trigger for user to create their own level.',
    '**Little Bits**: Electronic building blocks empowering kids to build bots. '],
  imgRight: '../../../assets/images/proj_briovr/game_study.png'
}

const rules = {
  title: 'Setting Rules',
  content: 'After studying the preceders and conducting studies to gather insights, I have layout the essential components of a viable behaviour system. The system is constructed by two types: motion and trigger.',
  imgLeft: '../../../assets/images/proj_briovr/action-icon.svg',
  imgRight: '../../../assets/images/proj_briovr/trigger-icon.svg',
  contentLeft: [
    '**Action**',
    'Physical transformation and animation that altered the state of an object.',
    '**Example**: move, rotate, scale'
  ],
  contentRight: [
    '**Trigger**',
    'The logic that sets off the mechanism.',
    '**Example**: click, look, time'
  ]
}

const behaviourflow1 = {
  title: 'Behaviour flow',
  content:[ 'The very first priority of behaviour flow is simplicity and flexibility. My reasoning behind is that if an user wants to make an item scale in size, they should not need to do excesstive steps other than specifying a scale value on the item',
'Method 1 and method 2 yield the same outcome. This gives users maximum freedom to achive their goals.'],
  img: '../../../assets/images/proj_briovr/actionflow.png'
}

const behaviourflow2 = {
  content: ['Trigger in BRIOVR is equivalent to conditionals in coding. In order to compromise users with different technical backgrounds, I adapted the same logic as the basic mechanism.',
'In the following diagram, method 1 and method have the same outcome. To trigger an action, the mandatory criterias are the item and the trigger method, order is not critical.'],
  img: '../../../assets/images/proj_briovr/actionflow1.png',
}

const behaviourflow3 = {
  content: 'To expand further along the road, more complex inteactions can be generated. an example would be object A trigger an action of object B.',
  img: '../../../assets/images/proj_briovr/actionflow2.png'
}

const sketches = {
  title: 'Sketches',
  sectionClass: 'project-layout-wide',
  imgLeft: '../../../assets/images/proj_briovr/brio_sketch.jpg',
  contentRight: 'The design process started with low fidelity sketches. This was the way to iterate through many design options quickly. I asked the team to sketch with me during a design sprint. Collecting their ideas helped me to align with the team and gain better idea on the technical aspect.'
}

const wireframes = {
  title: 'Wireframes',
  sectionClass: 'project-layout-wide',
  contentLeft: ['I have created both low and high fidelity wireframes with for different user test purposes.',
    'The  paper wireframes are used to quickly obtain user feedback at group design workshops - testers were mainly from within the team.',
    'The digital wireframes are used for individual user test so all the user behaviours are closely observed and recorded. I expanded the testers to be outside the company. '],
  imgRight: '../../../assets/images/proj_briovr/wireframe.jpg'
}

const usability = {
  title: 'Usability Test',
  content: ['For each iteraction, We have conducted usability tests with people from different background. The initial designs had limited number of sucesses.',
    '**Tutorial was too fast**',
    'Users had hard time following the video tutorial. We then switched it to a more immersive onboarding that guide the users hand by hand.',
    '**I want instant feedback**',
    'Whenever users added translation changes, they are unable to view the changes right away. A more direct and instant feed is needed',
    'The onboarding sometimes were neglected',
    '**Can I modify the code?**',
    'This is commonly asked by people with programming background. After carefully analyzing and discussion, we decide to instead opening up the ability for this user group, letting them get used to the system we have decided.'
  ]
}

const findingTest = {
  subtitle: 'Roadblock',
  content: 'Due to the nature of 3D app, we could only simulate a test environment that partially resembles the end product. This limit the outcomes we can get.'
}
const prototypeMain = {
  title: 'Main Interface',
  deviceFrame: 'laptop',
  content: 'The overall layout embraces the design of the app. The main feature panel at the bottom allows users to open up sub features list, and divided the triggers and actions.',
  img: '../../../assets/images/proj_briovr/ui-main.png'
}
const prototypeChain = {
  title: 'Behvaiour chain panel',
  sectionClass: 'project-layout-wide',
  contentLeft: 'The behaviour chain contains all the logics happening on an object. We embraced the flow of a node based system; however, we decide to take a bold step by making the behaviour chain linear. This comes at a cost of reduced flexibility, but reached our standards for simplicity and ease of use. ',
  imgRight: '../../../assets/images/proj_briovr/chain.png'
}
const prototypePop = {
  title: 'Property popup',
  sectionClass: 'project-layout-wide',
  imgLeft: '../../../assets/images/proj_briovr/property-popup.png',
  contentRight: 'Property popup serves as adjustable value controller for each individual trigger ad action. We made it in context of the menu location and semi-Automatic. '
}

const motion = {
    title:'Motion design',
    sectionClass: 'list-style-circle',
  content: ['Differ from 2D apps, Motion in 3D plays an important role especially true for behaviours. By applying motion design into our usability test, we have seen significant improvements in:',
  'Retaining user attention.',
  'More clear understanding of next step',
  'More tolerance on wait time'
],
  video: ''
}

const endResult = {
  title: 'The Product',
  content: 'Combining all the aspects, we were able to create a rather intuitive system that is been used by thousands of people. The following video is a 30 seconds demo showing how you can create a click button to trigger a movement of a rocket.',
  video: 'https://youtu.be/SKdtGiESaO4',
  label:'to see more of our user creation, <a href="briovr.com/discovery">Click HERE</a>'
}

const achieve = {
  title: 'Use Case',
  content: 'Through collaboration, we had created an interactive Casino Royal experience for the Toronto Elevate Conference after party at Crowdlinkers. You can play it HERE',
  img: '../../../assets/images/proj_briovr/crowdlinker.png'
}
const reflections = [
  {subject: 'Dont copy, adapt.',
    learn: 'It is equally imperative to take inspiration from exisitng solutions and to adapt it to your solution. Part of the reason that people are accepting Brio behaviour system is because it has envolved based on products that are been approved by users.'
  }, {
    subject: 'UX design is not just research and low fidelity prototypes',
    learn: 'I learned that UX design exists in every step of a product development. Your job is not completed after the wireframe. It is curicial to stay all the way untill and after the product delivery.'
  }, {
    subject: 'Working in 3D is a different story than working in 2D',
    learn: 'Add a dimension can meant a completely seperate design flow and system. I have encountered countless limitations prototyping and testing. On another hand, I learned and invented ways to validate the design method for a 3D app.'
  }
]

class Fairtrade extends React.Component {
  render () {
    return (
      <div>
        <ProjectTitle content={projectTitle} style={style} />
        <div className='project-content-layout'>
          <IntroRole content={introRole} />
          <Problem content={problem} style={style} />

          {/* early state research */}
          <TitleDivier content={titleText1} style={style} />
          <LayoutImage content={background} style={style} />
          <TableComponent content={competitor} style={style} />
          <FindingComponent content={findingCompetitor} style={style} />
          <LayoutImage content={userJourney} />
          <LayoutOneThird content={game} />

          {/* Solution */}
          <TitleDivier content={titleText2} style={style} />
          <LayoutHalf content={rules} />
          <LayoutImage content={behaviourflow1} />
          <LayoutImage content={behaviourflow2} />
          <LayoutImage content={behaviourflow3} />

          {/* UX */}
          <TitleDivier content={titleText3} style={style} />
          <LayoutTwoThird content={sketches} style={style} />
          <LayoutOneThird content={wireframes} style={style} />
          <LayoutText content={usability} />
          <FindingComponent content={findingTest} style={style} />

          {/* UI design */}
          <TitleDivier content={titleText4} style={style} />
          <LayoutImage content={prototypeMain} />
          <LayoutOneThird content={prototypeChain} />
          <LayoutHalf content={prototypePop} />

          {/* Interaction design */}
          <TitleDivier content={titleText5} style={style} />
          <LayoutImage content={motion} style={style} />
          <LayoutImage content={endResult} style={style} />

          {/* results and reflections */}
          <TitleDivier content={titleText6} style={style} />
          <LayoutImage content={achieve} />

          <TitleDivier content={titleText6} style={style} />
          <Reflection content={reflections} />

        </div>
      </div>
    )
  }
}

export default Fairtrade
