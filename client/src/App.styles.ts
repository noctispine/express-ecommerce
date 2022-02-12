import styled from 'styled-components'

interface MainWrapperProps {
  blackBg: boolean
}

export const MainWrapper = styled.div<MainWrapperProps>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr, 1fr;
  column-gap: 2rem;
  margin: 1rem 2rem;
  height: 100%;
  
  ::after {
    position: fixed;
    height: 100%;
    content: '';
    display: ${(props) => (props.blackBg ? 'block' : 'none')};
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    z-index: 30;
  }
`
