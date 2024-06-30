import { Icon } from "@iconify/react/dist/iconify.js";
import { memo } from "react";

const Pagination = ({
  currentPage = 2,
  totalPage = 3,
  pageFunc = () => {},
}) => {
  return (
    <>
      <div className="text-center flex justify-center  items-center font-medium">
        {currentPage > 1 && (
          <div className="flex items-center">
           <div className="flex items-center mr-5"><Icon icon="ep:arrow-left" className="mr-1"/> Previous</div>
            <div className="py-3 px-4">1</div>
            <div className="px-4">...</div>
          </div>
        )}

        {currentPage > 2&&<div>{currentPage-1}</div>}
        <div className="py-3 px-4 border rounded-lg">{currentPage}</div>
        {currentPage < totalPage - 1&&<div>{totalPage-1}</div>}
        {currentPage < totalPage && (
          <div className="flex  items-center ml-5">
            {" "}
            Next
            <Icon icon="ep:arrow-right" className="ml-1"/>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(Pagination)
