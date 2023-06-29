import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const IndexPage = () => {

  return (

    <Layout>

      {/* https://swiperjs.com/demos */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="slider slider_1">
          <div className="my-auto px-10 py-20 w-full mx-auto">
            <StaticImage
              src="../assets/logo.png"
              alt="Worn and Faded"
              placeholder="blurred"
              layout="fullWidth"
              className="max-w-xs w-full md:max-w-md 3xl:max-w-xl 10xl:max-w-2xl 13xl:max-w-4xl mx-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider_2">
          <div className="my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
            <div className="overflow-scroll max-h-screen py-2 xl:mt-20">
              <div className="text-center leading-[1.2] font-bold text-3xl lg:text-4xl 3xl:text-5xl 6xl:text-6xl 11xl:text-7xl mt-20 mb-4">
                This is the story of how a throw-away promotional item became an indispensable form of exposure for bands and a tool of self-expression and rebellion for generations of youth.
              </div>
              <div className="text-center leading-[1.2] font-bold text-3xl lg:text-4xl 3xl:text-5xl 6xl:text-6xl 11xl:text-7xl">
                The band tee remains economically and culturally relevant, holding a special place in people’s hearts and wardrobes. We aim to explore and discover why. 
              </div>
              <div className="liner mt-10 lg:mt-20 mb-20 text-center">
                <div className="liner__inner"></div>
                <div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 1</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider_3">
        <div className="my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
          <div className="overflow-scroll max-h-screen py-2 xl:mt-10">
              <div className="my-auto w-full mx-auto mt-20">
                <StaticImage
                  src="../assets/tshirt.png"
                  alt="Worn and Faded"
                  placeholder="blurred"
                  layout="fullWidth"
                  className="w-full mx-auto"
                />
              </div>
              <div className="liner mt-10 lg:mt-20 mb-20 text-center">
                <div className="liner__inner"></div>
                <div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 1</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider_4">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="slider slider_5">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="slider slider_6">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="slider slider_7">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="slider slider_8">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="slider slider_9">
          Slide 9
        </SwiperSlide>
      </Swiper>

    </Layout>

  )
}

export const Head = () => <Seo 
title="WORN and FADED - The untold history of the Rock Tee"
description="Worn and Faded is a documentary focusing on the history, evolution, design, and social/cultural relevance of the “rock tee” from the late 1960s to the present."
children={<meta property="og:image" content="https://wornandfaded.com/images/og-image.jpg" />}
/>

export default IndexPage
