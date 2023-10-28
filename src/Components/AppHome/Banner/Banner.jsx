"use client";
// import Image from "next/image"
import ContentBanner from "./ContentBanner";
// import bannerImage from "../../../assets/banner.png";
import Lottie from "lottie-react";
import banner from "@/Animation/banner.json";
import background_bottom_shape from "@/Animation/background-bottom-shape.json";
import background_top_shape from "@/Animation/background-top-shape";

const Banner = () => {
  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: education,
  //     rendererSettings: {
  //         preserveAspectRatio: "xMidYMid slice",
  //     },
  //relative bottom-0 left-0
  // };
  return (
    <div className="px-[1.3rem] pt-8 relative" >
      <div >
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-10 items-center justify-between ">
          <ContentBanner />
          <div>
            {/* <Image className='rounded-br-[60px] h-auto'
          src={bannerImage}
          alt="Picture of the author"
        /> */}
            <Lottie
              className="mx-auto my-14"
              animationData={banner}
              loop={true}
              height={400}
              width={400}
            />
          </div>
        </div>
        <Lottie
          className="mx-auto w-[250px] h-[250px] absolute bottom-0 left-0 -z-50"
          animationData={background_bottom_shape}
          loop={true}
          height={200}
          width={200}
        />
        <Lottie
          className="mx-auto w-[250px] h-[250px] absolute top-0 right-0 -z-50"
          animationData={background_top_shape}
          loop={true}
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Banner;
