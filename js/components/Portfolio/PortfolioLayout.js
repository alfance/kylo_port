import React from 'react'
import PortfolioItem from './PortfolioItem'
import PortfolioStore from '../../stores/PortfolioStore'

class PortfolioLayout extends React.Component {
  constructor () {
    super()
    this.state = {
      portItems: PortfolioStore.getAll()
    }
  }
  render () {
    const {portItems} = this.state
    const portfolioComponents = portItems.map((each) => {
      return <PortfolioItem key={each.id} {...each} />
    })
    return (
      <div>
        <h1> Projects </h1>
        <div className='projectPanel'>
          {portfolioComponents}
        </div>
      </div>
    )
  }
}

export default PortfolioLayout