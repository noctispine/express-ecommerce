export interface FilterStateType {
  categories: ICategory[] | []
  activeCategories: string[]
}

export interface ICategory {
  category: string
  count: number
}
