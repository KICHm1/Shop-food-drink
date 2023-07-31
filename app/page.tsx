"use client"
import Image from 'next/image'
import Banner from "../components/home/banner"
import Popular from "../components/home/popular"
import Food from "../components/home/food"
import Drink from "../components/home/drink"
import { useState, useEffect  } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const  container = {
  whileInview : {
    transition : {
      staggerChildren : 0.35,
      type : "spring",
      bounce : 0.4,
      duration : 1,
    },
  },
}
const item = {
  hidden : {
    opacity : 0,
    y : 50,
    scale : 0,
  },
  whileInview : {
    opacity : 1,
    y :[-20, 0], 
    scale : [0.8, 1],
  },
  exit : {
    opacity : 0,
    y: 50,
    scale: 0,
  }
}

export default function Home() {
  const [data, setData ] = useState([]);
  const [loading , setLoading] = useState(true)
  useEffect(  function()  {
    fetch('/api/source')
    .then ((Response) => Response.json())
    .then((req) => {
      setData(req)
      setLoading(false)
    })
  },[]);
  return (
  <main className=' snap-y'>
    <Banner data={data} parentAnimate = {container} childAnimate = {item} getLoading={loading}></Banner>
    <Popular data={data } parentAnimate = {container} childAnimate = {item} getLoading={loading}></Popular>
    <Food data={data} parentAnimate = {container} childAnimate = {item}  getLoading={loading}></Food>
    <Drink data={data} parentAnimate = {container} childAnimate = {item}  getLoading={loading}></Drink>
  </main>
  )
}
