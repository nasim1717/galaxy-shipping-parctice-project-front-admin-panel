import { usePaginated } from "@makotot/paginated";
import { useEffect, useState } from "react";
import { TbArrowBarToLeft, TbArrowBarToRight } from "react-icons/tb";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { curentPage, dataLimit as limit } from "../../features/paginate/paginateSlice";

const AutosFooter = () => {
  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.pagination.totalPage);
  const [pageNo, setPageNo] = useState(1);
  const [dataLimit, setDataLimit] = useState(20);
  const { pages, currentPage, isPrevTruncated, isNextTruncated } = usePaginated({
    currentPage: pageNo,
    totalPage: totalPage,
    siblingsSize: 1,
    boundarySize: 1,
  });

  useEffect(() => {
    dispatch(curentPage(pageNo));
  }, [pageNo, dispatch]);

  useEffect(() => {
    dispatch(limit(dataLimit));
  }, [dataLimit, dispatch]);

  const handlePageIncrease = () => {
    if (pageNo < 10) {
      setPageNo((prev) => prev + 1);
    }
  };

  const handlePageDecrease = () => {
    if (pageNo > 1) {
      setPageNo((prev) => prev - 1);
    }
  };

  return (
    <div className="flex justify-between items-center px-4 text-[#808191] pt-7 ">
      <div className="text-sm">
        <p>Showing 1 to 20 of 46406 items</p>
      </div>
      <div className="flex gap-x-4">
        <div className="flex justify-center items-center gap-x-4 bg-[#e7eee7] px-3 rounded-md">
          <TbArrowBarToLeft
            onClick={() => setPageNo(1)}
            className={`${pageNo === 1 ? "text-gray-400" : "cursor-pointer"} `}
          ></TbArrowBarToLeft>
          <BiSolidChevronLeft
            onClick={handlePageDecrease}
            className={`${pageNo === 1 ? "text-gray-400" : "cursor-pointer"} `}
          ></BiSolidChevronLeft>
          {isPrevTruncated && (
            <span onClick={handlePageDecrease} className="cursor-pointer">
              ...
            </span>
          )}
          {pages.map((page) => {
            return page === currentPage ? (
              <span key={page} className="px-2 py-1 bg-green-600 text-white cursor-pointer">
                {page}
              </span>
            ) : (
              <a
                onClick={() => {
                  page < currentPage ? handlePageDecrease() : handlePageIncrease();
                }}
                key={page}
                className="cursor-pointer"
              >
                {page}
              </a>
            );
          })}
          {isNextTruncated && (
            <span onClick={handlePageIncrease} className="cursor-pointer">
              ...
            </span>
          )}
          <BiSolidChevronRight
            onClick={handlePageIncrease}
            className={`${pageNo === totalPage ? "text-gray-400" : "cursor-pointer"}`}
          ></BiSolidChevronRight>
          <TbArrowBarToRight
            onClick={() => setPageNo(totalPage)}
            className={`${pageNo === totalPage ? "text-gray-400" : "cursor-pointer"}`}
          ></TbArrowBarToRight>
        </div>
        <select
          onChange={(e) => setDataLimit(e.target.value)}
          name=""
          id=""
          value={dataLimit}
          className="search-input w-16"
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default AutosFooter;
