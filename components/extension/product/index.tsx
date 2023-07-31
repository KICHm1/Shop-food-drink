"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo__food from "@pageImage/home/banner/logoFood.png";
import avatar from "@pageImage/home/banner/avatar.png";
import hamburger from "@pageImage/home/banner/hamburger.png";
import ProductPage from "../../../app/product/[id]/page";
import { motion } from "framer-motion";
interface Props {
  width: String;
  key: any;
  src: any;
  id: string,
  name: String;
  detail: String;
  money: String;
  type: String;
  variants : any;
}
const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  whileInview: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 200,
  },
};



const Index = (props: Props) => {
  return (
    <motion.li
      variants={props.variants}
      className={`lg:flex-col lg:h-[auto] h-[150px] group flex gap-[10px] justify-between  bg-[#c9c9c94d] hover:bg-[#f95555]  hover:scale-105 hover:z-[2] border-[#f95555] rounded-[20px] relative ${props.width} w-[100%] transition-[transform,background] duration-[1s] z-[1]`}
    >
      <div
        className={`lg:rounded-[20px_20px_0_0] rounded-[20px_0_0_20px] flex overflow-hidden lg:w-[100%] w-[40%] m-0`}
      >
        <Image
          src={props.src}
          className="w-[100%] group-hover:scale-150 transition-[transform,background] duration-[2s]  "
          alt="anh"
          width={180}
          height={180}
        ></Image>
      </div>
      <div className="flex flex-col flex-wrap justify-around content-center my-[10px] lg:w-[100%] w-[35%]">
        <h2 className="font-[700] flex justify-center items-center text-[24px]">
          {props.name}
        </h2>
        <p className="font-[500] text-[14px]">{props.detail}</p>
      </div>
      <div className="lg:gap-[10px] relative my-[10px] flex-wrap items-center flex flex-col justify-around">
        <p className="flex justify-center lg:mr-0 mr-[20px] font-[600] items-center">
          {props.money}
        </p>
        <Link
          href={`product/${props.id}`}
          className="text-[#fff] lg:static flex justify-center lg:translate-x-[0] lg:translate-y-0 scale-105  absolute bottom-0 translate-x-[-30%] translate-y-[50%] lg:w-[80%] lg:rounded-[20px] lg:py-[10px] w-[100px] font-[700] px-[20px] rounded-[5px] border-[1px] bg-[#f95555]  text-[18px]"
        >
          Buy
        </Link>
      </div>
    </motion.li>
  );
};

export default Index;
