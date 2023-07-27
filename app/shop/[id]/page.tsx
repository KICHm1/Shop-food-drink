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
                  <Image
                    src={`/${user.user.data.url}`}
                    width={1440}
                    height={900}
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
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </section>
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