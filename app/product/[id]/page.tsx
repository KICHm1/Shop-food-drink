"use client";
import { LinkProps } from "next/link";
import React, { ChangeEvent, LegacyRef, SetStateAction } from "react";
import { useState, useEffect ,useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { EachProductSkeleton } from "../../../components/listSkeleton";
import { motion , AnimatePresence} from "framer-motion";
function ProductPage(this: any, { params }: any) {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState< Boolean >(true);
  const [focusInputFirstName, setFocusInputFirstName] = useState< Boolean >(false);
  const [focusInputLastName, setFocusInputLastName] = useState< Boolean >(false);
  const [focusInputIdStudent, setFocusInputIdStudent] = useState< Boolean >(false);
  const [focusInputAddress, setFocusInputAddress] = useState< Boolean >(false);
  const buySuccess = useRef<HTMLDivElement>(null);
  const contentComment = useRef<HTMLParagraphElement>(null)
  // set change input
  const [changeInputFirstName, setChangeInputFirstName] = useState(null);
  const [changeInputLastName, setChangeInputLastName] = useState(null);
  const [changeInputIdStudent, setChangeInputIdStudent] = useState(null);
  const [changeInputAddress, setChangeInputAddress] = useState(null);
  //
  // check value input
  const [checkInputFirstName, setCheckInputFirstName] = useState< Boolean >(false);
  const [checkInputLastName, setCheckInputLastName] = useState< Boolean >(false);
  const [checkInputIdStudent, setCheckInputIdStudent] = useState< Boolean >(false);
  const [checkInputAddress, setCheckInputAddress] = useState< Boolean >(false);
  //
  const [commentEvaluate, setCommentEvaluate] = useState("");
  // so luong san pham
  // check da mua hang chua
  const [checkBuyProduct, setCheckBuyProduct] = useState(false);
  //
  const [eventAfterBuy, setEventAfterBuy] = useState < "yet" | "loading" | "success" | "done"  > ("yet");
  //
  const [amount, setAmount] = useState(1);
  const [comments, setcomments] = useState({});
  const [listComment, setListComment] = useState([]);
  useEffect(function () {
    fetch("/api/source")
      .then((Response) => Response.json())
      .then((req) => {
        setApi(req);
        setLoading(false);
      });
  }, []);
const left = { 
  hidden : {
    opacity : 0,
    x : "100%",
  },
  show : {
    x:0,
    opacity : 1,
    transition : {
      type : "spring",
      duration : 0.5,
      bount : 0.8,
      }
  },
  exit : {
    x: "100%",
    opacity : 0,
  }
}
const right = { 
  hidden : {
    opacity : 0,
    x : "-100%",
  },
  show : {
    x:0,
    opacity : 1,
    transition : {
      type : "spring",
      duration : 0.5,
      bount : 0.8,
      }
  },
  exit : {
    x: "-100%",
    opacity : 0,
  }
}
const containerLeft = {
  hiddenLeft : {
    opacity : 0,
    x : 20,
  },
  
  exitLeft : {
    x:20,
    opacity : 0,
  }
}
const alertBuySuccess = {
  yet:{
    scale : 0,
    y : "-50%",
    x: "-50%",
    rotate : [0,90,180,270,360],
    transition:{
      type : "spring",
      duration :1,
      bounce :0.8,
    }
  },
  success:{
    scale : 1,
    y : "-50%",
    x: "-50%",
    rotate : [360,270,180,90,0],
    transition:{
      type : "spring",
      duration :1,
      bounce : 0.8
    }
  },
  done:{
    scale : 0,
    y : "-50%",
    x: "-50%",
    rotate : [0,90,180,270,360],
    transition:{
      type : "spring",
      duration :0.5,
      bounce : 0.8
    }
  }
}
  const data : any = api.filter((item: any) => item.id == params.id)[0];
  const onFocusFirstName = () => {
    setFocusInputFirstName((focusInputFirstName) => true);
  };
  const onBlurFirstName = () => {
    setFocusInputFirstName((focusInputFirstName) => false);
  };
  const onFocusLastName = () => {
    setFocusInputLastName((focusInputLastName) => true);
  };
  const onBlurLastName = () => {
    setFocusInputLastName((focusInputLastName) => false);
  };

  const onBlurIdStudent = () => {
    setFocusInputIdStudent((focusInputIdStudent) => false);
  };
  const onFocusIdStudent = () => {
    setFocusInputIdStudent((focusInputIdStudent) => true);
  };
  const onBlurAddress = () => {
    setFocusInputAddress((focusInputAddress) => false);
  };
  const onFocusAddress = () => {
    setFocusInputAddress((focusInputAddress) => true);
  };
  const onChangeValue = (event: any) => {
    switch (event.target.name) {
      case "firstName":
        setChangeInputFirstName((changeInputFirstName) => event.target.value);
        break;
      case "lastName":
        setChangeInputLastName((changeInputLastName) => event.target.value);
        break;
      case "idStudent":
        setChangeInputIdStudent((changeInputIdStudent) => event.target.value);
        break;
      case "address":
        setChangeInputAddress((changeInputAddress) => event.target.value);
        break;
    }
    const comment = {
      name: `${changeInputFirstName} ${changeInputLastName}`,
      idStudent: `${changeInputIdStudent}`,
      address: `${changeInputAddress}`,
      number: { amount },
      data: data,
    };
    setcomments(comment);
    checkValueInput(event.target.value, event.target.name);
  };
  const checkValueInput = (value: string, name: string) => {
    const checkName =
      /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/;
    const checkIdStudent = /^[0-9DESdes\s]*$/;
    switch (name) {
      case "firstName":
        if (checkName.test(value) && value)
          setCheckInputFirstName((checkInputFirstName) => true);
        else setCheckInputFirstName((checkInputFirstName) => false);
        break;
      case "lastName":
        if (checkName.test(value) && value)
          setCheckInputLastName((checkLastName) => true);
        else setCheckInputLastName((checkInputLastName) => false);
        break;
      case "idStudent":
        if (
          checkIdStudent.test(value) &&
          (value.length == 8 || value.length == 7)
        )
          setCheckInputIdStudent((checkInputIdStudent) => true);
        else setCheckInputIdStudent((checkInputIdStudent) => false);
        break;
      case "address":
        if (value) setCheckInputAddress((checkInputAddress) => true);
        else setCheckInputAddress((checkInputAddress) => false);
        break;
    }
  };
  // set tang giam so luong
  const onChangeAmount = (event: MouseEvent | ChangeEvent  ) => {
    const target = event.target as HTMLTextAreaElement;
    switch (target.name) {
      case "down":
        if (amount > 1) setAmount((amount: number) => amount - 1);
        break;
      case "content":
        setAmount( parseInt(target.value) );
        break;
      case "up":
        setAmount((amount: number) => ++amount);
    }
  };
  const onBlurAmount = (event: any) => {
    if (amount < 1) setAmount(1);
  };
  // submit don hang
  const onSubmitBuy = (event: any) => {
    const comment = {
      name: `${changeInputFirstName} ${changeInputLastName}`,
      idStudent: `${changeInputIdStudent}`,
      address: `${changeInputAddress}`,
      number: amount,
      data: data,
    };
    setEventAfterBuy("loading");
    setcomments(comment);
    const post = async () => {
      const res : any = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(await res.json()) setEventAfterBuy("success") ; 
    };
    post();
    setCheckBuyProduct(true);
  };
  //
  const onSubmitComment = async () => {
    const day: any = new Date();
    const commentContent = {
      name: ` ${changeInputFirstName} ${changeInputLastName}`,
      date: `${day.getHours()}:${
        day.getMinutes() < 10 ? `0${day.getMinutes()}` : `${day.getMinutes()}`
      }:${day.getSeconds()} ${
        day.getDate() < 10 ? `0${day.getDate()}` : `${day.getDate()}`
      }/${day.getMonth() + 1}`,
      value: commentEvaluate,
    };
    setCommentEvaluate("");
    const res = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify(commentContent),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetch("/api/comment")
      .then((Response) => Response.json())
      .then((req) => setListComment(req));
  };
  useEffect(function () {
    fetch("/api/comment")
      .then((Response) => Response.json())
      .then((req) => setListComment(req));
  }, []);
  let setLabelFirstName =
    focusInputFirstName || changeInputFirstName
      ? "xl:left-[50%] lg:left-[40%] md:left-[60%] sm:left-[55%] left-[45%] sm:translate-y-[50%] translate-y-[75%] z-[3]"
      : "z-[1] left-[1%] translate-y-0 text-[#000] flex";
  let setLabelLastName =
    focusInputLastName || changeInputLastName
      ? "lg:left-[55%] md:left-[60%] sm:left-[55%] left-[45%] sm:translate-y-[50%] translate-y-[75%] z-[3]"
      : "z-[1] left-[1%] translate-y-0 text-[#000] flex";
  let setLabelIdStudent =
    focusInputIdStudent || changeInputIdStudent
      ? "sm:left-[75%] left-[70%] translate-y-[50%] z-[3]"
      : "z-[1] left-[1%] translate-y-0 text-[#000] flex";
  let setLabelAddress =
    focusInputAddress || changeInputAddress
      ? "sm:left-[75%] left-[70%] translate-y-[50%] z-[3]"
      : "z-[1] left-[1%] translate-y-0 text-[#000] flex";
  // set border
  let setBorderFirstName = checkInputFirstName
    ? "border-[#5cfe7577] text-[#5cfe75]"
    : "border-[#f95555] text-[#f95555]";
  let setBorderLastName = checkInputLastName
    ? "border-[#5cfe7577] text-[#5cfe75]"
    : "border-[#f95555] text-[#f95555]";
  let setBorderIdStudent = checkInputIdStudent
    ? "border-[#5cfe7577] text-[#5cfe75]"
    : "border-[#f95555] text-[#f95555]";
  let setBorderAddress = checkInputAddress
    ? "border-[#5cfe7577] text-[#5cfe75]"
    : "border-[#f95555] text-[#f95555]";
  return (
    <section 
     onClick={(event : MouseEvent<HTMLDivElement>) => {
       if( !buySuccess.current?.contains((event.target as Node))) setEventAfterBuy("done")
     }}
      className="bg-[#fdfaf6] relative">
       <div className="lg:px-[120px] max-w-[1440px] px-[20px] py-[120px] mx-[auto] flex flex-col z-[4]">
      {eventAfterBuy == "loading" ?   
        <div className="fixed flex flex-wrap justify-center content-center left-0 right-0 top-0 bottom-0 z-[5] bg-[#ffffff6f]  ">
          <div className="overflow-hidden lg:w-[150px] lg:h-[150px] sm:w-[125px] sm:h-[125px] w-[100px] h-[100px]">
            <Image src={"/images/hamburger__loading.gif"} alt="animation loading" width={150} height={150} className="mix-blend-multiply"></Image>
          </div>
        </div>: null }
      <AnimatePresence>
            <motion.div
              variants={alertBuySuccess}
              initial="yet"
              animate = {eventAfterBuy == "yet" ?  "yet" : eventAfterBuy == "success" ? "success" : eventAfterBuy == "done" ? "done" : ""}
              ref={buySuccess} className={`fixed left-[50%]  z-[5] top-[50%]  gap-[5px] flex flex-col  p-[20px] overflow-hidden rounded-[20px] border-[2px] border-[#f95555] bg-[#fff]`}>
            <p className="font-[700] flex justify-center text-[#f95555]  text-[1.4rem]">Mua thành công</p>
            <p className="font-[500] text-[#f95555]  text-[1.3rem] ">Cảm ơn bạn đã mua sản phẩm</p>
            <div   className="flex gap-[10px] justify-between ">
              <Link onClick={() => setEventAfterBuy("yet")} href="/"  className="bg-[#f95555] p-[10px] rounded-[10px] w-[calc((100%-10px)/2)] flex justify-center text-[16px] font-[600] text-[#fff]" >Trang chủ</Link>
              <Link onClick={() => setEventAfterBuy("yet")} href="#comment" className="bg-[#f95555] p-[10px] rounded-[10px] w-[calc((100%-10px)/2)] flex justify-center text-[16px] font-[600] text-[#fff]" >Bình luận</Link>
            </div>
           </motion.div>
      </AnimatePresence>
        <div className="group relative overflow-hindden lg:flex-row flex-col  max-w-[1440px] flex flex-wrap">
          <motion.div
            initial = "hidden"
            animate = "show"
            exit="exit"
            variants={left}
            className="overflow-hidden lg:rounded-[20px_0_0_20px] rounded-[20px_20px_0_0px] lg:w-[50%] w-[100%]  z-[2] relative transition-all duration-[1s] ">
            {!data && (
              <div className="absolute h-[] overflow-hidden">
                <Skeleton width={1440} height={900}></Skeleton>
              </div>
            )}
            <Image
              src={`/${data ? data.url : ""}`}
              alt="null"
              width={1440}
              height={900}
              className="object-cover h-[100%]"
            ></Image>
          </motion.div>
          <motion.div 
            initial = "hidden"
            animate = "show"
            exit= "exit"
            variants={right}
            className={`${
              checkInputFirstName &&
              checkInputLastName &&
              checkInputIdStudent &&
              checkInputAddress
                ? "border-[#5cfe7577]"
                : "border-[#f95555]"
            } flex flex-col justify-between lg:w-[50%] w-[100%] z-[1]  transition-all duration-[1s]  border-[2px] lg:border-l-0 lg:border-t-[2px] border-t-0  lg:rounded-[0_20px_20px_0] rounded-[0_0_20px_20px] gap-[20px] p-[20px]`}
          >
            <h2 className="font-[800] flex justify-center text-[40px] text-[#f95555] ">
              {data?.name || 
                <div className="w-[100px] h-[20px]  mx-[auto] overflow-hidden">
                  <Skeleton></Skeleton>
                </div>}
            </h2>
            <p className="font-[500] flex justify-center text-[28px]">
              {data?.detail || 
              <div className="w-[500px] h-[20px]  mx-[auto] overflow-hidden">
                <Skeleton></Skeleton>
             </div>}
            </p>
            <form
              action="submit"
              className="flex justify-between  flex-wrap gap-[10px]"
            >
              <div
                className={`${setBorderFirstName}  group relative border-[2px] w-[calc((100%-20px)/2)] h-[30px] rounded-[5px] transition-all duration-[0.5s]  bg-[#fdfaf6]`}
              >
                <div>
                  <input
                    onFocus={onFocusFirstName}
                    onBlur={onBlurFirstName}
                    onChange={(event) => onChangeValue(event)}
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="bg-[transparent] absolute left-2 bottom-[1px] outline-none z-[2]"
                  />
                  <span
                    className={`${setLabelFirstName} w-[auto] xl:text-[15px] lg:text-[14px] sm:text-[14px] text-[11px]  absolute  font-[400] left-2 bg-[#fdfaf6] drop-shadow[0_0_2px_#fff] transition-all duration-[0.5s] `}
                  >
                    Họ và tên đệm
                  </span>
                </div>
              </div>
              <div
                className={`${setBorderLastName} lg:text-[17px] sm:text-[16px] text-[14px] group relative border-[2px] w-[calc((100%-20px)/2)] h-[30px] rounded-[5px] transition-all duration-[0.5s]  bg-[#fdfaf6]`}
              >
                <input
                  onFocus={onFocusLastName}
                  onBlur={onBlurLastName}
                  onChange={(event) => onChangeValue(event)}
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="bg-[transparent] absolute left-2 bottom-[1px] outline-none z-[2]"
                />
                <span
                  className={`${setLabelLastName} absolute  font-[400]  left-2 bg-[#fdfaf6] drop-shadow[0_0_2px_#fff] transition-all duration-[0.5s] `}
                >
                  Tên
                </span>
              </div>
              <div
                className={`${setBorderIdStudent} lg:text-[17px] sm:text-[16px] text-[14px] group relative border-[2px] w-[100%] h-[30px] rounded-[5px] transition-all duration-[0.5s]  bg-[#fdfaf6]`}
              >
                <input
                  onFocus={onFocusIdStudent}
                  onBlur={onBlurIdStudent}
                  onChange={(event) => onChangeValue(event)}
                  type="text"
                  id="idStudent"
                  name="idStudent"
                  className="bg-[transparent] absolute left-2 w-[70%] bottom-[1px] outline-none uppercase z-[2]"
                />
                <span
                  className={`${setLabelIdStudent}  absolute   font-[400] left-2 bg-[#fdfaf6] drop-shadow[0_0_2px_#fff] transition-all duration-[0.5s] `}
                >
                  MSSV
                </span>
              </div>
              <div
                className={`${setBorderAddress} lg:text-[17px] sm:text-[16px] text-[14px] group relative border-[2px] w-[100%] h-[30px] rounded-[5px] transition-all duration-[0.5s]  bg-[#fdfaf6]`}
              >
                <input
                  onFocus={onFocusAddress}
                  onBlur={onBlurAddress}
                  onChange={(event) => onChangeValue(event)}
                  type="address"
                  id="address"
                  name="address"
                  className="bg-[transparent] w-[70%] absolute left-2 bottom-[1px] outline-none z-[2]"
                />
                <span
                  className={`${setLabelAddress}  absolute  font-[400] left-2 bg-[#fdfaf6] drop-shadow[0_0_2px_#fff] transition-all duration-[0.5s] `}
                >
                  Địa chỉ
                </span>
              </div>
              <div className="w-[100%] flex justify-between">
                <div className="flex gap-[10px]">
                  <div className="font-[600] text-[24px] text-[#f95555]">
                    {data?.money ? (
                      ` ${amount > 0 ? data.money * amount : data.money} VND `
                      ) : (
                      <Skeleton width={120} height={20} />
                    )}
                  </div>
                  <div className="flex">
                    <input
                      type="button"
                      name="down"
                      value="-"
                      onClick={(event) => onChangeAmount(event)}
                      className="font-[700] text-[20px] w-[40px]"
                    />
                    <div className=" flex justify-center">
                      <input
                        type="text"
                        name="content"
                        onBlur={(event) => onBlurAmount(event)}
                        onChange={(event : ChangeEvent) => onChangeAmount(event)}
                        value={amount}
                        className="outline-0 bg-[transparent] w-[50px] text-center appearance-none "
                      />
                    </div>
                    <input
                      type="button"
                      name="up"
                      value="+"
                      onClick={(event : MouseEvent) => onChangeAmount(event)}
                      className="font-[700] text-[20px] w-[40px]"
                    />
                  </div>
                </div>
                {checkInputFirstName &&
                checkInputLastName &&
                checkInputIdStudent &&
                checkInputAddress ? (
                  <input
                    name="submit"
                    type="button"
                    value={"Mua"}
                    onClick={(event) => onSubmitBuy(event)}
                    className="w-[100px]  h-[40px] text-[#fff] rounded-[10px] bg-[#5cfe7577] cursor-pointer hover:bg-[#5cfe75] transition-all duration-[1s]"
                  />
                ) : (
                  <div className="w-[100px] h-[40px] text-[#fff] flex justify-center flex-wrap content-center rounded-[10px] bg-[#f9555577] cursor-pointer hover:bg-[#f95555] transition-all duration-[1s]">
                    Mua
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
        <div 
          className="my-[120px] flex flex-col gap-[20px] z-[2]" id="comment">
          <div>
            <h2 className="text-[24px] font-[700]">Đánh Giá</h2>
          </div>
          {checkBuyProduct ? (
            <div className="flex relative w-[100%] gap-[20px]">
              <div role="textbox" 
                onKeyDown={(event : React.KeyboardEvent<HTMLDivElement>) => {
                  setCommentEvaluate(contentComment!.current!.innerText);
                  if (event.code == "Enter") {
                    if(contentComment) contentComment!.current!.innerText = "" ;
                    onSubmitComment();
                    event.preventDefault();
              }
            }}
                 contentEditable="true" data-lexical-editor="true" spellCheck="true" tabIndex={0} className="z-[2] flex p-[10px] bg-[#fff] w-[80%] break-works border-[2px] select-text">
                <p ref={contentComment} 
                     aria-valuetext="" className=" w-[100%] h-[25px]">
                </p>
              </div>
              <input
                type="button"
                value="Gửi"
                name="submitComment"
                onClick={onSubmitComment}
                className="text-[#fff] bg-[#f95555] rounded-[2px] px-[20px]"
              />
            </div>
          ) : (
            <div>*Bạn chưa mua sản phẩm này nên không thể đáng giá</div>
          )}
          {listComment.length != 0 ? (
            listComment.map((comment: any, index) => (
              <div key={index} className="flex flex-col gap-[10px]">
                <div className="flex gap-[10px]">
                  <h2 className="font-[500] text-[#f95555] text-[22px]">
                    {comment.name}
                  </h2>
                  <p className="text-[18px] flex flex-wrap content-end">
                    {comment.date}
                  </p>
                </div>
                <div>
                  <p className="font-[400] text-[16px]">{comment.value}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="w-[100%] flex justify-center">
              chưa có bình luận nào
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default ProductPage;
