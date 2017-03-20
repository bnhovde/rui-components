/**
*
* Container
*
* Adds global padding to elements, use this everywhere you need padding
* instead of adding padding to elements (where you can)
*
* All containers will have left/right padding by default unless 'full' is used
*
* Usage: <Container padding={['top', 'bottom']}>...</Container>
*
*/

import React, { PropTypes } from 'react';
import { Aligner } from '../../primitives/Aligner.js';
import { Spacer } from '../../primitives/Spacer.js';
import { WidthLimiter } from '../../primitives/WidthLimiter.js';

function Container(props) {
  const {
    children,
    limited = false,
    align = false,
    autocenter = false,
  } = props;

  const renderWidthLimiter = limited || autocenter;
  const renderAligner = align;

  const componentsToRender =
    [Spacer, renderWidthLimiter && WidthLimiter, renderAligner && Aligner]
      .filter(c => c !== false);

  // Conditionally return only required components
  return componentsToRender
    .reduce((result, Component) => <Component {...props}>{result}</Component>, children);
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    React.PropTypes.element,
    PropTypes.arrayOf(React.PropTypes.element),
  ]),
  margin: React.PropTypes.arrayOf(React.PropTypes.string),
  padding: React.PropTypes.arrayOf(React.PropTypes.string),
  limited: PropTypes.string,
  align: PropTypes.string,
  autocenter: PropTypes.bool,
  full: PropTypes.bool,
};

export default Container;
