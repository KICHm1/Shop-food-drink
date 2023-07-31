import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const BannerSkeleton: any = () => {
  return (
    <div>
      <div className="overflow-hidden lg:h-[500px] w-[100%] rounded-[2px] sm:h-[400px] h-[300px] ">
        <Skeleton height={600} width={1440}></Skeleton>
      </div>
    </div>
  );
};
export const ProductSkeleton: any = ( {cards , setWidth}: any)  => {
  return (
    <div className="list-none flex mt-[60px] lg:gap-[10px] gap-[20px] flex-wrap w-[100%] justify-between">
      {Array(cards).fill(0).map( (e,index) => 
      (<div key={index} className={`overflow-hidden  w-[100%] ${setWidth} lg:h-[400px] h-[150px] rounded-[20px] `}>
        <Skeleton height={500} width={1440} className=""></Skeleton>
      </div>)
      )}
    </div>
  );
};
export const EachProductSkeleton: any = ( {cards , setWidth}: any)  => {
  return (
    <div className="list-none flex rounded-[40px] overflow-hidden  flex-wrap w-[100%] justify-between">  
        <Skeleton height={500} width={1440} className=""></Skeleton>
    </div>
  );
};
