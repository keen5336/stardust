import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getUnhandledProps, META } from '../../lib'
import { Segment } from '../../elements'

function TabSegment(props) {
  const { children, className } = props
  const rest = getUnhandledProps(TabSegment, props)
  const classes = cx('tabular', className)

  return <Segment {...rest} className={classes}>{children}</Segment>
}

TabSegment._meta = {
  name: 'TabSegment',
  type: META.TYPES.MODULE,
}

TabSegment.propTypes = {
  ...Segment.propTypes,

  /** Additional classes */
  className: PropTypes.string,

  /** Primary content, intended to be SegmentItems */
  children: PropTypes.string,
}

TabSegment.Item = Segment.Item

export default TabSegment
