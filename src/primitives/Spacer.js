import styled from 'styled-components';
import settings from '../utilities/settings';

const {
  gutter,
} = settings;

function findMatch(valueArr, side) {
  // Default result
  const results = {
    type: 'rem',
    value: 0,
  };

  const match = valueArr.find(p => p.includes(side));
  if (match) {
    // Check if gutter is fixed or fluid
    results.type = match.includes('fluid') ? '%' : 'rem';
    results.value = match.includes('fluid') ? gutter.fluid : gutter.fixed;

    // Check for double/half settings
    if (match.includes('half')) { results.value /= 2; }
    if (match.includes('double')) { results.value *= 2; }
  }

  return results;
}

function calculateMargin({ margin = [], full }, side) {
  // Abort if full
  const leftRight = side === 'left' || side === 'right';
  if (full && leftRight) { return 0; }

  // Check for a match
  const results = findMatch(margin, side);

  // Append default left/right margins
  if (leftRight && results.value === 0) {
    results.value = gutter.fixed;
  }

  return `${results.value}${results.type}`;
}

function calculatePadding({ padding = [] }, side) {
  const results = findMatch(padding, side);
  return `${results.value}${results.type}`;
}

const Spacer = styled.div`
  margin-top: ${props => calculateMargin(props, 'top')}
  margin-right: ${props => calculateMargin(props, 'right')}
  margin-bottom: ${props => calculateMargin(props, 'bottom')}
  margin-left: ${props => calculateMargin(props, 'left')}
  padding-top: ${props => calculatePadding(props, 'top')}
  padding-right: ${props => calculatePadding(props, 'right')}
  padding-bottom: ${props => calculatePadding(props, 'bottom')}
  padding-left: ${props => calculatePadding(props, 'left')}
`;

export {
  Spacer
};

