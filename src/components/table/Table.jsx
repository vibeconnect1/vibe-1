import React from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux';

const Table = ({columns, data,selectRows,isPagination,title }) => {
    const themeColor = useSelector((state)=> state.theme.color)
    const customStyle = {
        headRow: {
          style: {
            backgroundColor: themeColor,
            color: "white",
    
            fontSize: "10px",
          },
        },
        headCells: {
          style: {
            textTransform: "upperCase",
          },
        },
      };
  return (
    <DataTable
    title={title}
          responsive
          selectableRows={selectRows}
          columns={columns}
          data={data}
          customStyles={customStyle}
          pagination={isPagination}
          fixedHeader
          // fixedHeaderScrollHeight="420px"
          selectableRowsHighlight
          highlightOnHover
        />
  )
}

export default Table
