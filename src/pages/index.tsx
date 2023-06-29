import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const IndexPage = () => {

  return (

    <Layout>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
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
