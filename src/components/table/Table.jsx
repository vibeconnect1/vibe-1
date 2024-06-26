// import React from "react";
// import DataTable from "react-data-table-component";
// import { useSelector } from "react-redux";

// const Table = ({ columns, data, selectRows, isPagination, title, height }) => {
//   const themeColor = useSelector((state) => state.theme.color);

//   const customStyle = {
//     headRow: {
//       style: {
//         background: themeColor,
//         color: "white",
//         fontSize: "10px",
//       },
//     },
//     headCells: {
//       style: {
//         textTransform: "upperCase",
//       },
//     },
//     cells: {
//       style: {
//         fontWeight: "bold",
//         fontSize: "10px",
//       },
//     },
//   };
//   return (
//     <div className="rounded-md mb-5 shadow-custom-all-sides">
//     <DataTable
//       title={title}
//       responsive
//       selectableRows={selectRows}
//       columns={columns}
//       data={data}
//       customStyles={customStyle}
//       pagination={isPagination}
//       fixedHeader
//       fixedHeaderScrollHeight={height}
//       selectableRowsHighlight
//       highlightOnHover
//       paginationT

//     />
//     </div>
//   );
// };

// export default Table;

import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import axios from "axios";
import { getAdminPerPageComplaints } from "../../api";

const Table = ({ columns, title, height, data, apiEndpoint, customStyles }) => {
  const themeColor = useSelector((state) => state.theme.color);

  // const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalRows, setTotalRows] = useState(0);
  // const [perPage] = useState(15); // Number of rows per page as specified in the endpoint

  // const fetchData = async (page) => {
  //   try {
  //     console.log("object");
  //     // const response = await axios.get(apiEndpoint, {
  //     //   params: { page, per_page: perPage },
  //     // });

  //     const response = await getAdminPerPageComplaints(perPage);
  //     console.log("fetched");
  //     setData(response.data);
  //     setTotalRows(response.data.total);
  //   } catch (error) {
  //     console.error("Error fetching data", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [currentPage]);

  // console.log(data);
  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

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
        textTransform: "uppercase",
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
    <div className="rounded-md mb-5 shadow-custom-all-sides">
      <DataTable
        title={title}
        responsive
        columns={columns}
        data={data}
        customStyles={customStyles || customStyle}
        pagination
        // paginationServer
        fixedHeader
        selectableRowsHighlight
        highlightOnHover
      />
    </div>
  );
};

export default Table;
