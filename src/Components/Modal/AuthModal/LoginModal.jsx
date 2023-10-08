"use client";
import { closeModal } from "@/Redux/modalFeatures/modalSlice";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaKey, FaMailBulk,FaUser,FaCamera } from "react-icons/fa";
import Lottie from "lottie-react";
import { useDispatch, useSelector } from "react-redux";
import login from "../../../Animation/login-lottie.json";

const LoginModal = () => {
    const [load, setLoad] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modals.isOpen);
  //   console.log(isModalOpen, 'open the value from login modal');
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

    const createUserHandle = async (data) => {
      console.log(data)

  }
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: login,
  //   rendererSettings:{ preserveAspectRatio: "xMidYMid slice", },
  // };
  return (
    <>
      {isModalOpen && (
        <div className="justify-start items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen w-full">
          <div className="relative w-full ">
            <img
              src="https://i.ibb.co/LpjxG3k/494.jpg"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
            <div
              className="border-0 rounded-lg shadow-lg relative flex flex-col  outline-none focus:outline-none h-screen
           bg-gray-900 bg-opacity-75 w-full
          "
            >
              <div className="flex items-center justify-between p-5 border-b border-solid border-slate-400 rounded-t bg-white px-4 py-3">
                <h3 className="text-3xl font-semibold">Modal Title</h3>
                <button className="p-1 ml-auto bg-transparent border-0 text-cyan-500 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                  <span
                    className="bg-transparent text-cyan-500 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                    onClick={handleCloseModal}
                  >
                    ×
                  </span>
                </button>
              </div>

              <div className="py-16  md:px-24  lg:py-10">
                <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
                  <div className="w-full max-w-xl  lg:w-1/3 ">
                    <Lottie
                      animationData={login} 
                      loop = {true}
                       height={200} 
                       width={200} 
                     />
                  </div>
                  {/* login from */}
                  <div className="w-full max-w-xl xl:px-8 lg:w-5/12">
                  <div className="bg-[#0083db] rounded shadow-2xl p-7 sm:p-10 ">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-white">
                      Register
                    </h3>
                    <form onSubmit={handleSubmit(createUserHandle)}>
                      <div className="mb-1 sm:mb-2">
                        <div className='relative  mb-3'>
                          <FaUser className='absolute left-4 top-[30%] text-black '></FaUser>
                          <input
                            {...register("name", { required: "Name is required!" })}
                            placeholder="Your Name Here"
                            type="text"
                            className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                          />
                          {errors?.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className='relative  mb-3'>
                          <FaMailBulk className='absolute left-4 top-[30%] text-black '></FaMailBulk>
                          <input
                            {...register("email", {
                              required: "Email is required",
                              pattern: { value: /\S+@\S+\.\S+/, message: 'Email is not valid!' }
                            })}
                            placeholder="Type Your Email"
                            type="text"
                            className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                          />
                          {errors?.email && <p className='text-red-600'>{errors?.email.message}</p>}
                        </div>
                        <div className='relative mb-3'>
                          <FaCamera className='absolute left-4 top-[30%] text-black '></FaCamera>
                          <input
                            {...register("image", { required: "image is required!" })}
                            placeholder="Upload Image"
                            type="file"
                            className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                          />
                          {errors?.image && <p className='text-red-600'>{errors?.image.message}</p>}
                        </div>
                        <div className='relative mb-3'>
                          <FaKey className='absolute left-4 top-[30%] text-black '></FaKey>
                          <input
                            {...register("password", {
                              required: "Password is required!",
                              pattern: { value: /(?=.*[!@#$&*])/, message: 'password should be minimum one special character' },
                              minLength: { value: 6, message: 'password should be must 6 characters' }
                            })}
                            placeholder="password"
                            type="password"
                            className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                          />
                          {errors?.password && <p className='text-red-600'>{errors?.password.message}</p>}
                        </div>
                      </div>

                      <div className="mt-4 mb-2 sm:mb-4">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full py-3 px-6 font-medium hover:bg-gray-700 tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black"
                        >
                          {
                            load ? <span className='border-2 border-dashed border-white animate-spin w-7 h-7 rounded-full'></span> : ' Register'
                          }
                        </button>
                      </div>
                    </form>
                    <div>
                      {/* <SocialLogin callbackUrl={callbackUrl}></SocialLogin> */}
                      <p className="text-xs text-gray-600 sm:text-sm mt-5">
                        Already have an account ? <Link href='/login' className='font-semibold'> Login</Link>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
