import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { customPropTypes, getElementType, META } from '../../lib'

export default class Buttons extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    name: 'Buttons',
    type: META.TYPES.ELEMENT,
    parent: 'Button',
  }

  render() {
    const classes = classNames(
      'ui',
      this.props.className,
      'buttons'
    )
    const ElementType = getElementType(Buttons, this.props)
    return (
      <ElementType {...this.props} className={classes}>
        {this.props.children}
      </ElementType>
    )
  }
}
