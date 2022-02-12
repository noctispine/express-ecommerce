import styled from 'styled-components'

interface CategoryCardProps {
  isChecked: boolean
}

export const CategoryCard = styled.div<CategoryCardProps>`
  border-radius: 1rem;
  font-weight: bolder;

  margin: 0 .2rem;
  padding: 0.2rem;
  border: ${(props) =>
    props.isChecked ? 'blue 3px solid' : 'transparent 3px solid'};
  span {
  }

  label {
  }

  input {
    display: none;
  }

  div {
    width: max-content;
    display: flex;
    align-items: center;
  }

  .tick {
    color: ${(props) => (props.isChecked ? 'black' : 'white')};
  }
`
