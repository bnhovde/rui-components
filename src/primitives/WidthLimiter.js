import styled from 'styled-components';
import settings from '../utilities/settings';

const {
  widths,
} = settings;

const WidthLimiter = styled.div`
  margin: ${props => props.autocenter ? '0 auto' : '0'};
  max-width: ${props => props.limited ? `${widths[props.limited]}px` : 'initial'};
`;

export {
  WidthLimiter,
};
