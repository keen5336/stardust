import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getUnhandledProps, META } from '../../lib'
import { Menu } from '../../collections'

function TabMenu(props) {
  const { children, className } = props
  const rest = getUnhandledProps(TabMenu, props)
  const classes = cx('tabular', className)

  return <Menu {...rest} className={classes}>{children}</Menu>
}

TabMenu._meta = {
  name: 'TabMenu',
  type: META.TYPES.MODULE,
}

TabMenu.propTypes = {
  ...Menu.propTypes,

  /** Additional classes */
  className: PropTypes.string,

  /** Primary content, intended to be MenuItems */
  children: PropTypes.string,
}

TabMenu.Item = Menu.Item

export default TabMenu
