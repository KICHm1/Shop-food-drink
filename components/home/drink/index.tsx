import React from "react";
import Image from "next/image";
import Link from "next/link";
import kala_bhuna from "@pageImage/home/popular/kala bhuna.png";
import {
  FaRegHeart,
  FaStar,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ProductSkeleton } from "../../listSkeleton";
import Product from "../../extension/product";
const index = (props: any) => {
  const data = props.data.filter((banner: any) => banner.check == "drink");
  return (
    <section id="drink" className="snap-center w-[100%] bg-[#fdfaf6]  ">
      <div className="relative  lg:p-[60px] p-[20px]  flex flex-col mx-[auto] max-w-[1440px]  gap-[60px]">
        <div className="flex justify-between">
          <Link
            href="./food"
            className="group rounded-[10px] w-[200px] h-[65px] relative transition-shadow duration-[1s] ease-in-out  "
          >
            <p className="group-hover:text-[#fff] transition-color duration-[0.5s] delay-[0.5s] h-[60px]  absolute z-[3] bottom-0 left-[50%] translate-x-[-50%] text-[#000] font-[700] text-[50px]">
              Drink
            </p>
            <span className="z-[1] absolute w-[100%] bottom-0 h-[10px] transition-transform duration-[0.5s] scale-x-0 origin-left group-hover:scale-x-[100%] bg-[#f95555]"></span>
            <span className="absolute w-[100%] bottom-0 h-[100%] delay-[0.5s] transition-transform duration-[0.5s] scale-y-0 origin-bottom group-hover:scale-y-[100%] bg-[#f95555]"></span>
          </Link>
          <div className=" flex gap-[20px] flex-wrap content-center ">
            <p className="flex content-center flex-wrap text-[24px] font-[800]">
              See more{" "}
            </p>
            <button className="w-[100px] h-[48px] flex justify-center flex-wrap content-center rounded-[4px_20px_4px_20px] bg-[#f95555] text-[#fff]">
              <FaArrowRight className="w-[50px] text-[30px]"></FaArrowRight>
            </button>
          </div>
        </div>
        {props.getLoading ? (
          <ProductSkeleton cards={4} setWidth={"lg:w-[calc((100%-40px)/4)]"} />
        ) : (
          <motion.div
            initial = {"hidden"}
            whileInView = {"whileInview"}
            exit={"exit"}
            variants={props.parentAnimate}
            className="list-none flex flex-wrap lg:gap-[10px] gap-[20px] mt-[60px] w-[100%] justify-between"
          >
            {data.map((product: any, index: number) => {
                return (
                    <Product
                      id={product.id}
                      variants = {props.childAnimate}
                      width={"lg:w-[calc((100%-40px)/4)]"}
                      key={index}
                      src={`/${product.url}`}
                      name={product.name}
                      detail={product.detail}
                      money={product.money}
                      type={product.check}
                    ></Product>
                );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default index;
