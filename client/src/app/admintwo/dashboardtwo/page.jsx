"use client"
import Link from 'next/link';
import React, { PureComponent } from 'react';
import { CiExport } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import {VictoryPie} from 'victory';
import {VictoryLabel} from 'victory';
import { FaCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const card = [
  {
  title:"System User",
  Icon: MdPeopleAlt,
  dataNumber:"37",
  monthPercent :"+12 This Month"
  },
  {
    title:"System User",
    Icon: MdPeopleAlt,
    dataNumber:"37",
    monthPercent :"+12 This Month"
  },
  {
    title:"System User",
    Icon:MdPeopleAlt,
    dataNumber:"37",
    monthPercent :"+12 This Month"
    }
  ]

  const graph = [
    {
      Icon:FaCircle ,
      name:"Name",
      size:"500",
    },
    {
      Icon:FaCircle ,
      name:"Name",
      size:"500",
    },
    {
      Icon:FaCircle ,
      name:"Name",
      size:"500",
    },
    {
      Icon:FaCircle ,
      name:"Name",
      size:"500",
    },
    {
      Icon:FaCircle ,
      name:"Name",
      size:"500",
    },

  ]

const page = () => {
  
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
  return (
    <div className= "w-100">
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
            <button  className="shadow border  bg-slate-900 text-white size-lg py-2 px-4">Add Filter</button>

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

        <div className=' flex justify-around mt-10 gap-9 mb-16'>
            {card.map(({Icon , dataNumber,title,monthPercent}, ind) => (
                // 
                <Link key={ind} href={""}>
                    <div className=' shadow-2xl  py-3 px-10  mb-3 h-40'>
                        <div className='flex m-5'>
                            <div className='mr-5 text-lg'>{title}</div>
                            <div> <Icon className='w-10 h-10 bg-slate-900'  style ={{fill:"white"}}/> </div>
                        </div>
                        <div className='text-lg'>{dataNumber}</div>
                        <div className='mb-16 text-lg'>{monthPercent}</div>
                        
                    </div>
                </Link>
                ))}
        </div>
        
        <fieldset className=' flex justify-center w-200 ml-50'>
          {/* <legend className='bg-slate-900 text-white'>Program on Category:</legend> */}
          <div className='flex justify-start shadow-xl mt-10'>
          <div className='mt-10 text-xl'><h1>Program on Category</h1></div>
            <div>
              <svg viewBox="0 0 400 400"  className='w-80 h-80  mt-16'>
                  <VictoryPie
                    standalone={false}
                    width={300} height={300}
                    data={[
                    
                      {x: "B", y: 33},
                      {x: "C", y: 6},
                      {x: "C", y: 33},
                      {x: "C", y: 33},
                    ]}
                    innerRadius={70} labelRadius={100}
                    style={{ labels: { fontSize: 20, fill: "white"}}}
                  />
                
                  <VictoryLabel
                    textAnchor="middle" verticalAnchor="middle"
                    x={150} y={150}
                    style={{fontSize: 27}}
                    text="Department"
                  />
              </svg>
            </div>
              
            {/* <div><h1>Program on Category</h1></div> */}
            <div className='mt-28'>
            {graph.map(({Icon , size,name}, ind) => (
                // 
                <div key={ind}  className='flex'>
                    <div >
                      <div className='flex '>
                        <div><Icon className='w-100 h-100 mr-4'/> </div>
                        <div className='mr-16'><h1>{name}</h1></div>
                      </div>
                    </div>
                    <div>{size}</div>
                </div>
                ))}
            </div>
        </div>
        </fieldset>
        


        <div><h1 className='flex justify-center mt-10'>Program on Category</h1></div>
        <div className='flex justify-center shadow-xl mt-10  w-100'>
                
          <div className='mr-10'>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
          </div>

          <div>

          <div className='mt-16'>
          {graph.map(({Icon , size,name}, ind) => (
              // 
              <div key={ind}  className='flex'>
                  <div >
                    <div className='flex '>
                      <div><Icon className='w-100 h-100 mr-4'/> </div>
                      <div className='mr-28'><h1>{name}</h1></div>
                    </div>
                  </div>
                  <div>{size}</div>
              </div>
              ))}
          </div>
          </div>
            
        </div>
    </div>
  )
}

export default page