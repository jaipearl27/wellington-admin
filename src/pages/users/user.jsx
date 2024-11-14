import { Pagination, Skeleton, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Toaster } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../features/actions/UserAction";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "black",
  },
}));

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [limit, setLimit] = useState(25);
  const [totalPages, setTotalPages] = useState(1);

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({ page, limit }));
  }, [dispatch, page, limit]);

  useEffect(() => {
    setTotalPages(users?.UserData?.totalPages);
  }, [users]);

  const handleDelete = (id) => {
    if (confirm(`Are you sure you want to delete this record?`)) {
      dispatch(deleteUser({ id }));
    }
  };

  const handlePagination = (e, p) => {
    setPage(p);
    setSearchParams({ page: p });
  };

  return (
    <div>
      <Toaster />
      <div className="p-10">
        <div className="text-2xl py-5 font-semibold">Users:</div>

        <div>
          {isLoading && (
            <>
              <Skeleton animation="wave" height={300} width={300} />
              <Skeleton animation="wave" height={300} width={300} />
              <Skeleton animation="wave" height={300} width={300} />
            </>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700 font-semibold">
                  S.No.
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700 font-semibold">
                  Name
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700 font-semibold">
                  Email
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700 font-semibold">
                  Image
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users && users?.UserData?.result?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 h-[100px]">
                  <td className="py-2 px-4 border-b border-gray-200">
                    {index + 1 + (page - 1) * limit}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {item?.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {item?.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <img
                      src={item?.image[0]?.url}
                      alt={`${item?.name}'s profile`}
                      className="w-16 h-16 object-cover rounded-md border border-gray-300"
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 ">
                    <button
                      className=" bg-red-500 text-white hover:bg-red-600 transition duration-300  rounded-md p-2"
                      onClick={() => handleDelete(item?._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!isLoading && users && (
          <div className="flex flex-row justify-center w-full pt-5">
            <StyledPagination
              count={totalPages}
              page={Number(page)}
              color="primary"
              onChange={handlePagination}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
