import React from 'react'
import PropTypes from 'prop-types'

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  )
}

Popular.propTypes = {
  props: PropTypes.objectOf({
    children: PropTypes.node.isRequired,
  }),
}

export default Popular
