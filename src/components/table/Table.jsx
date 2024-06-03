import React from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

const Table = ({ columns, data, selectRows, isPagination, title, height }) => {
  const themeColor = useSelector((state) => state.theme.color);
  // const customStyle = {
  //     headRow: {
  //       style: {
  //         backgroundColor: themeColor,
  //         color: "white",

  //         fontSize: "10px",
  //       },
  //     },
  //     headCells: {
  //       style: {
  //         textTransform: "upperCase",
  //       },
  //     },
  //   };
  const customStyle = {
    headRow: {
      style: {
        background: themeColor,
        color: "white",
        fontSize: "10px",
      },
    },
    headCells: {
      style: {
        textTransform: "upperCase",
      },
    },
    cells: {
      style: {
        fontWeight: "bold",
        fontSize: "10px",
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
      fixedHeaderScrollHeight={height}
      selectableRowsHighlight
      highlightOnHover
      
    />
  );
};

export default Table;
