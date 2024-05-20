// import React from 'react'
// import Home from '@/components/Home';

// const page = () => {
//   return (
//     <>
//       <Home />
//     </>
//   )
// }

// export default page;

"use client"
import Home from '@/components/Home';


const page = ({ children }) => {
  return (
    <div >
      {children}
    </div>
  )
}

export default page;


