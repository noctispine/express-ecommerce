import React from 'react'
import { usePagination, DOTS } from '../../usePagination'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { BsThreeDots } from 'react-icons/bs'
import {
  PaginationItem,
  PaginationUl,
  PaginationWrapper,
} from './Pagination.style'

interface Props {
  totalCount: number
  currentPage: number
  pageSize: number
  neighborCount: number
  onPageChange: (pageNum: number) => void
}

const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  neighborCount,
  onPageChange,
}: Props) => {
  const paginationRange: number[] = usePagination({
    currentPage,
    neighborCount,
    pageSize,
    totalCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) return null

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrev = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]

  return (
    <PaginationWrapper>
      <PaginationUl>
        {/* left arrow */}
        <PaginationItem disabled={currentPage === 1} onClick={onPrev}>
          <GrPrevious />
        </PaginationItem>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS)
            return (
              <PaginationItem key={index}>
                <BsThreeDots />
              </PaginationItem>
            )
          return (
            <PaginationItem
              key={pageNumber}
              selected={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </PaginationItem>
          )
        })}
        {/* left arrow */}
        <PaginationItem onClick={onNext} disabled={currentPage === lastPage}>
          <GrNext />
        </PaginationItem>
      </PaginationUl>
    </PaginationWrapper>
  )
}

export default Pagination
