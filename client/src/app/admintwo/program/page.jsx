"use client"
import React, { useState, useEffect } from 'react'
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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import axios from "../../../axios.config"

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

const Page = () => {
  const [movies, setMovies] = useState([]);

  const [videoUrl, setVideoUrl] = useState('')
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const [channel, setChannel] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isActive, setIsActive] = useState(true);
  const DurationIntValue = parseInt(duration, 10);
  const ChannelIntValue = parseInt(channel, 10);
  // console.log(ChannelIntValue);

  const getMovies = async () => {
    try {
      const response = await axios.get('/movies');
      // console.log(response.data.movies);
      setMovies(response.data.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  // Mapping for category and type values
  const categoryMapping = {
    Recommended: 1,
    Popular: 2,
    Featured: 3,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Convert the selected values using the mapping
    const categoryValue = categoryMapping[category] || null;
    const typeValue = categoryMapping[type] || null;
    // console.log(categoryValue)
    // console.log(typeValue)

    try {
      // Insert data into the database (API call)
      const response = await axios.post('/movie', {
        videoUrl: videoUrl,
        duration: DurationIntValue,
        channelId: ChannelIntValue,
        title: title,
        categoryId: categoryValue,
        typeId: typeValue,
      });
      // console.log(response.data.message)
      setSuccessMessage(response.data.message)
    } catch (error) {
      console.log(error)
      setError(error.response.data.error)
    }

  };

  const handleSwitchChange = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  function formatDuration(durationInMilliseconds) {
    const durationInSeconds = durationInMilliseconds / 1000;
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }

  return (
    <div>

      <div className='flex justify-around mx-70 mt-10'>
        <div className='flex justify-start '>
          <form class="shadow-none hover:bg-blue-1200 flex my-5   ">
            <li className="flex relative">
              <IoSearchOutline size={24} className="absolute top-3 right-50" />
              <input type="text" placeholder='search' className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{ fontSize: "18pt", height: "42px", width: "500px" }} />
            </li>
          </form>
        </div>
        <div className='flex justify-end ml-11 mt-4'>
          <div className='flex mr-10'>
            <div><CiExport className='w-5 h-5 py-2 ' /></div><div className='py-2 '>Export</div></div>
          <div className='flex mr-10'>
            <div><IoFilterOutline className='w-5 h-5 py-2' /></div>
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

                {
                  successMessage ? (
                    <p className='text-green-600'>{successMessage}</p>
                  ) : (

                    <form onSubmit={handleSubmit}>
                      <div className='flex justify-center gap-5'>
                        <div className='flex flex-col'>
                          <Typography id="keep-mounted-modal-description" sx={{ mt: 5 }}>
                            <p> Video URL</p>
                            <input
                              type="text"
                              value={videoUrl}
                              onChange={(e) => setVideoUrl(e.target.value)}
                              placeholder='search'
                              className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                              style={{ fontSize: "18pt", height: "42px", width: "300px" }}
                              required
                            />
                            <hr />
                          </Typography>
                          <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                            <p>Duration</p>
                            <input
                              type="text"
                              value={duration}
                              onChange={(e) => setDuration(e.target.value)}
                              placeholder='search'
                              className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                              style={{ fontSize: "18pt", height: "42px", width: "300px" }}
                              required
                            />
                            <hr />
                          </Typography>
                          <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                            <p>Channel</p>
                            <input
                              type="text"
                              value={channel}
                              onChange={(e) => setChannel(e.target.value)}
                              placeholder='search'
                              className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                              style={{ fontSize: "18pt", height: "42px", width: "300px" }}
                              required
                            />
                            <hr />
                          </Typography>
                        </div>

                        <div className='flex flex-col'>
                          <Typography id="keep-mounted-modal-description" sx={{ mt: 5 }}>
                            <p> Title</p>
                            <input
                              type="text"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              placeholder='search'
                              className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                              style={{ fontSize: "18pt", height: "42px", width: "300px" }}
                              required
                            />
                            <hr />
                          </Typography>
                          <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                            <p>Category</p>
                            <select
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
                              className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                              style={{ fontSize: "18pt", height: "42px", width: "300px" }}
                              required
                            >
                              <option value="" className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{ fontSize: "18pt", height: "42px", width: "300px" }}>
                                select
                              </option>
                              <option value="Recommended" className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{ fontSize: "18pt", height: "42px", width: "300px" }}>
                                Recommended
                              </option>
                              <option value="Popular" className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{ fontSize: "18pt", height: "42px", width: "300px" }}>
                                Popular
                              </option>
                              <option value="Featured" className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{ fontSize: "18pt", height: "42px", width: "300px" }}>
                                Featured
                              </option>
                            </select>
                            <hr />
                          </Typography>
                          <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                            <p>Type</p>
                            <select
                              value={type}
                              onChange={(e) => setType(e.target.value)}
                              className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                              style={{ fontSize: "18pt", height: "42px", width: "300px" }}
                            >
                              <option value="" className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{ fontSize: "18pt", height: "42px", width: "300px" }}>
                                select
                              </option>
                              <option value="Recommended" className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{ fontSize: "18pt", height: "42px", width: "300px" }}>
                                Recommended
                              </option>
                              <option value="Popular" className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{ fontSize: "18pt", height: "42px", width: "300px" }}>
                                Popular
                              </option>
                              <option value="Featured" className="w-300 bg-slate-400 focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{ fontSize: "18pt", height: "42px", width: "300px" }}>
                                Featured
                              </option>
                            </select>
                          </Typography>
                        </div>
                      </div>
                      <div className='flex justify-end gap-8 mt-10'>
                        <button className='shadow border text-black size-lg py-2 px-2 ' >Cancel
                        </button>
                        <button type="submit" className='shadow border  bg-slate-900 text-white size-lg py-2 px-2' > Add
                        </button>
                      </div>
                    </form>
                  )
                }

                {
                  error && <p className='text-red-600'>{error}</p>
                }

              </Box>
            </Modal>
          </div>
        </div>
      </div>

      <div>
        <hr className='flex justify-around' style={{ padding: '0px 10px', position: 'fixed', position: "relative", top: "20px", border: "none", height: "2px", background: "gray", display: "flex", justifyContent: "space-between", marginRight: "70px", marginLeft: "50px" }} />
      </div>

      <div className='flex justify-start my-10 mx-6'>
        <div className='flex mr-12 ml-8'><p className=''>id</p> </div>
        <div className='flex mr-24'><p className='mr-3'> <FaSort /> </p> title</div>
        <div className='flex mr-16'><p className='mr-3'> <FaSort /> </p> duration</div>
        <div className='flex mr-40'><p className='mr-3'> <FaSort /> </p>description </div>
        <div className='mr-40'><p>status</p></div>
        <div><p>Action</p></div>
      </div>

      <div>
        <hr className='flex justify-around' style={{ padding: '0px 2px', position: 'fixed', position: "relative", border: "none", height: "2px", background: "gray", display: "flex", justifyContent: "space-between", marginRight: "70px", marginLeft: "50px" }} />
      </div>
      {
        movies.map((movie, index) => {
          const id = movie.id;
          const title = movie.title;
          const duration = movie.duration
          const description = movie.description
          return (
            <div key={index} className="flex justify-start my-10 mx-16 hover:bg-blue-400">
              <div className="flex mr-12">
                <p className="mr-5"> {id} </p>{" "}
              </div>


              <div className="flex mr-12">
                <p className="mr-5 w-10"> {title} </p>{" "}
              </div>
              <div className="flex mr-12">
                <p className="mr-5 w-10"> {formatDuration(duration)} </p>{" "}
              </div>
              <div className="flex mr-12">
                <p className="mr-5 w-44"> {description ? description.slice(0, 50) + "..." : ''} </p>{" "}
              </div>
              <div className="mr-14">
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
          )
        })
      }
    </div>
  )
}

export default Page