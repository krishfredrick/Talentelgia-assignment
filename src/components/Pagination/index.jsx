import { Pagination } from "@mui/material";
import React from 'react'
import './styles.scss'

const PaginationComponent = ({pageNumber, handleChange}) => {
  return (
    <div className="pagination-div">
    <Pagination
    count={3}
    page={pageNumber}
    onChange={handleChange}
    // onRowsPerPageChange={handleChangeRowsPerPage}
    sx={{
      color: "var(--white)",
      "& .Mui-selected , .Mui-selected:hover": {
        backgroundColor: "var(--blue) !important",
        color: "var(--white) !important",
        borderColor: "var(--blue) !important",
      },
      "& .MuiPaginationItem-ellipsis": {
        border: "0px solid var(--grey) !important",
      },
      "& .MuiPaginationItem-text": {
        color: "var(--white)",
        border: "1px solid var(--grey)",
      },
    }}
  />
    </div>
  )
}

export default PaginationComponent