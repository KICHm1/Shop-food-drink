"use client";
import Image from "next/image";
import Banner from "../components/home/banner";
import Popular from "../components/home/popular";
import Food from "../components/home/food";
import Drink from "../components/home/drink";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
const container = {
  whileInview: {
    transition: {
      staggerChildren: 0.35,
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  whileInview: {
    opacity: 1,
    y: [-20, 0],
    scale: [0.8, 1],
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
};

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    axios.get("http://localhost:3001/api/source").then((req) => {
      setData(req.data);
      setLoading(false);
    });
  }, []);
  return (
    <main className=" snap-y">
      <Banner
        data={data}
        parentAnimate={container}
        childAnimate={item}
        getLoading={loading}
      ></Banner>
      <section className="bg-[#fff8ef]  ">
        <Popular
          data={data}
          parentAnimate={container}
          childAnimate={item}
          getLoading={loading}
        ></Popular>
        <Food
          data={data}
          parentAnimate={container}
          childAnimate={item}
          getLoading={loading}
        ></Food>
        <Drink
          data={data}
          parentAnimate={container}
          childAnimate={item}
          getLoading={loading}
        ></Drink>
      </section>
    </main>
  );
}
