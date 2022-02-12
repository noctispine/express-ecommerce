import styled from 'styled-components'

export const FilterContainer = styled.div`
  height: min-content;
  border: 3px solid #6f63ac;
  width: 100%;
  /* background-color: rgba(53, 53, 53, .87); */
  .categories {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 940px) {
    grid-row: 1;
    grid-column: 1 / span 5;
    margin: 0 0 2rem 0;
    border-radius: 2rem;

    .categories {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      overflow-x: auto;
    }
  }
`
