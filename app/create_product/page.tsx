"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
const Page = () => {
  const [data, setApi] = useState([]);
  const [editProduct, setEditProduct] = useState({});
  useEffect(function () {
    fetch("/api/source")
      .then((Response) => Response.json())
      .then((req) => setApi(req));
  }, []);
  const updateProduct = (name: string, detail: string, money: number) => {
    data.map((user : any , index :number ) => {
      if(user.checkPull == true ){
        console.log('1')
        const contentChange = { 
          id: `${user.id}`, 
          detail : `${detail}`, 
          money: money, 
          name : `${name}`,
        }
        const post = (async () =>  {
          const res : any = await fetch("/api/source", {
            method: "PUT",
            body: JSON.stringify(contentChange),
            headers: {
              "Content-Type": "application/json",
            },
          }); 
        })() ; 
          fetch("/api/source")
          .then((Response) => Response.json())
          .then((req) => setApi(req));
      }
    });

  };
  if (data.length != 0)
    return (
      <section className="py-[140px]">
        <div className="max-w-[1440px] lg:px-[120px] px-[20px] gap-[20px] flex flex-wrap list-none mx-auto">
          {data.map((user: any, index: number) => {
            if (user.checkEdit == true)
              return (
                <li
                  key={index}
                  className={`group relative overflow-hidden lg:flex-col lg:h-[auto] h-[150px] group flex gap-[10px] justify-between  bg-[#c9c9c94d] hover:bg-[#f95555]  hover:scale-105 hover:z-[2] border-[#f95555] rounded-[20px] lg:w-[calc((100%-40px)/3)] w-[100%] transition-[transform,background] duration-[1s] z-[1]`}
                >
                  <div
                    className={`lg:rounded-[20px_20px_0_0] aspect-[144/90] rounded-[20px_0_0_20px] flex overflow-hidden lg:w-[100%] w-[40%] m-0`}
                  >
                    <label htmlFor="changeImage">
                      <Image
                        src={`/${user.url}`}
                        className="w-[100%] h-[100%] object-cover group-hover:scale-150 transition-[transform,background] duration-[2s]  "
                        alt="anh"
                        width={180}
                        height={180}
                      ></Image>
                    </label>
                    <input type="file" name="change-file" id="changeImage" className="hidden"  accept=".png , .jpg"/>
                  </div>
                  <div className="flex flex-col flex-wrap justify-around content-center z-[1] my-[10px] lg:w-[100%] w-[35%]">
                    <h2 className="font-[700] flex justify-center items-center text-[24px]">
                      <input
                        type="text"
                        name="name"
                        className="w-[100%] outline-0 "
                        onChange={(e: any): string =>
                          (user.name = e.target.value)
                        }
                      />
                    </h2>
                    <p className="font-[500] text-[14px]">
                      <input
                        type="text"
                        name="detail"
                        className="w-[100%] outline-0 "
                        onChange={(e: any): string =>
                          (user.detail = e.target.value)
                        }
                      />
                    </p>
                  </div>
                  <div className="lg:gap-[10px] relative my-[10px] flex-wrap items-center z-[1] flex flex-col justify-around">
                    <p className="flex justify-center lg:mr-0 mr-[20px] font-[600] items-center">
                      <input
                        type="text"
                        name="name"
                        className="w-[100%] outline-0 "
                        onChange={(e: any): number =>
                          (user.money = e.target.value)
                        }
                      />
                    </p>
                  </div>
                  <div className="flex justify-between px-[20px] absolute lg:top-0 lg:translate-y-[-100%] lg:w-[100%] lg:h-[63%] z-[2] bg-[#f95555]  group-hover:translate-y-[0%] transition-all duration-[1s]">
                    <button
                      onClick={() => {
                        user.checkPull = true ;
                        updateProduct(user.name, user.detail, user.money);
                        setEditProduct((user.checkEdit = false));
                      }}
                    >
                      Hoàn tất
                    </button>
                  </div>
                </li>
              );
            else
              return (
                <li
                  key={index}
                  className={`group relative overflow-hidden lg:flex-col lg:h-[auto] h-[150px] group flex gap-[10px] justify-between  bg-[#c9c9c94d] hover:bg-[#f95555]  hover:scale-105 hover:z-[2] border-[#f95555] rounded-[20px] lg:w-[calc((100%-40px)/3)] w-[100%] transition-[transform,background] duration-[1s] z-[1]`}
                >
                  <div
                    className={`lg:rounded-[20px_20px_0_0] aspect-[144/90] rounded-[20px_0_0_20px] flex overflow-hidden lg:w-[100%] w-[40%] m-0`}
                  >
                    <Image
                      src={`/${user.url}`}
                      className="w-[100%] h-[100%] object-cover group-hover:scale-150 transition-[transform,background] duration-[2s]  "
                      alt="anh"
                      width={180}
                      height={180}
                    ></Image>
                  </div>
                  <div className="flex flex-col flex-wrap justify-around content-center z-[1] my-[10px] lg:w-[100%] w-[35%]">
                    <h2 className="font-[700] flex justify-center items-center text-[24px]">
                      {user.name}
                    </h2>
                    <p className="font-[500] text-[14px]">{user.detail}</p>
                  </div>
                  <div className="lg:gap-[10px] relative my-[10px] flex-wrap items-center z-[1] flex flex-col justify-around">
                    <p className="flex justify-center lg:mr-0 mr-[20px] font-[600] items-center">
                      {user.money}
                    </p>
                  </div>
                  <div className="flex justify-between px-[20px] absolute lg:bottom-0 lg:translate-y-[100%] lg:w-[100%] lg:h-[37.5%] z-[2] bg-[#f95555]  group-hover:translate-y-[0%] transition-all duration-[1s]">
                    <button>Xóa sản phẩm</button>
                    <button
                      onClick={() => setEditProduct((user.checkEdit = true))}
                    >
                      Chỉnh sửa sản phẩm
                    </button>
                  </div>
                </li>
              );
          })}
          <li className="border-[2px] rounded-[20px] lg:w-[calc((100%-40px)/3)] w-[100%] flex lg:flex-col gap-[20px]">
            <div className=" lg:w-[100%] w-[40%] overflow-hidden aspect-[144/90] lg:rounded-[20px_20px_0_0] rounded-[20px_0_0_20px]">
              <label htmlFor="upload-file" className="cursor-pointer">
                <Image
                  src={"/images/upload.jpg"}
                  alt="upload"
                  width={500}
                  height={500}
                ></Image>
              </label>
              <input
                type="file"
                name=""
                id="upload-file"
                accept=".jpg, .png"
                className="w-[100%] hidden"
              />
            </div>
            <div className="flex flex-col justify-between lg:py-0 lg:px-[20px] py-[30px] ">
              <div className="font-[600] text-[#f95555] lg:gap-[10px]  lg:flex text-[20px]">
                
                <h2 className="font-[600] text-[#000] text-[22px] uppercase">
                  <input
                    type="text"
                    className="outline-0 border-b-[2px] w-[100%] border-[#f95555]"
                  />
                </h2>
              </div>
              <div className="font-[600] text-[#f95555] lg:gap-[10px] lg:flex text-[24px]">
                
                <p className="font-[600] text-[#000]  flex items-end  text-[18px] uppercase">
                  <input
                    type="text"
                    className="outline-0 border-b-[2px] w-[100%] border-[#f95555]"
                  />
                </p>
              </div>
              <div className="font-[600] text-[#f95555] lg:gap-[10px] lg:flex text-[24px]">
                
                <p className="font-[600] text-[#000]  flex items-end text-[18px] ">
                  <input
                    type="text"
                    className="outline-0 border-b-[2px] w-[100%] border-[#f95555]"
                  />
                </p>
              </div>
            </div>
          </li>
        </div>
      </section>
    );
};

export default Page;
