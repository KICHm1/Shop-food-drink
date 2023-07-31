import React from "react";
import Image from "next/image";
import logo from "../../assets/images/header/logo.png";
import facebook from "../../assets/images/footer/facebook.svg"
import linkedIn from "../../assets/images/footer/linked_in.svg"
const index = () => {
  return (
    <footer className="bg-[#fff] w-[100%] border-t-[2px] h-[400px]">
      <div className="flex justify-between mx-[auto] xl:px-[120px] lg:px-[60px] px-[20px] py-[60px] max-w-[1440px] list-none">
        <li className="flex flex-col gap-[32px] w-[200px]">
          <Image src={logo} alt=""></Image>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in
            ad quos minus rem quasi nisi libero totam ea molestiae, porro
           .
          </p>
        </li>
        <li className="flex flex-col gap-[12px]">
           <h2 className="font-[600] text-[#f95555] text-[24px]">social</h2>
           <a href="" className="font-[500]  text-[18px]">Facebook</a>
           <a href="" className="font-[500]  text-[18px]">Zalo</a>
           <a href="" className="font-[500]  text-[18px]">LinkedIn</a>
        </li>
        <li className="flex flex-col gap-[12px]">
           <h2 className="font-[600] text-[#f95555] text-[24px]">social</h2>
           <a href="">
            <Image src={facebook} alt=""></Image>
           </a>
           <a href="">Zalo</a>
           <a href=""> <Image src={linkedIn} alt=""></Image></a>
        </li>
        
      </div>
    </footer>
  );
};

export default index;
