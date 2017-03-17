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
  let results = leftRight ? gutter : 0;

  // Check for a match
  const match = padding.find(p => p.includes(side));
  if (match) { results = 1; }
  if (match && match.includes('half')) { results /= 2; }
  if (match && match.includes('double')) { results *= 2; }
  return `${results}rem`;
}

const Padder = styled.div`
  padding-top: ${props => calculatePadding(props, 'top')}
  padding-right: ${props => calculatePadding(props, 'right')}
  padding-bottom: ${props => calculatePadding(props, 'bottom')}
  padding-left: ${props => calculatePadding(props, 'left')}
`;

export {
  Padder,
};
