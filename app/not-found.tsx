import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Custom404 = () => {
  return (
    <main>
    <section
      className="snap-center  w-[100%] h-[auto] mt-[100px]  bg-[#fff]"
    >
      <div className="xl:mx-[auto] flex relative justify-start gap-[20px] lg:px-[120px] p-[20px] pt-0 max-w-[1440px]">
        <Image className='lg:w-[425px] md:w-[325px] sm:w-[225px]' src={"/images/not-found.jpg"} alt="" width={425} height={425} ></Image>
        <div className='flex flex-wrap justify-center gap-[10px] flex-col'>
          <h1 className='flex font-[700] text-[36px] opacity-25'>Oops! Trang này không tồn tại  </h1>
          <div className='flex gap-[20px]'>
            <Link href="/" className="font-[500] text-[20px] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms]  after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff] ">Home</Link>
            <Link href="/shop" className="font-[500] text-[20px] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-center after:scale-x-[0] hover:after:scale-x-[100%] after:transition-transform after:duration-[500ms] after:delay-[100ms]  after:w-[100%] after:h-[2px] lg:after:bg-[#f95555] after:bg-[#fff] ">Cửa hàng</Link>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}

export default Custom404;