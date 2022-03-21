import styled from 'styled-components'
import { theme } from '../styles/theme'

const Title = styled.h1`
  font-size: 50px;
  color: ${theme.colors.primary};
`

export default function Home() {
  return <Title>My page</Title>
}
