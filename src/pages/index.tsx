import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

import { Keyboard, EffectFade, Navigation, Parallax } from 'swiper/modules';

import BlockVideo from "../components/block-videos";

import imganimation from "../assets/ezgif-2-3e43d18e07.webp";

const IndexPage = () => {

	React.useEffect(() => {
		setTimeout(() => {
			document.getElementById('loadingpage')?.classList.add('done');
		}, 1500);
	}, []);

	return (

		<Layout>

			<div id="loadingpage" dangerouslySetInnerHTML={{
				__html: `<svg class="icon logoanimation" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 784.19 497.39" style="enable-background:new 0 0 784.19 497.39;" xml:space="preserve"><path d="M100.79,201.17l22.78-73.34l22.78,73.34h54.88l19.9-88.97c4.05,53.78,47.73,94.94,103.17,94.94 c47.33,0,85.45-29.79,98.58-71.11v65.13h57.39v-72.72l33.99,72.72H630.8v-95.76l70.71,95.76h44.83V6.89h-57.11v87.66L628.02,6.89 h-54.33v180.69l-37.15-65.51c10.76-4.99,19.12-12.16,25.06-21.51c5.94-9.34,8.91-20.03,8.91-32.06c0-11.84-2.84-22.44-8.49-31.78 c-5.68-9.34-14.07-16.65-25.22-21.92s-24.61-7.91-40.39-7.91h-94.36l20.81,25.58V72c-13.15-41.37-51.3-71.09-98.58-71.09 c-39.31,0-72.09,20.49-89.67,50.92l10.04-44.95h-59.89l-19.16,95.51L123.56,3.56L81.51,102.4L62.33,6.89H2.44l43.45,194.28 C45.89,201.17,100.79,201.17,100.79,201.17z M480.26,52.41h6.7c8.17,0,14.49,1.89,18.94,5.69c4.46,3.8,6.68,8.93,6.68,15.4 c0,6.49-2.23,11.61-6.68,15.4c-4.46,3.8-10.76,5.69-18.94,5.69h-6.7V52.41z M324.31,59.56c24.78,0,44.64,18.61,44.64,44.47 c0,25.78-19.79,44.47-44.64,44.47c-24.89,0-44.64-18.73-44.64-44.47C279.67,78.19,299.49,59.56,324.31,59.56z M745.8,274.03 l33.77-36.43H674.73l11.26-12.14H538.17l-33.77,36.43h104.84l-11.26,12.14H745.8z M183.63,274.03l-11.26-12.14h104.84 l-33.77-36.43H95.62l11.26,12.14H2.04l33.77,36.43H183.63z M527.95,419.6h54.59v-50.22h-54.59v-20.81h67.97l-6.96-50.22H470.84 v61.39c-14.19-36.87-50.26-61.39-94.6-61.39h-68.8v146.11L258.2,298.34h-68.8l-65.47,194.28h54.12l69.71-51.7l14.06,51.7h114.43 c44.42,0,80.42-24.57,94.6-61.4v61.4h120.63l6.96-50.22h-70.48L527.95,419.6L527.95,419.6z M202.05,433.11l21.87-79.85 l21.72,79.85H202.05z M373.72,438.74h-8.36v-86.6h8.36c28.51,0,44.57,17.84,44.57,43.3C418.29,421.36,401.79,438.74,373.72,438.74 z M671.68,298.31h-68.8v194.28h68.8c57.6,0,101.13-41.31,101.13-97.14C772.81,339.22,728.87,298.31,671.68,298.31z M672.66,438.74 h-8.36v-86.6h8.36c28.17,0,44.57,17.5,44.57,43.3C717.23,420.91,701.17,438.74,672.66,438.74z M144.37,372.97H92.56v-22.76h66 l17.48-51.91H6.55l28.07,34.5v159.77h57.94v-67.72h35.11L144.37,372.97z M404.16,243.43l-16.82-17.9h-16.84v48.5h19.77v-17.82 l16.78,17.82h16.68v-48.5h-19.6v17.9H404.16z M462.29,225.53h-25.61v48.5h25.61c13.96,0,24.84-10.12,24.84-24.25 C487.11,235.92,476.52,225.53,462.29,225.53z M461.06,256.06h-4.96V243.5h4.96c4.01,0,6.36,2.53,6.36,6.28 C467.42,253.51,465.09,256.06,461.06,256.06z M315.78,274.03l20.17-11.69l4.71,11.69h21.64l-24.74-48.43l0.04-0.08h-16.97 l0.04,0.08l-24.74,48.43H315.78z M329.1,245.32l5.28,13.09h-10.4L329.1,245.32z"></path></svg>`
			}} />

			<Swiper
				modules={[EffectFade, Parallax, Keyboard, Navigation]}
				effect={'fade'}
				loop={true}
				navigation={true}
				keyboard={{
					enabled: true,
				}}
				mousewheel={true}
				speed={1000}
				parallax={true}
				className="mySwiper">
				<SwiperSlide className="slider slider_1">
					<div className="my-auto px-10 py-20 w-full mx-auto justify-center flex" data-swiper-parallax="300">
						<StaticImage
							src="../assets/logo.png"
							alt="Worn and Faded"
							placeholder="none"
							className="max-w-xs w-full md:max-w-md 3xl:max-w-xl 10xl:max-w-2xl 13xl:max-w-4xl mx-auto"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_2" key="slider_2">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-20">
							<div className="3xl:my-20">
								<div className="text-center leading-[1.2] font-bold text-3xl lg:text-4xl 3xl:text-5xl 6xl:text-6xl 11xl:text-7xl mt-20 mb-4" data-swiper-parallax="1000">
									This is the story of how a throw-away promotional item became an indispensable form of exposure for bands and a tool of self-expression and rebellion for generations of youth.
								</div>
								<div className="text-center leading-[1.2] font-bold text-3xl lg:text-4xl 3xl:text-5xl 6xl:text-6xl 11xl:text-7xl" data-swiper-parallax="-300">
									The band tee remains economically and culturally relevant, holding a special place in people’s hearts and wardrobes. We aim to explore and discover why.
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center" data-swiper-parallax="300">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 1</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_3">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<img src={imganimation} alt="" className="min-h-[70vh]" />
								{/* <StaticImage
									src="../assets/ezgif-2-ee23904e52.gif"
									alt="Worn and Faded"
									placeholder="none"
									// layout="fullWidth"
									className="w-full mx-auto"
								/> */}
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 2</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide className="slider slider_33">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b" data-swiper-parallax="1000">Contact</div>
								<ul className="space-y-10 text-center text-xl md:text-4xl 6xl:text-6xl 3xl:my-20" data-swiper-parallax="-1000">
									<li><a className="underline font-a" href="mailto:info@wornandfaded.com">info@wornandfaded.com</a></li>
									<li><a className="underline font-a" href="https://wornandfaded.com/">https://wornandfaded.com</a></li>
									<li><a className="underline font-a" href="https://www.instagram.com/wornandfadeddoc/">#wornandfadeddoc</a></li>
								</ul>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center" data-swiper-parallax="300">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 31</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>

		</Layout >

		// </div>

	)
}

export const Head = () => <Seo
	title="WORN and FADED - The untold history of the Rock Tee"
	description="Worn and Faded is a documentary focusing on the history, evolution, design, and social/cultural relevance of the “rock tee” from the late 1960s to the present."
	children={<meta property="og:image" content="https://wornandfaded.com/images/og-image.jpg" />}
/>

export default IndexPage
