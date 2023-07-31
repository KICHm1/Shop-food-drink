'use client' ;
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/header/logo.png";
import search from "../../assets/images/header/Seacrh.svg";
import shop from "../../assets/images/header/shop.svg";
import { motion } from "framer-motion";
import { useState } from "react";
const tap={
  onTap: {
    y : ["999px","-80px","-90px","80px"],
    borderRadius : ["100%","100%","100%", "0%"],
    scale : ["5%","5%","5%","100%"],
    transition :{
      type : "easeInOut",
      bounce : 0.8,
      duration : 1.5,
      times : [0, 0.5 , 0.6 , 0.8 ],
      
    }
  },
  offTap : {
    y: ["80px","-80px","-100px","999px"],
    borderRadius : ["0%","100%","100%", "100%"],
    scale : ["100%","5%","5%","10%"],
    transition :{
      type : "easeInOut",
      bounce : 0.8,
      duration : 1.5,
      times : [0, 0.5 , 0.6 , 0.8 ]
    }
  }
}
const Index = (props : any) => {
  const [btnState, setBtnState] = useState<false | true> (false);
  let classClickLi1 = btnState
    ? "translate-x-[0px] translate-y-[10px] rotate-[-45deg]"
    : "translate-x-[0px] translate-y-[0px] rotate-[0deg]";
  let classClickLi2 = btnState ? "translate-x-[100px]" : "translate-x-[0px]";
  let classClickLi3 = btnState
    ? " translate-y-[-10px] rotate-[45deg]"
    : "translate-y-[0px] rotate-[0deg] ";
  let setDisplay = btnState
    ? "w-[100%] h-screen top-[100px] opacity-100"
    : "w-[100%] h-screen  top-[-150vh]";
  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  return (
    <header className="w-[100vw]  z-[99] bg-[#ffffff]  fixed top-0 left-0 after:content-[''] after:w-[100%] after:h-[2px] after:bg-[#F0F0ED] after:absolute after:bottom-0  ">
      <div className="items-center z-[99] relative lg:px-[120px] px-[20px] flex w-[100%] h-[100px] justify-between mx-[auto] max-w-[1440px] ">
      <Image src={logo} alt=""></Image>
      <div className="flex ">
      <button
        onClick={handleClick}
        className={`z-[98] group list-none p-[20px] overflow-hidden gap-[5px] flex lg:hidden flex-col`}
      >
        <li
          className={`${classClickLi1}  transition-transform duration-[1s] delay-[0.2s]  w-[40px] h-[5px] rounded-[10px] bg-[#f95555] `}
        ></li>
        <li
          className={`${classClickLi2}  transition-transform duration-[1s] delay-[0.2s]   w-[40px] h-[5px] rounded-[10px] bg-[#f95555]`}
        ></li>
        <li
          className={`${classClickLi3}  transition-transform duration-[1s] delay-[0.2s]   w-[40px] h-[5px] rounded-[10px] bg-[#f95555]`}
        ></li>
      </button>
      <motion.ul
        initial="offTap"
        animate ={btnState ? "onTap" : "offTap" }
        variants={tap}
        className={`lg:translate-y-0 z-0 flex absolute lg:text-[#000] lg:opacity-100 bg-[#f95555]  transition-[top]  lg:flex-row duration-[1.2s]   flex-wrap  lg:h-[auto] lg:static lg:bg-inherit content-center lg:p-0  font-[400] text-[18px] lg:justify-between items-center
       gap-[30px] lg:hidden   translate-y-[80px]  justify-start text-[#fff] h-[1024px] flex-col  pt-[60px]   left-0 right-0   `}
      >
        <li>
          <Link
            scroll={false}
            onClick={() => setBtnState(false)}
            href="/"
            className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms]  after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff]"
          >
            { "Trang chủ"}
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            onClick={() => setBtnState(false)}
            href="/#popular"
            className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms]   after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff]"
          >
            { "Phổ biến"}
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            onClick={() => setBtnState(false)}
            href="/#food"
            className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms]   after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff]"
          >
            {"Thức ăn"}
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            onClick={() => setBtnState(false)}
            href="/#drink"
            className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms] after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff]"
          >
            { "Nước uống"}
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            onClick={() => setBtnState(false)}
            href="/shop"
            className="lg:hidden block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms] after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff]"
          >
            { "Lịch sử mua hàng"}
          </Link>
        </li>
      </motion.ul>
        <ul
        className={`lg:translate-y-0 z-0 absolute lg:text-[#000] lg:opacity-100 bg-[#f95555]  transition-[top]  lg:flex-row duration-[1.2s]   flex-wrap  lg:h-[auto] lg:static lg:bg-inherit content-center lg:p-0  font-[400] text-[18px] lg:justify-between items-center
       gap-[30px] lg:flex hidden  justify-start text-[#fff] h-[1024px] flex-col  pt-[60px]   left-0 right-0   `}
      >
        <li>
          <Link
            scroll={false}
            onClick={() => setBtnState(false)}
            href="/"
            className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms]  after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff]"
          >
            { "Trang chủ"}
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            onClick={() => setBtnState(false)}
            href="/#popular"
            className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms]   after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff]"
          >
            { "Phổ biến"}
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            onClick={() => setBtnState(false)}
            href="/#food"
            className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms]   after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff]"
          >
            {"Thức ăn"}
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            onClick={() => setBtnState(false)}
            href="/#drink"
            className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms] after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff]"
          >
            { "Nước uống"}
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            onClick={() => setBtnState(false)}
            href="/shop"
            className="lg:hidden block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms] after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff]"
          >
            { "Lịch sử mua hàng"}
          </Link>
        </li>
        </ul>
        <div className="flex gap-[10px]">
          <li className="xl:w-[300px] lg:w-[200px] lg:flex hidden justify-end">
            <span className=" flex items-center transition-width duration-[1.5s] hover:shadow-[0_0_30px_-10px_#f95555] hover:xl:w-[300px] hover:lg:w-[200px]   overflow-hidden rounded-full group justify-end w-[56px] h-[56px]  ">
              <input
                type="search"
                name="search"
                id="#search"
                className="pl-[10px] outline-0  h-[30px]"
              />
              <Image
                src={search}
                className="rounded-full  hover:z-[1] z-[0]"
                alt=""
              ></Image>
            </span>
          </li>
          <li
            data-count="8"
            className="lg:flex hidden items-center relative  after:content-[attr(data-count)] after:flex after:justify-center after:text-[#fff] after:text-[12px] after:font-[500] after:items-center after:top-0 after:right-0 after:absolute after:w-[20px] after:h-[20px] after:rounded-full after:bg-[#f95555]"
          >
            <Link href="/shop">
              <Image
                src={shop}
                alt="shop"
                className="rounded-full hover:shadow-[0_0_30px_-10px_#f95555] hover:z-[1] z-[0] "
              ></Image>
            </Link>
          </li>
        </div>
    </div>
      </div>
    </header>
  );
};

export default Index;
