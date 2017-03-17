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
import { Aligner } from '../../primitives/Aligner';
import { Padder } from '../../primitives/Padder';
import { WidthLimiter } from '../../primitives/WidthLimiter';

function Container(props) {
  const {
    children,
    padding = [],
    limited = false,
    align = false,
    full = false,
    autocenter = false,
  } = props;

  return (
    <WidthLimiter limited={limited} autocenter={autocenter} className="Container">
      <Aligner align={align}>
        <Padder padding={padding} full={full}>
          {children}
        </Padder>
      </Aligner>
    </WidthLimiter>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    React.PropTypes.element,
    PropTypes.arrayOf(React.PropTypes.element),
  ]),
  padding: React.PropTypes.arrayOf(React.PropTypes.shape({
    top: React.PropTypes.string,
    right: React.PropTypes.string,
    bottom: React.PropTypes.string,
    left: React.PropTypes.string,
  })),
  limited: PropTypes.string,
  align: PropTypes.string,
  autocenter: PropTypes.bool,
  full: PropTypes.bool,
};

export default Container;
