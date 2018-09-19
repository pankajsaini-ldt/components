import styled from '../../styled_components'
import { reset } from '../../styles/reset'

export const Link = styled.a`
  ${reset};
  color: ${props => props.theme.semanticColors.primary.linkColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
