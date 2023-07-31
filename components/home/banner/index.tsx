"use client";
import React from "react";
import Image from "next/image";
import logo__food from "@pageImage/home/banner/logoFood.png";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BannerSkeleton } from "../../listSkeleton";
import { motion, AnimatePresence } from "framer-motion";
export default function Index(props: any) {
  const data = props.data.filter((banner: any) => banner.banner == true);
  const [btnState, setBtnState] = useState(0);
  var check: Boolean;
  const timeSlide = setInterval(autoSlideTime, 5000);
  function autoSlideTime() {
    if (check) {
      let item = btnState;
      if (item == 3) item = 0;
      else item++;
      setBtnState((btnState) => (btnState = item));
      clearInterval(timeSlide);
    } else check = true;
  }

  function backClick() {
    clearInterval(timeSlide);
    if (btnState === 0) setBtnState((btnState) => 3);
    else setBtnState((btnState) => btnState - 1);
    check = false;
  }
  function nextClick() {
    clearInterval(timeSlide);
    if (btnState === 3) return setBtnState((btnState) => 0);
    else setBtnState((btnState) => btnState + 1);
    check = false;
  }
  function clickBox(item: any) {
    clearTimeout(timeSlide);
    setBtnState((btnState) => (btnState = item));
    check = false;
  }
  return (
    <motion.section
      className="snap-center w-[100%] h-[auto] mt-[100px]  bg-[#fff]"
    >
      <div className="xl:mx-[auto] relative justify-between lg:px-[120px] p-[20px] pt-0 max-w-[1440px]  flex-col">
        <div className="flex ">
          <div className="flex flex-col justify-between w-[100%]">
            <div className="w-[100%]  h-[auto] ">
              <div className="relative">
                {props.getLoading ? (
                  <BannerSkeleton />
                ) : (
                  <div>
                    <div className="flex relative overflow-hidden max-w-[1200px] lg:h-[500px] sm:h-[400px] h-[300px] lg:w-[calc(100vw-240px)] w-[calc(100vw-50px)] left-0 ">
                      <button
                        onClick={backClick}
                        className="absolute z-10 left-0 lg:w-[30px] sm:w-[30px] w-[35px] flex items-center justify-center top-[50%]  translate-y-[-50%] h-[100%] opacity-70 bg-[#fff] "
                      >
                        &lt;
                      </button>
                      {data.map((product: any, item: number) => {
                        if (btnState == item)
                          return (
                            <a href="./">
                              {" "}
                              <Image
                                key={item}
                                className={` transition-all delay-[0.2s] z-2 absolute left-0 opacity-100 object-cover w-[100%] h-[100%]`}
                                src={`/${product.url}`}
                                alt=""
                                width={1440}
                                height={900}
                              ></Image>{" "}
                            </a>
                          );
                        else
                          return (
                            <Image
                              key={item}
                              className=" transition-all delay-[100ms] absolute  opacity-0 object-cover w-[100%] h-[100%]"
                              src={`/${product.url}`}
                              alt=""
                              width={1440}
                              height={900}
                            ></Image>
                          );
                      })}
                      <button
                        onClick={nextClick}
                        className="absolute right-0 w-[30px]  flex items-center justify-center top-[50%]  translate-y-[-50%] h-[100%] opacity-70 bg-[#fff] "
                      >
                        &gt;
                      </button>
                    </div>
                    <ul className="flex gap-[5px]  w-[100%] absolute bottom-0 translate-y-[100%]">
                      {data.map((e: any, item: any) => {
                        if (btnState === item)
                          return (
                            <button
                              onClick={() => clickBox(item)}
                              key={item}
                              className="w-[calc((100%-15px)/4)] h-[10px]  transition-all origin-center bg-[#f95555] rounded-[2px]"
                            ></button>
                          );
                        else
                          return (
                            <button
                              onClick={() => clickBox(item)}
                              key={item}
                              className="w-[calc((100%-15px)/4)] h-[10px] transition-all origin-center bg-[#f95555] opacity-25 rounded-[2px]"
                            ></button>
                          );
                      })}
                    </ul>
                  </div>
                )}
              </div>
              <div className="mt-[20px] group mb-[20px]  rounded-[30px] flex-wrap gap-[30px] lg:w-[400px] sm:w-[300px] w-[150px] lg:h-[50px] sm:h-[40px] h-[35px] px-[15px] py-[6px] transition-all duration-[1s] delay-[0.2s] cursor-pointer  hover:shadow-[inset_500px_0_0_-100px_#F95555] shadow-[inset_190px_0_0_-100px_#F95555] flex content-center bg-[#f9555510] ">
                <Image
                  src={logo__food}
                  alt=""
                  className="sm:block hidden"
                ></Image>
                <span className=" relative flex flex-wrap items-center  text-[#2B2B2B] font-[600] transition-all duration-[1.5s] group-hover:text-[#fff] lg:text-[20px] sm:text-[16px] text-[10px]">
                  Ăn nhanh, lấy tiền nhanh
                </span>
              </div>
              <h1 className="lg:leading-[70px] w-[100%]  sm:leading-[50px] leading-[32px] font-[700] lg:text-[60px] sm:text-[40px] text-[20px]">
                Be The <span className="text-[#f95555]">First</span> Delivery &
                Easy Pick Up
              </h1>
              <p className="mt-[20px] font-[400] lg:text-[18px] sm:text-[14px] text-[12px] lg:leading-[32px] sm:leading-[28px] leading-[24px]">
                We will deliver your food within 30 minutes in your town,If we
                would fail,we will give the food free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
