import styled from 'styled-components';
import settings from '../utilities/settings';

const {
  gutter,
} = settings;

function calculatePadding({ padding = [], full }, side) {
  // Abort if full
  const leftRight = side === 'left' || side === 'right';
  if (full && leftRight) { return 0; }

  // Default padding for left/right
  let results = leftRight ? gutter.fluid : 0;
  let type = '%';

  // Check for a match
  const match = padding.find(p => p.includes(side));
  if (match) {
    // Check if gutter is fixed or fluid
    type = match.includes('fixed') ? 'rem' : '%';
    results = match.includes('fixed') ? gutter.fixed : gutter.fluid;

    if (match.includes('half')) { results /= 2; }
    if (match.includes('double')) { results *= 2; }
  }

  return `${results}${type}`;
}

const Padder = styled.div`
  padding-top: ${props => calculatePadding(props, 'top')}
  padding-right: ${props => calculatePadding(props, 'right')}
  padding-bottom: ${props => calculatePadding(props, 'bottom')}
  padding-left: ${props => calculatePadding(props, 'left')}
`;

export {
  Padder
};

