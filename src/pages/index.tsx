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
          <div className="container my-auto p-5 mx-auto">
            <StaticImage
              src="../assets/logo.png"
              alt="Worn and Faded"
              placeholder="blurred"
              layout="fullWidth"
              className="max-w-xs md:max-w-md 3xl:max-w-xl 10xl:max-w-2xl 13xl:max-w-4xl mx-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
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
