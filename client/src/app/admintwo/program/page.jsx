"use client"
import React,{useState} from 'react'
import { CiExport } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, title: 'Snow', Duration: 'Jon', Description: 35 },
  { id: 2, title: 'Lannister', Duration: 'Cersei', Description: 42 },
  { id: 3, title: 'Lannister', Duration: 'Jaime', Description: 45 },
  { id: 4, title: 'Stark', Duration: 'Arya', Description: 16 },
  { id: 5, title: 'Targaryen', Duration: 'Daenerys', Description: null },
  { id: 6, title: 'Melisandre', Duration: null, Description: 150 },
  { id: 7, title: 'Clifford', Duration: 'Ferrara', Description: 44 },
  { id: 8, title: 'Frances', Duration: 'Rossini', Description: 36 },
  { id: 9, title: 'Roxie', Duration: 'Harvey', Description: 65 },
];





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const page = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>

      <div className='flex justify-around mx-70 mt-10'>
          <div className='flex justify-start '>
            <form class="shadow-none hover:bg-blue-1200 flex my-5   ">
              <li className="flex relative">
                <IoSearchOutline  size={24} className="absolute top-3 right-50" />
                <input type="text" placeholder='search' className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "500px"}} />
              </li>
            </form>
          </div>
          <div className='flex justify-end ml-11 mt-4'>
            <div className='flex mr-10'>
              <div><CiExport className='w-5 h-5 py-2 '/></div><div className='py-2 '>Export</div></div>
            <div className='flex mr-10'>
              <div><IoFilterOutline className='w-5 h-5 py-2'/></div> 
              <div className='py-2'>Add filter</div>
            </div>

            <div className='mr-10'>
            <Button onClick={handleOpen} className="shadow border  bg-slate-900 text-white size-lg py-2 px-4">Add Program</Button>
              <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={style}>
                  <Typography id="keep-mounted-modal-title" variant="h6" component="h2" className='flex justify-center '>
                    Add Program
                  </Typography>
                    <div className='flex justify-center gap-5'>
                      <div className='flex flex-col'> 
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 5 }}>
                          <p> Video URL</p>
                          <input type="text" placeholder='search' className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}} />
                          <hr />
                        </Typography>
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                          <p>Duration</p>
                          <input type="text" placeholder='search' className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}} />
                          <hr />
                        </Typography>
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                          <p>Channel</p>
                          <input type="text" placeholder='search' className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}} />
                          <hr />
                        </Typography>
                      </div>

                      <div className='flex flex-col'> 
                          <Typography id="keep-mounted-modal-description" sx={{ mt: 5 }}>
                            <p> Tile</p>
                            <input type="text" placeholder='search' className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}} />
                            <hr />
                          </Typography>
                          <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                            <p>Category</p>
                            <select className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}} >
                            <option  className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}}>select</option>
                              <option  className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}}>Recommended</option>
                              <option className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}}>Popular</option>
                              <option className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}}>Featured</option>
                            </select>
                            {/* <input type="text" placeholder='search' className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}} /> */}
                            <hr />
                          </Typography>
                          <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                            <p>Type</p>
                            <select className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}} >
                            <option  className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}}>select</option>
                              <option  className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}}>Recommended</option>
                              <option className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}}>Popular</option>
                              <option className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}}>Featured</option>
                            </select>
                          </Typography>
                      </div>
                    </div>
                  
                  <div className='flex justify-end gap-8 mt-10'>
                    <button className='shadow border text-black size-lg py-2 px-2 ' >Cancel
                    </button>
                    <button className='shadow border  bg-slate-900 text-white size-lg py-2 px-2' > Add
                    </button>
                  </div>
                </Box>
              </Modal>
              {/* <button className='shadow bg-slate-900 text-white size-lg py-2 px-2' >
              </button> */}
            </div>
          </div>
      </div>

      <div>
          <hr className='flex justify-around' style={{padding:'0px 10px', position: 'fixed' , position: "relative",top: "20px",border: "none",height: "2px",background: "gray",display:"flex",justifyContent:"space-between" ,marginRight:"70px" , marginLeft:"50px"}}/>
      </div>

      <div className='flex justify-start my-10 mx-16'>  
        <div className='flex mr-20'><p className=''>id</p> </div>
        <div className='flex mr-24'><p className='mr-3'> <FaSort /> </p> title</div>
        <div className='flex mr-16'><p className='mr-3'> <FaSort /> </p> duration</div>
        <div className='flex mr-28'><p className='mr-3'> <FaSort /> </p>description </div>
        <div className='mr-60'><p>status</p></div>
        <div><p>Action</p></div>
      </div>

      <div>
        <hr className='flex justify-around' style={{padding:'0px 2px', position: 'fixed' , position: "relative",border: "none",height: "2px",background: "gray",display:"flex",justifyContent:"space-between" ,marginRight:"70px" , marginLeft:"50px"}}/>
      </div>
        
      {/* <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div> */}

    <div className="flex justify-start my-10 mx-16">
        <div className="flex mr-12">
          <p className="mr-5"> 1 </p>{" "}
        </div>

        
        <div className="flex mr-12">
          <p className="mr-5"> Game of throne </p>{" "}
        </div>
        <div className="flex mr-12">
          <p className="mr-5"> 2hr </p>{" "}
        </div>
        <div className="flex mr-12">
          <p className="mr-5 w-15"> medival movie series </p>{" "}
        </div>
        <div className="mr-14">
          <label
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
          </label>
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
  )
}

export default page