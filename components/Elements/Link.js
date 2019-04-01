import styled from 'styled-components';
import { media } from 'styles';

export default styled.a`
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  color: ${props => props.color || '#F670A0'};
  font-size: ${props => props.fontSize || '18px'};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  border-bottom: 5px solid transparent;

  &:hover {
    border-bottom: 5px solid ${props => props.color || '#F670A0'};
  }

  &:visited {
    text-decoration: none;
    color: ${props => props.color || '#F670A0'};
  }

  ${media.medium`
    font-size: 35px;
  `};
`;
