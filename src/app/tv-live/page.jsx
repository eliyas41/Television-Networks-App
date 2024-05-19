import React from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavBar from "../../components/Nav/NavBar"

export default function MenuAppBar() {

  return (
    <section className='flex'>
      <div className='bg-custom-white-light md:w-[12%] hidden md:block'>
        <NavBar />
      </div>

      <Box sx={{ flexGrow: 1, height: "150px", bgcolor: '#1B1C3A' }}>
        <AppBar position="static" sx={{ bgcolor: '#1B1C3A', height: "150px", paddingTop: "40px" }}>
          <Toolbar>
            <Link href="/">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <ArrowBackIosIcon className='rounded-full bg-custom-white-light' />
              </IconButton>
            </Link>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: "10px" }}>
              Movies
            </Typography>

            <header className="w-[30%]">
              <div className='text-white flex justify-between mr-14'>
                <div className='hidden md:block'><CloudRoundedIcon /> <small><span>18<sup>o</sup></span></small></div>
                <div className='hidden md:block'><small>5:30PM</small></div>
                <div className='text-gray-300 pl-14'><SearchRoundedIcon /></div>
              </div>
            </header>


            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
          <div className='w-80 ml-6 mt-4'>
            <div className='flex justify-between'>
              <Link href="/recommend" className='hover:font-medium'>Recommended</Link>
              <Link href="/popular" className='hover:font-medium'>Popular</Link>
              <Link href="/feature" className='hover:font-medium'>Featured</Link>
            </div>
          </div>
        </AppBar>


        <div className='flex '>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="./paella.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </Box>
    </section>
  );
}
