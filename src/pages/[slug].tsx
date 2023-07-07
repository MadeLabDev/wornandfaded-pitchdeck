import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Keyboard, Navigation, Parallax } from 'swiper/modules';

import BlockVideo from "../components/block-videos";

const IndexPage = () => {

	return (

		<Layout>

			EVENTS

		</Layout>

	)
}

export const Head = () => <Seo

	title="WORN and FADED - The untold history of the Rock Tee"
	description="Worn and Faded is a documentary focusing on the history, evolution, design, and social/cultural relevance of the “rock tee” from the late 1960s to the present."
	children={<meta property="og:image" content="https://wornandfaded.com/images/og-image.jpg" />}
/>

export default IndexPage
