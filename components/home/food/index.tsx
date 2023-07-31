import React from "react";
import Image from "next/image";
import Link from "next/link";
import Product from "../../extension/product";
import { ProductSkeleton } from "../../listSkeleton";
import { motion } from "framer-motion";
const index = (props: any) => {
  const data = props.data.filter((e: any) => e.check == "food");
  return (
    <section id="food" className="snap-center w-[100%] bg-[#fdfaf6]  ">
      <div className="relative  lg:p-[60px] p-[20px]  flex flex-col mx-[auto] max-w-[1440px]  gap-[60px]">
        <div>
          <h2 className="flex justify-center drop-shadow-[5px_5px_5px_#989898] font-[700] text-[50px]">
            Food And Drink
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="group rounded-[10px] w-[200px] h-[65px] relative transition-shadow duration-[1s]  ease-in-out  ">
            <p className="group-hover:text-[#fff] transition-color duration-[0.5s] delay-[0.5s] h-[60px]  absolute z-[3] bottom-0 left-[50%] translate-x-[-50%] text-[#000] font-[700] text-[50px]">
              Food
            </p>
            <span className="z-[1] absolute w-[100%] bottom-0 h-[10px] transition-transform duration-[0.5s] scale-x-0 origin-left group-hover:scale-x-[100%] bg-[#f95555]"></span>
            <span className="absolute w-[100%] bottom-0 h-[100%] delay-[0.5s] transition-transform duration-[0.5s] scale-y-0 origin-bottom group-hover:scale-y-[100%] bg-[#f95555]"></span>
          </div>
        </div>
        {props.getLoading ? (
          <ProductSkeleton cards={4} setWidth={"lg:w-[calc((100%-40px)/4)]"} />
        ) : (
          <motion.div
            initial={"hidden"}
            whileInView={"whileInview"}
            exit={"exit"}
            variants={props.parentAnimate}
            className="list-none flex mt-[60px] lg:gap-[10px] gap-[20px] flex-wrap w-[100%] justify-between"
          >
            {data.map((product: any, item: number) => {
              return (
                <Product
                  id={product.id}
                  variants={props.childAnimate}
                  width={"lg:w-[calc((100%-40px)/4)]"}
                  key={item}
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
