import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const TextFieldUncontrolled = props => {
  return <div className="TextFieldUncontrolled">TextFieldUncontrolled</div>;
};

TextFieldUncontrolled.propTypes = propTypes;
TextFieldUncontrolled.defaultProps = defaultProps;

export default TextFieldUncontrolled;
export {
  propTypes as TextFieldUncontrolledPropTypes,
  defaultProps as TextFieldUncontrolledDefaultProps
};
