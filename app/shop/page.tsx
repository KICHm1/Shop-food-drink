"use client";
import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import axios from "axios";
const check = {
  wrongCheck1 : {
    y:[-10,0],
    x : [5,-5,5,-5,5,-5,0],
    rotate : [5,-5,5,-5,5,-5,0],
    transition : {
      type : "easeIn",
      duration : 0.5,
    }
  },
  wrongCheck2 : {
    y:[-10,0],
    x : [5,-5,5,-5,5,-5,0],
    rotate : [5,-5,5,-5,5,-5,0],
    transition : {
      type : "easeIn",
      duration : 0.5,
    }
  },
  trueCheck : {
    width : 0,
    transition : {
      type : "spring",
      duration : 2,
    }
  },
}
const Page = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [checkUser, setCheckUser] = useState < 0 | 1 | 2 > ();
  const [valueId , setValueId] = useState("");
  const checkInput = (valueCheck : string)  => {
    if(valueCheck.toLocaleLowerCase() == "create_product"){
      setCheckUser(0);
      setTimeout(() => router.push(`/${valueId}`) , 2000 );
    }
    else if(valueCheck.toUpperCase() == "XEMTATCA" ) {
      setCheckUser(0);
      setTimeout(() => router.push(`/shop/${valueId}`) , 2000 );
    } 
    else {
      axios
        .get("http://localhost:3001/api/check", {params : {id :valueId.toLocaleLowerCase()}})
        .then(req =>{
          if(!!req.data.check) {
            setTimeout(() => router.push(`/shop/${valueId}`) , 2000 );
            setCheckUser(0);
          }
            else checkUser == 1 ?  setCheckUser(2) : setCheckUser(1); 
        })
  }
}
    return (
      <section className="py-[140px]">
        <div className="max-w-[1440px] lg:px-[120px] px-[20px] gap-[20px] flex flex-wrap justify-center content-center list-none mx-auto">
          <motion.div
            animate ={ checkUser == 1 ? "wrongCheck1" : checkUser == 2 ? "wrongCheck2" : "" }
            variants={check}
            className={` border-[2px] border-[#f95555] p-[20px] rounded-[20px] flex flex-col gap-[20px]`}>
            <div>
              <p>Mã số sinh viên của bạn</p>
              <div className="flex gap-[20px]">
                <div className="">
                  <motion.input
                  initial="normal"
                  autoFocus={true}
                  animate={ checkUser == 0 ? "trueCheck" : "falseCheck" }
                  variants={check}
                  onChange={ (e : ChangeEvent ) => {
                    const target = e.target as HTMLTextAreaElement;
                    (setValueId( target.value) );
                  }}
                  onKeyDown={ (e : React.KeyboardEvent<HTMLInputElement>) => { 
                    if(e.code == "Enter") {
                      checkInput(valueId) ;
                    }
                   }}
                  
                  type="text"
                  name="idStudent"
                  id=""
                  className={`${checkUser == 0 ? "border-[#35fa27]" : "border-[#f95555]"} pl-[10px] caret-[#f95555]  border-[2px] transition-border duration-[1s] delay-0  rounded-[10px] outline-none `}
                />
                  </div>
                <button
                  onClick={() => checkInput(valueId)}
                  className=" rounded-[5px] bg-[#f9555577] hover:bg-[#f95555] px-[20px]  text-[#fff] text-[18px] cursor-pointer ">Gửi
                </button>
              </div>
            </div>
            <div className="text-[14px]">
              *Nhập mã số sinh viên của bạn để xem lịch sử mua hàng
            </div>
          </motion.div>
        </div>
      </section>
    );
};

export default Page;
