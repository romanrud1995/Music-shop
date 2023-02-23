import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { changePageOfMusics } from "../redux/actions/musics";
import { getPagination, getServiceStatus } from "../redux/selectors";

function PaginationHandler() {
  const fnDispatch = useDispatch();

  let bIsServiceLoading = useSelector(getServiceStatus);
  let oPaginationResult = useSelector(getPagination);

  const handleChangePage = function (oEvent, iValue) {
    fnDispatch(changePageOfMusics(iValue));
  };

  return (
    <>
      {!bIsServiceLoading && (
        <Pagination
          style={{
            margin: 30,
          }}
          count={Math.ceil(
            oPaginationResult.availableMusics /
              oPaginationResult.elementsPerPage
          )}
          page={oPaginationResult.currentPage}
          onChange={handleChangePage}
        />
      )}
    </>
  );
}

export default PaginationHandler;
