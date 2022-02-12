import styled from 'styled-components'

interface PaginationItemProps {
  selected?: boolean
  disabled?: boolean
}

export const PaginationItem = styled.li<PaginationItemProps>`
  padding: 1rem;
  min-width: 1rem;
  min-height: 1rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  list-style: none;
  background: rgba(76, 61, 152, 0.8);
  font-size: 1.25rem;
  pointer-events: ${(props) => (props.disabled ? 'none' : '')};
  cursor: pointer;
  transform: ${(props) => (props.selected ? 'scale(1.1)' : '')};

  @media (max-width: 768px){
    min-width: .5rem;
    min-height: .5rem;
  }
`
export const PaginationWrapper = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
`
export const PaginationUl = styled.ul`
  display: flex;
  justify-content: center;
`
