"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, spring } from "framer-motion";
import edit from "@pageImage/create/edit.svg";
import del from "@pageImage/create/delete.svg";
import done from "@pageImage/create/done.svg";
import empty_star from "@pageImage/create/emtpy_star.svg";
import full_star from "@pageImage/create/full_star.svg";
import create from "@pageImage/create/create.svg";
import axios from "axios";
const setClick = {
  hidden: {
    x: 0,
    y: 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  exit: {
    zIndex: 5,
  },
};
const starAnimation = {
  enter: {
    scale: 1,
  },
  showFull: {
    scale: [0.8, 2, 1],
    rotate: [-75, 75],
  },
  showEmpty: {
    scale: [0.1, 2, 1],
    rotate: [-75, 75],
  },
  exit: {
    scale: [0.8, 1],
  },
};
const editAnimation = {
  enter: {
    rotate: 0,
  },
  done: {
    rotate: [-90, 0],
    scale: [1.2, 1],
  },
  edit: {
    rotate: [90, 0],
    scale: [1.2, 1],
  },
};
const Page = () => {
  const [data, setApi] = useState<any>([]);
  const [star, setStar] = useState(false);
  const [image, setImage] = useState<File>();
  const [file, setFile] = useState(false);
  const [selectFile, setSelectFile] = useState<String>("");
  const refName = useRef(null);
  const refDetail = useRef(null);
  const refMoney = useRef(null);
  const [editP, setEdit] = useState(false);
  const [selectId, setSelectId] = useState(null);
  const [createProduct, setCreateProduct ] = useState <Boolean >(false);
  useEffect(function () {
    axios
      .get("http://localhost:3001/api/source")
      .then((req) => setApi(req.data));
  }, []);
  const uploadToClient = (event: any) => {
    if (event.target.files[0]) {
      const i = event.target.files[0];
      setSelectFile(URL.createObjectURL(i));
      setImage((): any => {
        const imageFake = i;
        imageFake.name.replace(" ", "-");
        return imageFake;
      });
    }
  };
  const layout = useRef<HTMLLIElement>(null);
  const updateProduct = (
    newContent: any | null,
    oldContent: any,
    method: string
  ) => {
    const formData = new FormData();
    if (image) {
      formData.append(`${image.name}`, image);
    }
      const postNewData = new Promise((resolve, reject) => {
        axios({
          method: method,
          url: "http://localhost:3001/api/changeProduct",
          data : {
            new: newContent,
            old: oldContent
          },
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((req: any) => {
            const newData = data;
            if (selectId) {
              if (req.data.product) newData.splice(selectId - 1, 1, req.data.product);
              else newData.splice(selectId - 1, 1);
            }
            setApi(newData);
          })
          .then(() => {
            setSelectId(null);
          });
      });

      const postImage = new Promise((resolve, reject) => {
        axios.post("/api/image", formData);
        setSelectFile("");
      });
  };
  if (data.length != 0)
    return (
      <section className="py-[140px] ">
        <div className="relative max-w-[1440px] lg:px-[120px] px-[20px] gap-[20px] flex flex-wrap list-none mx-auto">
          {data.map((user: any, index: any) => {
            if (selectId != index + 1)
              return (
                <motion.li
                  layoutId={index + 1}
                  key={index + 1}
                  onClick={() => {
                    setSelectId(index + 1);
                    setStar(user.popular ? true : false);
                  }}
                  animate="show"
                  initial="hidden"
                  variants={setClick}
                  exit="exit"
                  className={`${selectId ? `blur-[1.5px]` : ``} ${
                    selectId == index + 1 ? "opacity-0" : "opacity-100"
                  }  group relative overflow-hidden lg:flex-col lg:h-[auto] h-[150px] group flex gap-[10px] justify-between  bg-[#c9c9c94d] hover:bg-[#f95555]  hover:scale-105 hover:z-[2] border-[#f95555] rounded-[20px] lg:w-[calc((100%-40px)/3)] w-[100%]`}
                >
                  <motion.div
                    className={`lg:rounded-[20px_20px_0_0] aspect-[144/90] rounded-[20px_0_0_20px] flex overflow-hidden lg:w-[100%] w-[40%] m-0`}
                  >
                    <Image
                      src={`/${user.url}`}
                      className="w-[100%] pointer-events-none h-[100%] object-cover group-hover:scale-150 transition-[transform,background] duration-[2s]  "
                      alt="anh"
                      width={180}
                      height={180}
                    ></Image>
                  </motion.div>
                  <motion.div className="flex flex-col flex-wrap justify-around content-center z-[1] my-[10px] lg:w-[100%] w-[35%]">
                    <motion.h2 className="font-[700] flex justify-center items-center text-[24px]">
                      {user.name}
                    </motion.h2>
                    <motion.p className="font-[500] text-[14px]">
                      {user.detail}
                    </motion.p>
                  </motion.div>
                  <motion.div className="lg:gap-[10px] relative my-[10px] flex-wrap items-center z-[1] flex flex-col justify-around">
                    <motion.p className="flex justify-center lg:mr-0 mr-[20px] font-[600] items-center">
                      {user.money}
                    </motion.p>
                  </motion.div>
                </motion.li>
              );
            else
              return (
                <motion.li
                  layoutId={index + 1}
                  key={index + 1}
                  onClick={() => {
                    setSelectId(index + 1);
                    setStar(user.popular ? true : false);
                  }}
                  animate="show"
                  initial="hidden"
                  variants={setClick}
                  exit="exit"
                  className={`${selectId ? `blur-[1.5px]` : ``} ${
                    selectId == index + 1 ? "opacity-0" : "opacity-100"
                  }  group relative overflow-hidden lg:flex-col lg:h-[auto] h-[150px] group flex gap-[10px] justify-between hover:bg-[#f95555]  hover:scale-105 hover:z-[2] rounded-[20px] lg:w-[calc((100%-40px)/3)] w-[100%]`}
                >
                  <motion.div
                    className={`lg:rounded-[20px_20px_0_0] aspect-[144/90] rounded-[20px_0_0_20px] flex overflow-hidden lg:w-[100%] w-[40%] m-0`}
                  >
                    <motion.div className="w-[100%] pointer-events-none h-[100%] object-cover group-hover:scale-150 transition-[transform,background] duration-[2s]  "></motion.div>
                  </motion.div>
                  <motion.div className="flex flex-col flex-wrap justify-around content-center z-[1] my-[10px] lg:w-[100%] w-[35%]">
                    <motion.h2 className="font-[700] flex justify-center items-center text-[24px]"></motion.h2>
                    <motion.p className="font-[500] text-[14px]"> </motion.p>
                  </motion.div>
                  <motion.div className="lg:gap-[10px] relative my-[10px] flex-wrap items-center z-[1] flex flex-col justify-around">
                    <motion.p className="flex justify-center lg:mr-0 mr-[20px] font-[600] items-center"></motion.p>
                  </motion.div>
                </motion.li>
              );
          })}
          <AnimatePresence>
            {selectId && (
              <>
                <div
                  onClick={(e: React.MouseEvent) => {
                    if (!layout.current?.contains(e.target as Node)) {
                      setEdit(false);
                      setSelectId(null);
                      setSelectFile("");
                    }
                  }}
                  className="fixed flex justify-center blur-0 items-center flex-wrap  w-[100vw] h-[100vh] z-[4] left-0 top-0"
                >
                  <motion.li
                    ref={layout}
                    layoutId={selectId}
                    className={`group fixed  translate-y-[-50%] z-[5] overflow-hidden lg:h-[auto] h-[150px] group flex gap-[10px] justify-between  bg-[#f95555]  hover:scale-105  border-[#f95555] rounded-[20px] lg:w-[calc((100%-40px)/3)] max-w-[480px] w-[100%]`}
                    animate="show"
                    initial="hidden"
                    variants={setClick}
                    exit="exit"
                  >
                    <div className="w-[80%] relative overflow-hidden lg:flex-col lg:h-[auto] h-[150px] group flex gap-[10px] justify-between bg-[#f95555]">
                      <motion.label
                        htmlFor="upload_file"
                        className={`lg:rounded-[20px_0px_0_0]  cursor-pointer aspect-[144/90] rounded-[20px_0_0_20px] flex overflow-hidden lg:w-[100%] w-[40%] m-0`}
                      >
                        {selectFile ? (
                          <Image
                            src={`${selectFile}`}
                            className="w-[100%] pointer-events-none h-[100%] object-cover   "
                            alt="anh"
                            width={180}
                            height={180}
                          ></Image>
                        ) : (
                          <Image
                            src={`/${data[selectId - 1]?.["url"]}`}
                            className="w-[100%] pointer-events-none h-[100%] object-cover   "
                            alt="anh"
                            width={180}
                            height={180}
                          ></Image>
                        )}
                      </motion.label>
                      {editP ? (
                        <input
                          onChange={(event: any) => {
                            uploadToClient(event);
                            setFile(true);
                          }}
                          type="file"
                          accept=".jdg , .png"
                          id="upload_file"
                          className="hidden"
                        />
                      ) : (
                        ""
                      )}
                      <motion.div className="flex flex-col flex-wrap justify-around content-center z-[1] my-[10px] lg:w-[100%] w-[35%]">
                        <motion.h2
                          ref={refName}
                          contentEditable={editP}
                          className="font-[700] flex lg:justify-center justify-start lg:max-w-[80%] max-w-[100px] items-center text-[24px]"
                        >
                          {data[selectId - 1]?.["name"]}
                        </motion.h2>
                        <motion.p
                          ref={refDetail}
                          contentEditable={editP}
                          className="font-[500] lg:max-w-[80%] max-w-[100px] text-[14px]"
                        >
                          {data[selectId - 1]?.["detail"]}
                        </motion.p>
                      </motion.div>
                      <motion.div
                        ref={refMoney}
                        className="lg:gap-[10px] relative my-[10px] flex-wrap items-center z-[1] flex flex-col justify-around"
                      >
                        <motion.p
                          contentEditable={editP}
                          className="flex justify-center lg:max-w-[80%] max-w-[100px] lg:mr-0 mr-[20px] font-[600] items-center"
                        >
                          {data[selectId - 1]?.["money"]}
                        </motion.p>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring" }}
                      className="flex flex-col justify-center  p-[20px] gap-[20px] z-[5]"
                    >
                      <motion.label
                        htmlFor="edit_or_done"
                        className="cursor-pointer"
                        initial="enter"
                        animate={editP ? "done" : "edit"}
                        variants={editAnimation}
                        transition={{
                          type: "spring",
                          bounce: 0.5,
                          duration: 1,
                        }}
                      >
                        <Image
                          src={editP ? done : edit}
                          alt="edit produce"
                          width={25}
                          height={25}
                        ></Image>
                      </motion.label>
                      <input
                        type="button"
                        id="edit_or_done"
                        onClick={async (e: React.MouseEvent<HTMLElement>) => {
                          if (editP) {
                            const newContent = {
                              name: refName!.current?.["innerText"],
                              detail: refDetail!.current?.["innerText"],
                              money: refMoney!.current?.["innerText"],
                              popular: star,
                              url: image
                                ? `images/${image?.name}`
                                : data[selectId - 1].url,
                            };
                            if(!createProduct){await updateProduct(
                              newContent,
                              data[selectId - 1],
                              "put"
                            );
                            }else if(image) {
                              await updateProduct(
                                newContent,
                                null,
                                "post"
                              );
                            }
                          }
                          setEdit(!editP);
                        }}
                        className="w-[50px] hidden h-[50px]"
                      />
                      <button
                        onClick={async (e: React.MouseEvent<HTMLElement>) => {
                          await updateProduct(
                            null,
                            data[selectId - 1],
                            "delete"
                          );
                        }}
                      >
                        <Image
                          src={del}
                          alt="edit produce"
                          width={25}
                          height={25}
                        ></Image>
                      </button>

                      {editP ? (
                        <>
                          <motion.label
                            htmlFor="star"
                            className="cursor-pointer"
                            initial="enter"
                            animate={star ? "showFull" : "showEmpty"}
                            exit="exit"
                            variants={starAnimation}
                            transition={{
                              type: "spring",
                              damping: 3,
                              stiffness: 50,
                              restDelta: 0.001,
                            }}
                          >
                            <Image
                              src={star ? full_star : empty_star}
                              alt="start"
                              width={25}
                              height={25}
                            ></Image>
                          </motion.label>
                          <button
                            id="star"
                            onClick={(e: React.MouseEvent) => {
                              setStar(!star);
                            }}
                          ></button>
                        </>
                      ) : null}
                    </motion.div>
                  </motion.li>
                </div>
              </>
            )}
          </AnimatePresence>
          <label
            htmlFor="create"
            className="border-[2px] cursor-pointer rounded-[20px] justify-center content-center flex-wrap lg:w-[calc((100%-40px)/3)] w-[100%] flex lg:flex-col gap-[20px]"
          >
            <div className="rounded-full w-[75px] h-[75px] ring-offset-[5px] ring ring-[#f95555]">
              <Image
                src={create}
                alt="create"
                width={75}
                height={75}
                className="w-[100%] h-[100%]"
              ></Image>
            </div>
          </label>
          <input
            onClick={() => {
              data.push({
                detail: "nhập mô tả",
                money: "Nhập tiền",
                name: "Nhập tên",
              });
              setSelectId(data.length);
              setEdit(true);
              setCreateProduct(true);
            }}
            type="button"
            id="create"
          />
        </div>
      </section>
    );
};

export default Page;
