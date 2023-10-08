'use client'
// import Image from "next/image"
import ContentBanner from "./ContentBanner";
import bannerImage from '../../../assets/banner.png'
import Lottie from "lottie-react";
import education from '@/Animation/education.json'

const Banner = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: education,
//     rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice",
//     },
// };
  return (
    <div className="px-[1.3rem] pt-8">
    <div className="flex flex-col lg:flex-row gap-20 lg:gap-10 items-center justify-between">
      <ContentBanner />
      <div>
        {/* <Image className='rounded-br-[60px] h-auto'
          src={bannerImage}
          alt="Picture of the author"
        /> */}
        <Lottie
                className="mx-auto my-24"
                animationData={education} loop={true}
                height={400}
                width={400}
            />
      </div>
    </div>
  </div>
  )
}

export default Banner
