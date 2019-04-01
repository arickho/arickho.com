import styled from 'styled-components';
import { media } from 'styles';

const Heading = styled.h1`
  font-size: 50px;
  font-weight: ${props => (props.bold ? 500 : 400)};
  color: #f670a0;

  ${media.medium`
    flex-direction: column;
    padding: 10px 10px;
  `};
`;

Heading.h1 = styled(Heading)`
  ${media.medium`
    font-size: 35px;
  `};
`;

Heading.h2 = styled(Heading.withComponent('h2'))`
  font-size: ${props => props.fontSize || '35px'};
`;

Heading.h3 = styled(Heading.withComponent('h3'))`
  font-size: ${props => props.fontSize || '35px'};
`;

Heading.h4 = styled(Heading.withComponent('h4'))`
  font-size: ${props => props.fontSize || '35px'};
`;

Heading.h5 = styled(Heading.withComponent('h5'))`
  font-size: ${props => props.fontSize || '35px'};
`;

Heading.h6 = styled(Heading.withComponent('h6'))`
  font-size: ${props => props.fontSize || '35px'};
`;

export default Heading;
