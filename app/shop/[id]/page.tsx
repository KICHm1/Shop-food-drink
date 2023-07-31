<<<<<<< HEAD
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
const Page = ({ params }: any) => {
  const [api, setApi] = useState([]);
  useEffect(function () {
    fetch("/api/post")
      .then((Response) => Response.json())
      .then((req) => setApi(req));
  }, []);
  const data: any =
    params.id.toUpperCase() == "XEMTATCA"
      ? api.map((e: any) => e)
      : api.filter(
          (element: any) => element.user.idStudent == params.id.toUpperCase()
        );
  if (data.length != 0)
    return (
      <section className="py-[140px]">
        <div className="max-w-[1440px] lg:px-[120px] px-[20px] gap-[20px] flex flex-wrap list-none mx-auto">
          {data.map((user: any, index: number) => {
            return (
              <li
                key={user.id}
                className=" rounded-[20px]  lg:w-[calc((100%-40px)/3)] w-[100%] flex lg:flex-col"
              >
                <div className="lg:w-[100%] h-[auto] w-[50%] overflow-hidden lg:rounded-[20px_20px_0_0] rounded-[20px_0_0_20px]">
=======
"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState , useEffect } from 'react';
const Page = ( {params } : any ) => {
    const [api , setApi] = useState([]);
    useEffect(function () {
        fetch("/api/post")
          .then((Response) => Response.json())
          .then((req) =>
            setApi(req)
          );
      }, []);
    const data :any  = params.id.toUpperCase() == "XEMTATCA"? api.map((e : any) => e) : api.filter( (element :any  ) => element.user.idStudent == params.id.toUpperCase() ) ;
    if(data.length !=0) return (
        <section className="py-[140px]">
        <div className="max-w-[1440px] lg:px-[120px] px-[20px] gap-[20px] flex flex-wrap list-none mx-auto">
          {data.map((user: any, index : number) => {
            return (
              <li
                key={user.id}
                className="border-[2px] rounded-[20px] border-[#f95555] lg:w-[calc((100%-40px)/3)] flex lg:flex-col gap-[20px]"
              >
                <div className="lg:w-[100%] w-[50%] overflow-hidden lg:rounded-[20px_20px_0_0] rounded-[20px_0_0_20px]">
>>>>>>> e79bc2d72e1615fdbfd7dccbb4d70a4c71205dad
                  <Image
                    src={`/${user.user.data.url}`}
                    width={1440}
                    height={900}
<<<<<<< HEAD
                    alt=""
                    className="h-[100%] object-cover"
                  ></Image>
                </div>
                <div className="lg:border-[2px] justify-between flex lg:w-[100%] w-[50%] lg:border-t-0 border-[2px] border-l-0 border-[#f95555] lg:rounded-[0_0_20px_20px] rounded-[0_20px_20px_0]  lg:p-[0.8vw] p-[3vw]">
                  <div className="flex flex-col  justify-between  ">
                    <div className="font-[600] text-[#f95555] lg:gap-[10px] flex-nowrap flex-col content-start items-baseline flex ">
                      <p className="lg:text-[1.5vw] text-[2.2vw] ">Tên : 
                      </p>
                      <p className="font-[600]  h-[100%] align-baseline flex items-end text-[#000] lg:text-[1.2vw] text-[1.5vw] capitalize  ">
                        {user.user.name}
                      </p>
                    </div>
                    <div className="font-[600] text-[#f95555] lg:gap-[10px]  flex-col content-start items-baseline flex lg:text-[1.5vw] text-[2.2vw]">
                      <p className="flex items-end ">Mã số sinh viên : </p>
                      <p className="font-[600] text-[#000]  flex items-center  lg:text-[1.2vw] text-[1.5vw] uppercase">
                        {user.user.idStudent}
                      </p>
                    </div>
                    <div className="font-[600] text-[#f95555] lg:gap-[10px] flex-col content-start items-baseline flex lg:text-[1.5vw] text-[2.2vw]">
                      <p className="flex items-end ">Địa chỉ : </p>
                      <p className="font-[600] text-[#000]  flex items-center lg:text-[1.2vw] text-[1.5vw] ">
                        {user.user.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between ">
                    <div className="font-[600] text-[#f95555] lg:gap-[10px] flex-col content-start items-baseline flex lg:text-[1.5vw] text-[2.2vw]">
                      <p className="flex items-end ">Tên Sản Phẩm : </p>
                      <p className="font-[600] text-[#000]  flex items-center lg:text-[1.2vw] text-[1.5vw] ">
                        {user.user.data.name}
                      </p>
                    </div>
                    <div className="font-[600] text-[#f95555] lg:gap-[10px] flex-col content-start items-baseline flex lg:text-[1.5vw] text-[2.2vw]">
                      <p className="flex items-end ">Số Lượng : </p>
                      <p className="font-[600] text-[#000]  flex items-center lg:text-[1.2vw] text-[1.5vw] ">
                        {user.user.number}
                      </p>
                    </div>
                    <div className="font-[600] text-[#f95555] lg:gap-[10px] flex-col content-start items-baseline flex lg:text-[1.5vw] text-[2.2vw]">
                      <p className="flex items-end ">Thành Tiền : </p>
                      <p className="font-[600] text-[#000]  flex items-center lg:text-[1.2vw] text-[1.5vw] ">
                        {user.user.number * user.user.data.money} VND
                      </p>
                    </div>
=======
                    alt="null"
                  ></Image>
                </div>
                <div className="flex flex-col justify-between lg:py-0 py-[30px]">
                  <div className="font-[600] text-[#f95555] lg:gap-[10px] lg:flex text-[24px]">
                    <p>Tên :</p>
                    <h2 className="font-[600] text-[#000] text-[22px] uppercase">
                      {user.user.name}
                    </h2>
                  </div>
                  <div className="font-[600] text-[#f95555] lg:gap-[10px] lg:flex text-[24px]">
                    <p>Mã số sinh viên : </p>
                    <p className="font-[600] text-[#000]  flex items-end  text-[18px] uppercase">
                      {user.user.idStudent}
                    </p>
                  </div>
                  <div className="font-[600] text-[#f95555] lg:gap-[10px] lg:flex text-[24px]">
                    <p>Địa chỉ : </p>
                    <p className="font-[600] text-[#000]  flex items-end text-[18px] ">
                      {user.user.address}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between lg:py-0 py-[30px]">
                  <div className="font-[600] text-[#f95555] lg:gap-[10px] lg:flex text-[24px]">
                    <p>Tên Sản Phẩm : </p>
                    <p className="font-[600] text-[#000]  flex items-end text-[18px] ">
                      {user.user.data.name}
                    </p>
                  </div>
                  <div className="font-[600] text-[#f95555] lg:gap-[10px] lg:flex text-[24px]">
                    <p>Số Lượng : </p>
                    <p className="font-[600] text-[#000]  flex items-end text-[18px] ">
                      {user.user.number}
                    </p>
                  </div>
                  <div className="font-[600] text-[#f95555] lg:gap-[10px] lg:flex text-[24px]">
                    <p>Thành Tiền : </p>
                    <p className="font-[600] text-[#000]  flex items-end text-[18px] ">
                      {user.user.number * user.user.data.money} VND
                    </p>
>>>>>>> e79bc2d72e1615fdbfd7dccbb4d70a4c71205dad
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </section>
<<<<<<< HEAD
    );
  else
    return (
      <section className=" ">
        <div className="relative lg:px-[120px] px-[20px] max-w-[1440px] flex h-[100vh] justify-center flex-wrap content-center  mx-[auto]">
          <Link
            href="/shop"
            className="absolute top-[100px] lg:left-[120px] left-[20px] bg-[#f95555] text-[#fff] rounded-[10px] p-[5px]"
          >
            Quay Lại
          </Link>
          <Link
            href="/"
            className="absolute top-[100px] lg:left-[200px] left-[100px] bg-[#f95555] text-[#fff] rounded-[10px] p-[5px]"
          >
            Mua sản phẩm
          </Link>
          <p> Bạn chưa mua sản phẩm gì </p>
        </div>
      </section>
    );
};

export default Page;
=======
  )
  else return(
    <section className=' '>
        <div className='relative lg:px-[120px] px-[20px] max-w-[1440px] flex h-[100vh] justify-center flex-wrap content-center  mx-[auto]'>
        <Link href="/shop" className='absolute top-[100px] lg:left-[120px] left-[20px] bg-[#f95555] text-[#fff] rounded-[10px] p-[5px]'>Quay Lại</Link>
        <Link href="/" className='absolute top-[100px] lg:left-[200px] left-[100px] bg-[#f95555] text-[#fff] rounded-[10px] p-[5px]'>Mua sản phẩm</Link>
        <p> Bạn chưa mua sản phẩm gì </p>
        </div>
    </section> 
  )
}

export default Page
>>>>>>> e79bc2d72e1615fdbfd7dccbb4d70a4c71205dad
