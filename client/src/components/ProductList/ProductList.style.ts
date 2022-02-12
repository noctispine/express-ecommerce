import styled from 'styled-components'

const ListWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: space-between;
  height: 43rem;
  grid-column: 2 / span 3;
  grid-row: 2;
  @media (min-width: 940px) {
    /* grid-gap: 1rem 2rem;
    grid-template-columns: repeat(2, 1fr); */
    grid-column: 2 / span 3;
    grid-row: 1;
  }
  @media (min-width: 1200px) {
    /* grid-template-columns: repeat(3, 1fr); */
  }

`

const ProductWrapper = styled.div`
  display: grid;
  height: max-content;
  width: 100%;
  padding-bottom: 2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem 1.5rem;
  margin: 0 auto;
  margin-bottom: 1rem;
 
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem 1rem;
  } 

  
`

export { ListWrapper, ProductWrapper }
