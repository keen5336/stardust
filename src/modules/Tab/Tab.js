import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  getUnhandledProps,
  META,
} from '../../lib'

const _meta = {
  name: 'Tab',
  type: META.TYPES.MODULE,
}

import TabMenu from './TabMenu'
import TabSegment from './TabSegment'

class Tab extends Component {
  static _meta = _meta

  static propTypes = {
    /** A Tab.Menu followed by a Tab.Segment for every menu item */
    children: PropTypes.node,

    /** The initial activeIndex */
    defaultActiveIndex: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** The name of the active pane */
    activeIndex: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  static autoControlledProps = [
    'activeIndex',
  ]

  componentWillMount() {
    this.trySetState({
      activeIndex: 1,
    })
  }

  static Menu = TabMenu
  static Segment = TabSegment

  render() {
    const { children } = this.props
    const rest = getUnhandledProps(Tab, this.props)

    return <div {...rest}>{children}</div>
  }
}

export default Tab
