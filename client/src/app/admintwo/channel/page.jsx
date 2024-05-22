"use client";
import React, { useState } from "react";
import { CiExport } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const page = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isActive, setIsActive] = useState(true);

  const handleSwitchChange = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };
  return (
    <div className="  mx-70 ">
      <div className="flex justify-around mx-70 mt-3">
        <div className="flex justify-start ">
          <form class="shadow-none hover:bg-blue-900 flex my-5   ">
            <li className="flex relative">
              <IoSearchOutline size={24} className="absolute top-3 right-50" />
              <input
                type="text"
                placeholder="search"
                className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                style={{ fontSize: "18pt", height: "42px", width: "500px" }}
              />
            </li>
          </form>
        </div>
        <div className="flex justify-end ml-11 mt-4">
          <div className="flex mr-10">
            <div>
              <CiExport className="w-5 h-5  mt-2" />
            </div>
            <div className="py-2 ">Export</div>
          </div>
          <div className="flex mr-10">
            <div>
              <IoFilterOutline className="w-5 h-5 mt-2" />
            </div>
            <div className="py-2">Add filter</div>
          </div>

          <div className="mr-10">
            <Button onClick={handleOpen} className="shadow border  bg-slate-900 text-white size-lg py-2 px-4">Add Channel</Button>

            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <div className="flex justify-center">
                  <Typography
                    id="keep-mounted-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Add Channel
                  </Typography>
                </div>
                <div className="mx-16">
                  <Typography
                    id="keep-mounted-modal-description"
                    sx={{ mt: 6 }}
                  >
                    Name
                  </Typography>
                </div>
                <div className="flex justify-center">
                  <input
                    type="text"
                    placeholder="add name "
                    className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1 text-white"
                    style={{ fontSize: "18pt", height: "42px", width: "400px" }}
                  />
                </div>

                <div className="flex justify-end gap-8 mt-28">
                  <button className="shadow border  bg-slate-100 size-lg py-2 px-2 text-black">
                    {" "}
                    Cancel
                  </button>
                  <button className="shadow border  bg-slate-900 text-white size-lg py-2 px-4">
                    {" "}
                    Add
                  </button>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <div>
        <hr
          className="flex justify-around"
          style={{
            padding: "0px 10px",
            position: "fixed",
            position: "relative",
            top: "20px",
            border: "none",
            height: "2px",
            background: "gray",
            display: "flex",
            justifyContent: "space-between",
            marginRight: "70px",
            marginLeft: "50px",
          }}
        />
      </div>
      <div className="flex justify-start my-10 mx-16">
        <div className="flex mr-20">
          <p className="mr-12">Name</p> <FaSort />
        </div>
        <div className="mr-24">
          <p>status</p>
        </div>
        <div>
          <p>Action</p>
        </div>
      </div>

      <div>
        <hr
          className="flex justify-around"
          style={{
            padding: "0px 2px",
            position: "fixed",
            position: "relative",
            border: "none",
            height: "2px",
            background: "gray",
            display: "flex",
            justifyContent: "space-between",
            marginRight: "70px",
            marginLeft: "50px",
          }}
        />
      </div>

      <div className="flex justify-start my-10 mx-16">
        <div className="flex mr-12">
          <p className="mr-5"> GOT </p>{" "}
        </div>
        <div className="mr-14">
          {/* <label
            htmlFor="Toggle2"
            className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800 bg-gray-100 "
          >
            <span className="bg-gray-300 ">Deactivate</span>
            <span className="relative bg-gray-300">
              <input id="Toggle2" type="checkbox" className="hidden peer" />
              <div className="w-24 h-9 rounded-full shadow peer-checked:dark:bg-violet-600"></div>
              <div className="absolute left-0 w-9 h-9 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-600 "></div>
            </span>
            <span className="bg-gray-300 ">Activate</span>
          </label> */}
          <FormGroup>
            <FormControlLabel
              label={isActive ? <div className='text-green-600'>Active</div> : <div className='text-red-600'>Inactive</div>}
              control={<Switch checked={isActive} onChange={handleSwitchChange} />}
            />
          </FormGroup>
        </div>
        <div className="flex gap-6">
          <div>
            {" "}
            <IoEye className="w-5 h-5" />{" "}
          </div>
          <div>
            {" "}
            <MdEdit className="w-5 h-5" />{" "}
          </div>
          <div>
            <AiOutlineDelete className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
