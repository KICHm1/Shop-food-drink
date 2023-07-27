"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
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
  }
}
const Page = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [checkUser, setCheckUser] = useState < 0 | 1 | 2 > ();
  const [valueId , setValueId] = useState("");
  useEffect(() => {
    fetch("/api/post")
      .then((res) => res.json())
      .then((req) => setData((data) => req));
  }, []);
  const checkInput = (valueCheck : string)  => {
    if(valueCheck.toUpperCase() == "XEMTATCA") {
      setCheckUser(0);
      setTimeout(() => router.push(`/shop/${valueId}`) , 5000 );
    } 
    else if (data.some((item : any )   => item.user.idStudent.toUpperCase() == valueCheck.toUpperCase())) {
        setCheckUser(0);
        setTimeout(() => router.push(`/shop/${valueId}`) , 5000 );
      }
      else checkUser == 1 ?  setCheckUser(2) : setCheckUser(1); 
  }
    return (
      <section className="py-[140px]">
        <div className="max-w-[1440px] lg:px-[120px] px-[20px] gap-[20px] flex flex-wrap justify-center content-center list-none mx-auto">
          <motion.div
            animate ={ checkUser == 0 ? "trueCheck" : checkUser == 1 ? "wrongCheck1" : checkUser == 2 ? "wrongCheck2" : "" }
            variants={check}
            className="border-[2px] border-[#f95555] p-[20px] rounded-[20px] flex flex-col gap-[20px]">
            <div>
              <p>Mã số sinh viên của bạn</p>
              <div className="flex gap-[20px]">
                <input
                  onKeyDown={(e : any) => { 
                    setValueId(e.target.value) ;
                    if(e.code == "Enter") checkInput(valueId)
                   }}
                  
                  type="text"
                  name="idStudent"
                  id=""
                  className="border-[2px] border-[#f95555] rounded-[10px] outline-none "
                />
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
