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

function Grid(props) {
  const {
    children,
    padding = [],
    limited,
    align,
    full,
    fat,
    autocenter,
    limitPadding
  } = props;

  return (
    <div {...props}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.any.isRequired,
  padding: PropTypes.array,
  limited: PropTypes.string,
  align: PropTypes.string,
  autocenter: PropTypes.bool,
  limitPadding: PropTypes.bool,
  full: PropTypes.bool,
  fat: PropTypes.bool
};

export default Grid;
