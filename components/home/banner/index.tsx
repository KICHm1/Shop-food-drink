"use client";
import React from "react";
import Image from "next/image";
import logo__food from "@pageImage/home/banner/logoFood.png";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BannerSkeleton } from "../../listSkeleton";
import { transform, wrap } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
const container =
  screen.width >= 1440
    ? 1200
    : screen.width >= 1024
    ? screen.width - 240
    : screen.width - 40 ;
export default function Index(props: any) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [translate, setTranslte] = useState(0);
  const [startTranslate, setStartTranSlate] = useState(0);
  const data = props.data.filter((banner: any) => banner.banner == true);
  const image: Array<String> = [];
  const location: Array<String> = [];
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? (container + translate) : -(container + translate),
        opacity: 1
      };
    },
    center: {
      zIndex: 3,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 5,
        x: direction < 0 ? container : -container,
        opacity: 1
      };
    }
  };
  if (props) {
    const dataLength = data.length;
    for (let i = 0; i < dataLength; i++) {
      if (data[i].banner == true) {
        image.push(data[i].url);
        location.push(data[i].name);
      }
    }
  }
  const swipeConfidenceThreshold = screen.width / 100;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const imageIndex = wrap(0, image.length, page);
  const setSlide = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  var i : number;
  var check: Boolean;
  useEffect(() =>{
    function autoSlideTime() {
      if (check) {
        setSlide(1);
      } else check = true;
    }
    const interval = setInterval(autoSlideTime, 5000);
    
  return () => clearInterval(interval);
  })
  

  function backClick() {
    setSlide(-1);
    check = false;
  }
  function nextClick() {
    setSlide(1);
    check = false;
  }
  return (
    <motion.section className="snap-center w-[100%] h-[auto] mt-[100px]  bg-[#fff]">
      <div className="xl:mx-[auto] relative justify-between lg:px-[120px] p-[20px] pt-0 max-w-[1440px]  flex-col">
        <div className="flex ">
          <div className="flex flex-col justify-between w-[100%]">
            <div className="w-[100%]  h-[auto] ">
              <div className="relative select-none">
                {props.getLoading ? (
                  <BannerSkeleton />
                ) : (
                  <div>
                    <div className="flex  overflow-hidden relative select-none max-w-[1200px] lg:h-[500px] sm:h-[400px] h-[300px] lg:w-[calc(100vw-240px)] w-[calc(100vw-50px)] left-0 ">
                      <button
                        onClick={backClick}
                        className="absolute z-10 left-0 lg:w-[30px] sm:w-[30px] w-[35px] flex items-center justify-center top-[50%]  translate-y-[-50%] h-[100%] opacity-70 bg-[#fff] "
                      >
                        &lt;
                      </button>
                      <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                          className="select-none cursor-pointer absolute w-[300%] left-[-100%] flex h-[100%]"
                          drag="x"
                          dragConstraints={{ left:0 , right : 0}}
                          transition={{
                            x: { type: "easeInOut", duration: 1 },
                            opacity: { duration: 1 },
                          }}
                          onDragStart={(e: MouseEvent) => {
                            setStartTranSlate(e.clientX);
                            check = false;
                            e.preventDefault()
                          }}
                          dragElastic={1}
                          onDrag={(e: MouseEvent) => {
                            setTranslte(e.clientX - startTranslate);
                            check = false;
                            e.preventDefault()
                          }}
                          style={{ touchAction: "none" }}
                          onDragEnd={(e, { offset, velocity }: any) => {
                            check = false;
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                              setSlide(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                              setSlide(-1);
                            }
                            setTranslte(0);
                          }}
                        >
                          <motion.a
                            href="./"
                            className={`w-[100%] select-none relative z-[2] h-[100%] left-[-100%] `}
                          
                          >
                            <Image
                              className={` select-none relative z-[2]   opacity-100 object-cover w-[100%] h-[100%]`}
                              src={
                                imageIndex == 0
                                  ? `/${image[image.length - 1]}`
                                  : `/${image[imageIndex - 1]}`
                              }
                              alt=""
                              width={1440}
                              height={900}
                            ></Image>
                          </motion.a>

                          <motion.a
                            key={page}
                            href={`./${location[imageIndex]}`}
                            dragElastic={1}
                            custom={direction}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={variants}
                            transition={{
                              x: { type: "easeInOut", duration: 1 },
                              opacity: { duration: 1 },
                            }}
                            className="select-none pointer-events-none relative w-[100%] h-[100%]"
                          >
                            <Image
                              className={`select-none absolute left-[-100%] top-0 z-[0]  object-cover w-[100%] h-[100%]`}
                              src={imageIndex == 0
                                ? `/${image[image.length - 1]}`
                                : `/${image[imageIndex - 1]}`}
                              alt=""
                              width={1440}
                              height={900}
                            ></Image>
                            <Image
                              className={`select-none z-[3] relative  object-cover w-[100%] h-[100%]`}
                              src={`/${image[imageIndex]}`}
                              alt=""
                              width={1440}
                              height={900}
                            ></Image>
                            <Image
                              className={`select-none absolute right-[-100%] top-0 z-[0]  object-cover w-[100%] h-[100%]`}
                              src={imageIndex == image.length - 1
                                ? `/${image[0]}`
                                : `/${image[imageIndex + 1]}`}
                              alt=""
                              width={1440}
                              height={900}
                            ></Image>
                          </motion.a>

                          <motion.a
                            href="./"
                            className={`w-[100%] relative z-[2] h-[100%] right-[-100%] `}
                          >
                            {" "}
                            <Image
                              className={` z-[3] relative opacity-100 object-cover w-[100%] h-[100%]`}
                              src={
                                imageIndex == image.length - 1
                                  ? `/${image[0]}`
                                  : `/${image[imageIndex + 1]}`
                              }
                              alt=""
                              width={1440}
                              height={900}
                            ></Image>{" "}
                          </motion.a>
                        </motion.div>
                      </AnimatePresence>
                      <button
                        onClick={nextClick}
                        className="absolute right-0 w-[30px] z-[3] flex items-center justify-center top-[50%]  translate-y-[-50%] h-[100%] opacity-70 bg-[#fff] "
                      >
                        &gt;
                      </button>
                    </div>
                    {/* <ul className="flex gap-[5px]  w-[100%] absolute bottom-0 translate-y-[100%]">
                      {data.map((e: any, item: any) => {
                        if (page === item)
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
                    </ul> */}
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
