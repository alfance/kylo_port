import {EventEmitter} from 'events'

class NavbarStore extends EventEmitter {
  constructor () {
    super()
    this.navitems = [
      {
        id: 1,
        name: 'Projects',
        link: 'projectmain'
      },
      {
        id: 2,
        name: 'B-Side',
        link: 'photos'
      },
      {
        id: 3,
        name: 'Arts',
        link: 'arts'
      }
    ]
  }

  getAll () {
    return this.navitems
  }
}

const navbarStore = new NavbarStore()

export default navbarStore
