import React from 'react';
import {
  Pagination, 
  PaginationItem,
  PaginationLink
} from 'reactstrap';

const JobsPagination = ({page, onPageChange, hasNextPage}) => {


  return (
    <div>
      <Pagination aria-label="Page navigation example">
        {page > 1 && <PaginationItem>
          <PaginationLink previous onClick={() => onPageChange(page-1)}></PaginationLink>
        </PaginationItem>}
        {page > 1 && <PaginationItem>
          <PaginationLink onClick={() => onPageChange(page-1)}>{page-1}</PaginationLink>
        </PaginationItem>}
        <PaginationItem active>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>
        {hasNextPage && <PaginationItem>
          <PaginationLink onClick={() => onPageChange(page+1)}>{page+1}</PaginationLink>
        </PaginationItem>}
        {hasNextPage && <PaginationItem>
          <PaginationLink next onClick={() => onPageChange(page+1)}></PaginationLink>
        </PaginationItem>}
      </Pagination>
    </div>
  )
}

export default JobsPagination
