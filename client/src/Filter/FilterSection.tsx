import { useSelector } from 'react-redux'
import { RootState } from '../reducers/rootReducer'
import { ICategory } from '../types/stateTypes/filterStateTypes'
import { FilterContainer } from './FilterSection.styles'
import Category from './Category'

interface Props {}

const FilterSection = (props: Props) => {
  const filterState = useSelector((state: RootState) => state.filter)
  return (
    <FilterContainer>
      <div className="categories">
        {filterState.categories.map((category: ICategory) => (
          <Category key={category.category} category={category} />
        ))}
      </div>
    </FilterContainer>
  )
}

export default FilterSection
