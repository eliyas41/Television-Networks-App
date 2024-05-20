import React from 'react'
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import SensorsIcon from '@mui/icons-material/Sensors';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SettingsInputSvideoOutlinedIcon from '@mui/icons-material/SettingsInputSvideoOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';

const MovieCard = () => {
  return (
    <section className='flex flex-row items-center justify-between gap-1'>
      {/* {
        types.map(type => (
          <Link key={type.id} href={type.name === "Movies" ? "tv-live" : "#"} passHref>
            <Card className="bg-custom-dark-light-blue flex flex-col items-center gap-14 cursor-pointer" sx={{ width: 220, height: 250 }}>
              <CardActions className='flex justify-center items-center w-48 h-24 bg-custom-dark-light mt-3' disableSpacing>
                <IconButton aria-label="add to favorites">
                  <SensorsIcon className='text-white w-24 h-24 font-light' />
                </IconButton>
              </CardActions>
              <CardContent>
                <Typography className='text-white font-light text-xl' variant="body2" color="text.secondary">
                  {type.name}
                </Typography>
                <small className='text-white'>+5000 Channels</small>
              </CardContent>
            </Card>
          </Link>
        )
        )
      } */}
      <Link href="#" passHref>
        <Card className="bg-custom-dark-light-blue flex flex-col items-center gap-14 cursor-pointer" sx={{ width: 220, height: 250 }}>
          <CardActions className='flex justify-center items-center w-48 h-24 bg-custom-dark-light mt-3' disableSpacing>
            <IconButton aria-label="add to favorites">
              <SensorsIcon className='text-white w-24 h-24 font-light' />
            </IconButton>
          </CardActions>
          <CardContent>
            <Typography className='text-white font-light text-xl' variant="body2" color="text.secondary">
              Live TV's
            </Typography>
            <small className='text-white'>+5000 Channels</small>
          </CardContent>
        </Card>
      </Link>

      <Link href="/tv-live" passHref>
        <Card className="bg-custom-dark-light-blue flex flex-col items-center gap-14" sx={{ width: 220, height: 250 }}>
          <CardActions className='flex justify-center w-48 h-24 bg-custom-dark-light mt-3' disableSpacing>
            <IconButton aria-label="add to favorites">
              <SettingsInputSvideoOutlinedIcon className='text-white w-24 h-24 font-light' />
            </IconButton>
          </CardActions>
          <CardContent>
            <Typography className='text-white font-light text-xl' variant="body2" color="text.secondary">
              Movies
            </Typography>
            <small className='text-white'>+500 Movies</small>
          </CardContent>
        </Card>
      </Link>

      <Link href="#" passHref>
        <Card className="bg-custom-dark-light-blue flex flex-col items-center gap-14" sx={{ width: 220, height: 250 }}>
          <CardActions className='flex justify-center w-48 h-24 bg-custom-dark-light mt-3' disableSpacing>
            <IconButton aria-label="add to favorites">
              <LiveTvOutlinedIcon className='text-white w-24 h-24 font-light' />
            </IconButton>
          </CardActions>
          <CardContent>
            <Typography className='text-white font-light text-xl' variant="body2" color="text.secondary">
              TV Shows
            </Typography>
            <small className='text-white'>+900 Series</small>
          </CardContent>
        </Card>
      </Link>

      <Link href="#" passHref>
        <Card className="bg-custom-dark-light-blue flex flex-col items-center gap-14" sx={{ width: 220, height: 250 }}>
          <CardActions className='flex justify-center w-48 h-24 bg-custom-dark-light mt-3' disableSpacing>
            <IconButton aria-label="add to favorites">
              <SportsBaseballOutlinedIcon className='text-white w-24 h-24 font-light' />
            </IconButton>
          </CardActions>
          <CardContent>
            <Typography className='text-white font-light text-xl' variant="body2" color="text.secondary">
              Sports
            </Typography>
            <small className='text-white'>+200 Channels</small>
          </CardContent>
        </Card>
      </Link>
    </section>
  )
}

export default MovieCard
