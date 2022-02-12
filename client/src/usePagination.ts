import { useMemo } from 'react'

type PaginationHook = ({
  totalCount,
  pageSize,
  neighborCount,
  currentPage,
}: IPaginationParams) => any
interface IPaginationParams {
  totalCount: number
  pageSize: number
  neighborCount: number
  currentPage: number
}

// I got a different implementation for pagination but since I found a better one on the article below
// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
// I decided to proceed with this

const range = (start: number, end: number): number[] => {
  let length = end - start + 2
  return Array.from({ length }, (_, idx) => idx + start)
}
export const DOTS = 0

export const usePagination: PaginationHook = ({
  totalCount,
  pageSize,
  neighborCount = 2,
  currentPage,
}) => {
  const paginationRange: (number | string)[] | undefined = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize) - 1
    const totalPageNumbers = neighborCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftNeighborIndex = Math.max(currentPage - neighborCount, 1)
    const rightNeighborIndex = Math.min(
      currentPage + neighborCount,
      totalPageCount
    )

    const shouldShowLeftDots = leftNeighborIndex > 2
    const shouldShowRightDots = rightNeighborIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * neighborCount
      let leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * neighborCount
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftNeighborIndex, rightNeighborIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalCount, pageSize, neighborCount, currentPage])

  return paginationRange
}
