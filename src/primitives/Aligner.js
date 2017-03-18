import styled from 'styled-components';

const Aligner = styled.div`
  text-align: ${props => props.align ? props.align : 'initial'};
`;

export {
  Aligner,
};
