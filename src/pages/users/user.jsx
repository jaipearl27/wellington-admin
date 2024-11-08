import { Pagination, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Toaster } from "sonner";
import { instance } from "../../services/axiosInterceptor";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/actions/UserAction";

const Users = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers()).then((res) => {
      console.log("res", res);
    });
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log("Delete clicked for ID:", id);
    setOpenId(null);
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
                  Name
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700 font-semibold">
                  Email
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700 font-semibold">
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.UserData?.result?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-200">
                    {item.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {item.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <img
                      src={item.image[0].url}
                      alt={`${item.name}'s profile`}
                      className="w-16 h-16 object-cover rounded-md border border-gray-300"
                    />
                  </td>
                  {/* <td className="flex flex-row gap-4">
                    <button className=" bg-slate-400 rounded-md p-2">
                      del
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/*               
                <div className="grid grid-row-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
                    {film?.FilmData?.films &&
                        film?.FilmData?.films?.map((item) => (
                            <div className="flex flex-col w-full gap-20" key={item?._id}>
                                <div className="border rounded-md flex flex-col" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                                    <img
                                        src={item.thumbnail}
                                        className="w-[250px] h-[250px] rounded-t-md border"
                                        alt=""
                                    /> */}
        {/* Dropdown Trigger */}
        {/* <div className="absolute ml-56 cursor-pointer text-[#1A1A1A] text-4xl" onClick={() => toggleDropdown(item?._id)}>
                                        <div className="flex flex-col mt-3 gap-1 ">
                                            <span className="block w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
                                            <span className="block w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
                                            <span className="block w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
                                        </div>
                                    </div> */}

        {/* Dropdown Menu */}
        {/* {openId === item?._id && (
                                        <div className="absolute ml-56 bg-white border  shadow-lg rounded-md mt-1 z-10">
                                            <ul className="py-1">
                                                <li
                                                    onClick={() => handleEdit(item?._id)}
                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                >
                                                    Edit
                                                </li>
                                                <li
                                                    onClick={() => handleDelete(item?._id)}
                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                >
                                                    Delete
                                                </li>
                                            </ul>
                                    //     </div> */}
        {/* // )} */}

        {/* <div className="flex flex-col justify-start px-4">
                                        <div className="text-left text-[#1a1a1a] font-bold">{item?.name}</div>
                                        <div className="text-left text-[#374151] pb-10">
                                            {new Date(item?.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "numeric",
                                                day: "numeric",
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        // ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Users;
