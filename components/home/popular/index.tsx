import React from "react";
import Image from "next/image";
import kala_bhuna from "@pageImage/home/popular/kala bhuna.png";
import meat_cu from "@pageImage/home/popular/meat cu.png";
import chose_your_meals from "@pageImage/home/popular/chose your meals.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FaRegHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import Product from "../../extension/product";
import { ProductSkeleton } from "../../listSkeleton";
import { motion } from "framer-motion";
const index = (props: any) => {
  const data = props.data.filter((e: any) => e.popular);
  return (
    <section id="popular" className="snap-center w-[100%] mt-[34px] bg-[#fff]">
      <div className=" lg:p-[120px] p-[20px] gap-[60px] max-w-[1440px] mx-[auto]">
        <h1 className="text-[#2B2B2B] drop-shadow-[5px_5px_5px_#989898] font-[700] flex justify-center lg:text-[50px] sm:text-[38px] text-[28px]">
          Những Món Phổ Biến
        </h1>
        {props.getLoading ? (
          <ProductSkeleton cards={3} setWidth={"lg:w-[calc((100%-40px)/3)]"} />
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
                  width={"lg:w-[calc((100%-20px)/3)]"}
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
