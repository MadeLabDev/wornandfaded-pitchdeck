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

import imganimation from "../assets/tshirt.webp";

const IndexPage = () => {

	React.useEffect(() => {
		setTimeout(() => {
			document.getElementById('loadingpage')?.classList.add('done');
		}, 3000);
	}, []);

	return (

		<Layout>

			{/* <div id="loadingpage" dangerouslySetInnerHTML={{
				__html: `<svg class="icon logoanimation" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 784.19 497.39" style="enable-background:new 0 0 784.19 497.39;" xml:space="preserve"><path d="M100.79,201.17l22.78-73.34l22.78,73.34h54.88l19.9-88.97c4.05,53.78,47.73,94.94,103.17,94.94 c47.33,0,85.45-29.79,98.58-71.11v65.13h57.39v-72.72l33.99,72.72H630.8v-95.76l70.71,95.76h44.83V6.89h-57.11v87.66L628.02,6.89 h-54.33v180.69l-37.15-65.51c10.76-4.99,19.12-12.16,25.06-21.51c5.94-9.34,8.91-20.03,8.91-32.06c0-11.84-2.84-22.44-8.49-31.78 c-5.68-9.34-14.07-16.65-25.22-21.92s-24.61-7.91-40.39-7.91h-94.36l20.81,25.58V72c-13.15-41.37-51.3-71.09-98.58-71.09 c-39.31,0-72.09,20.49-89.67,50.92l10.04-44.95h-59.89l-19.16,95.51L123.56,3.56L81.51,102.4L62.33,6.89H2.44l43.45,194.28 C45.89,201.17,100.79,201.17,100.79,201.17z M480.26,52.41h6.7c8.17,0,14.49,1.89,18.94,5.69c4.46,3.8,6.68,8.93,6.68,15.4 c0,6.49-2.23,11.61-6.68,15.4c-4.46,3.8-10.76,5.69-18.94,5.69h-6.7V52.41z M324.31,59.56c24.78,0,44.64,18.61,44.64,44.47 c0,25.78-19.79,44.47-44.64,44.47c-24.89,0-44.64-18.73-44.64-44.47C279.67,78.19,299.49,59.56,324.31,59.56z M745.8,274.03 l33.77-36.43H674.73l11.26-12.14H538.17l-33.77,36.43h104.84l-11.26,12.14H745.8z M183.63,274.03l-11.26-12.14h104.84 l-33.77-36.43H95.62l11.26,12.14H2.04l33.77,36.43H183.63z M527.95,419.6h54.59v-50.22h-54.59v-20.81h67.97l-6.96-50.22H470.84 v61.39c-14.19-36.87-50.26-61.39-94.6-61.39h-68.8v146.11L258.2,298.34h-68.8l-65.47,194.28h54.12l69.71-51.7l14.06,51.7h114.43 c44.42,0,80.42-24.57,94.6-61.4v61.4h120.63l6.96-50.22h-70.48L527.95,419.6L527.95,419.6z M202.05,433.11l21.87-79.85 l21.72,79.85H202.05z M373.72,438.74h-8.36v-86.6h8.36c28.51,0,44.57,17.84,44.57,43.3C418.29,421.36,401.79,438.74,373.72,438.74 z M671.68,298.31h-68.8v194.28h68.8c57.6,0,101.13-41.31,101.13-97.14C772.81,339.22,728.87,298.31,671.68,298.31z M672.66,438.74 h-8.36v-86.6h8.36c28.17,0,44.57,17.5,44.57,43.3C717.23,420.91,701.17,438.74,672.66,438.74z M144.37,372.97H92.56v-22.76h66 l17.48-51.91H6.55l28.07,34.5v159.77h57.94v-67.72h35.11L144.37,372.97z M404.16,243.43l-16.82-17.9h-16.84v48.5h19.77v-17.82 l16.78,17.82h16.68v-48.5h-19.6v17.9H404.16z M462.29,225.53h-25.61v48.5h25.61c13.96,0,24.84-10.12,24.84-24.25 C487.11,235.92,476.52,225.53,462.29,225.53z M461.06,256.06h-4.96V243.5h4.96c4.01,0,6.36,2.53,6.36,6.28 C467.42,253.51,465.09,256.06,461.06,256.06z M315.78,274.03l20.17-11.69l4.71,11.69h21.64l-24.74-48.43l0.04-0.08h-16.97 l0.04,0.08l-24.74,48.43H315.78z M329.1,245.32l5.28,13.09h-10.4L329.1,245.32z"></path></svg>`
			}} /> */}

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
					<div className="my-auto px-10 py-20 w-full mx-auto justify-center flex">
						<StaticImage
							src="../assets/logo.png"
							alt="Worn and Faded"
							placeholder="none"
							// layout="fullWidth"
							className="max-w-xs w-full md:max-w-md 3xl:max-w-xl 10xl:max-w-2xl 13xl:max-w-4xl mx-auto"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_2" key="slider_2">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-20">
							<div className="3xl:my-20">
								<div className="text-center leading-[1.2] font-bold text-3xl lg:text-4xl 3xl:text-5xl 6xl:text-6xl 11xl:text-7xl mt-20 mb-4">
									This is the story of how a throw-away promotional item became an indispensable form of exposure for bands and a tool of self-expression and rebellion for generations of youth.
								</div>
								<div className="text-center leading-[1.2] font-bold text-3xl lg:text-4xl 3xl:text-5xl 6xl:text-6xl 11xl:text-7xl">
									The band tee remains economically and culturally relevant, holding a special place in people’s hearts and wardrobes. We aim to explore and discover why.
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 1</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_3">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<img src={imganimation} alt="" />
								{/* <StaticImage
									src="../assets/tshirt.webp"
									alt="Worn and Faded"
									placeholder="none"
									// layout="fullWidth"
									className="w-full mx-auto"
								/> */}
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 2</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_4 fixedsize">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3 items-center">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										Wearing a shirt from a favorite band can bring back memories of concerts attended, songs that resonated with us during certain times, and the emotions tied to those experiences.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/tshirt5.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 3</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_5 fixedsize">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3 items-center">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										When we put on a band shirt, we want to represent the artists, the music, and the movements that have had a profound impact on our lives.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/tshirt8.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 4</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_6 fixedsize">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3 items-center">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										It says something to the world about our personal history and individuality.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/tshirt6.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 5</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_7 fixedsize">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3 items-center">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										The cultural relevance of the band tee lies in its ability to capture the essence of music, evoke nostalgia, and serve as a testament to the power of music in shaping our identities.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/tshirt7.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 6</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_8">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										Vivienne Westwood transformed tees into powerful statements of rebellion and individuality, leaving a lasting impact on fashion, music, and culture.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/lady.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 7</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_9">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										What is the meaning of your average teenager proudly wearing a replica of a t-shirt for a concert twenty-five years before their birth?
									</div>
									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										For nearly 60 years, the band tee has been an essential form of self-expression for young people. This film will track not only the birth and evolution of the band tee and how it became a ubiquitous part of fashion but how and why it became the ultimate symbol of nonconformity.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/teen.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 7</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_10">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										Initially, the band tee faced an uphill battle to gain acceptance as many bands felt that selling them was proof that they had “sold out.”
									</div>
									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Bill Graham was a legendary concert promoter and manager in the Bay Area who worked with bands such as the Grateful Dead, Santana, and Jefferson Airplane.  He changed their perceptions about the band tee and convinced them that they were an essential tool for promotion and income. He founded the first music merchandising company Winterland Productions, in 1973.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/guy.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 8</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_11">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										By the mid 1970s, the band shirt had become a fashion icon worn by the likes of David Bowie, Iggy Pop, and John Lennon.
									</div>
									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Fans began using the tee as a tool of self-expression as timeless designs by the likes of the Ramones, Motorhead, the Rolling Stones, and Joy Division were created. At the end of the decade, the sight of a mech table at a concert was not uncommon.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/art.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 9</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_12">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										In the 1980s, the band tee had become an essential tool of identity and rebellion for young people in their quest to individuate themselves.
									</div>
									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										The golden age of the band tee was ushered in with over-the-top Heavy Metal and Punk tees taking center stage in high school hallways and shopping malls everywhere.  Iconic designs by Metallica, Run DMC, Black Flag, and Iron Maiden became like uniforms to many young people.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/sport.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 10</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_13">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										As the new century dawned, vintage band shirts became some of the most desirable and collectible items in fashion.
									</div>
									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Celebrities such as the Kardashians, Justin Bieber, and Miley Cyrus sported tees from heavy metal bands they likely had never listened to and sent prices soaring. This inspired metal-inspired designs by the likes of Chanel and Balenciaga and even appeared on catwalks in Paris and London.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/young.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 11</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				{/* <SwiperSlide className="slider slider_14">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										The “faux vintage” band tee is a common sight at H&M, Target, and other retailers nowadays.
									</div>
									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Not everyone can afford to shell out hundreds or thousands of dollars for an authentic vintage band tee. To satiate the public’s demand for these tees, which has never been higher, bands and retailers made their own vintage-style tees.
									</div>
								</div>
								<div className="xl:col-span-2 my-10 xl:pl-10">
									<StaticImage
										src="../assets/tshirt2.png"
										alt="Worn and Faded"
										placeholder="none"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 12</div>
							</div>
						</div>
					</div>
				</SwiperSlide> */}
				{/* <SwiperSlide className="slider slider_15 fixedsize">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										In 2021, this Grateful Dead tee from 1967 sold for over $17K at a Sotheby’s auction, making it the most expensive tee ever sold.
									</div>
									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Passionate collectors still hunt for rare originals at flea markets, garage sales, and thrift stores across the globe. With music sales revenue decreasing over the last decade, sales of tees have become economically essential to both independent and mainstream artists.
									</div>
								</div>
								<div className="xl:col-span-2 my-10 xl:pl-10">
									<StaticImage
										src="../assets/tshirt3.png"
										alt="Worn and Faded"
										placeholder="none"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 13</div>
							</div>
						</div>
					</div>
				</SwiperSlide> */}
				<SwiperSlide className="slider slider_16">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b leading-none">Interviews</div>
								<div className="my-auto w-full mx-auto mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Mick Jagger</h2>
										<p className="font-normal font-a xl:text-xl">The Rolling Stones</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Chuck D</h2>
										<p className="font-normal font-a xl:text-xl">Founder of Public Enemy, author and activist</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Jack White</h2>
										<p className="font-normal font-a xl:text-xl">Guitarist, The White Stripes, Solo Artist</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Derek Riggs</h2>
										<p className="font-normal font-a xl:text-xl">Artist and creator of the most famous band mascot Iron Maiden’s ‘Eddie’</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Brian “Pushead” Schroader</h2>
										<p className="font-normal font-a xl:text-xl">Artist and creator of hundred of Metallica and Misfits tees</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Raymond Pettibon</h2>
										<p className="font-normal font-a xl:text-xl">Artist and creator of the Black Flag logo</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Penelope Spheeris</h2>
										<p className="font-normal font-a xl:text-xl">Film director, producer, and screenwriter</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Malcom Gladwell</h2>
										<p className="font-normal font-a xl:text-xl">Journalist, author, podcaster, public speaker </p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">QuestLove</h2>
										<p className="font-normal font-a xl:text-xl">Musician, record producer, DJ, filmmaker</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Taylor Swift</h2>
										<p className="font-normal font-a xl:text-xl">Singer & Songwriter, Fashion Icon</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Tom Morello</h2>
										<p className="font-normal font-a xl:text-xl">Guitarist, Rage Against the Machine</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Joan Jett</h2>
										<p className="font-normal font-a xl:text-xl">Singer, guitarist, record producer and actress</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Henry Rollins</h2>
										<p className="font-normal font-a xl:text-xl">Singer, Black Flag/Rollins Band</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Alex & David Graham</h2>
										<p className="font-normal font-a xl:text-xl">Sons of Promoter Bill Graham</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Frank Vacanti</h2>
										<p className="font-normal font-a xl:text-xl">Production Manager for Winterland Productions</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Peter Patagno</h2>
										<p className="font-normal font-a xl:text-xl">Graphic Designer for world renowned Hipgnosis Designs</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Dave Grohl</h2>
										<p className="font-normal font-a xl:text-xl">Foo Fighters/Nirvana</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Billie Eilish</h2>
										<p className="font-normal font-a xl:text-xl">Singer & Songwriter, Fashion Icon</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Nicky Panicci</h2>
										<p className="font-normal font-a xl:text-xl">Vintage tee collector and historian</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Slash</h2>
										<p className="font-normal font-a xl:text-xl">Musician and guitarist, Guns N' Roses</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Avigail Collins</h2>
										<p className="font-normal font-a xl:text-xl">Stylist to celebs  including Kim  Kardashian</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Patrick Klima</h2>
										<p className="font-normal font-a xl:text-xl">Owner of Wyco Vintage, a Kansas City store featuring the world’s largest collections of vintage band shirts</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Dean Delray</h2>
										<p className="font-normal font-a xl:text-xl">Comedian, podcaster and vintage tee enthusiast</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-2xl">Chuck Klosterman</h2>
										<p className="font-normal font-a xl:text-xl">Author and Social Commentator</p>
									</div>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 14</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_17">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										Visual Style
									</div>
									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Like the tees themselves, Worn & Faded brings a clean yet abraded aesthetic to the film that will keep viewers engaged throughout. The interviews have a unified visual style, using similar lighting techniques and thoughtful background imagery. Animation sequences will be created by Alchemy Studio known for their cutting edge work.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/team.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 15</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_18">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										Archival Material
									</div>
									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										A large part of the film incorporates archival b-roll and stills from the past to tell the story. Whether it be fans at concerts, vintage adverts, or the pressing of tees, there is a wealth of material to draw upon.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/beer.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 16</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_19">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										Soundtrack
									</div>
									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										The film is propelled by a fast-paced energetic soundtrack featuring rock, metal, punk, and hip-hop classics, spanning the past sixty years.
									</div>
								</div>
								<div className="xl:col-span-2 my-10 xl:pl-10">
									<StaticImage
										src="../assets/tshirt4.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 17</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_20">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-7xl lg:text-9xl xl:text-11xl 3xl:text-13xl 6xl:text-15xl 9xl:text-18xl 12xl:text-20xl text-stroke-main-2 font-b">ACT I</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 18</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_21">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="my-auto w-full mx-auto xl:grid xl:grid-cols-3 xl:gap-10">
									<div className="mb-20 xl:mb-0 xl:col-span-1">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
											Setup
										</div>
										<StaticImage
											src="../assets/004.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="mb-20 xl:mb-0 xl:col-span-1">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
											Inciting Incident
										</div>
										<StaticImage
											src="../assets/005.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="mb-20 xl:mb-0 xl:col-span-1">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
											Big Event
										</div>
										<StaticImage
											src="../assets/006.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 19</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_22">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-7xl lg:text-9xl xl:text-11xl 3xl:text-13xl 6xl:text-15xl 9xl:text-18xl 12xl:text-20xl text-stroke-main-2 font-b">ACT II</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 20</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_23">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="my-auto w-full mx-auto xl:flex xl:flex-row xl:gap-10">
									<div className="xl:w-[30%]">
										<StaticImage
											src="../assets/007.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>

									</div>
									<div className="xl:w-[40%]">
										<StaticImage
											src="../assets/008.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:w-[30%]">
										<StaticImage
											src="../assets/009.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
								</div>
								<div className="my-auto w-full mx-auto mt-20 xl:flex xl:flex-row xl:gap-10">
									<div className="xl:w-[25%]">
										<StaticImage
											src="../assets/010.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>

									</div>
									<div className="xl:w-[25%]">
										<StaticImage
											src="../assets/011.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:w-[25%]">
										<StaticImage
											src="../assets/012.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:w-[25%]">
										<StaticImage
											src="../assets/013.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
								</div>
								<div className="my-auto w-full mx-auto mt-20 xl:flex xl:flex-row xl:gap-10">
									<div className="xl:w-1/3">
										<StaticImage
											src="../assets/014.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>

									</div>
									<div className="xl:w-1/3">
										<StaticImage
											src="../assets/015.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:w-1/3">
										<StaticImage
											src="../assets/016.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 21</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_24">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-7xl lg:text-9xl xl:text-11xl 3xl:text-13xl 6xl:text-15xl 9xl:text-18xl 12xl:text-20xl text-stroke-main-2 font-b">ACT III</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 22</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_25">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="my-auto w-full mx-auto xl:grid xl:grid-cols-3 xl:gap-10">
									<div className="mb-20 xl:mb-0 xl:col-span-1">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
											Crisis
										</div>
										<StaticImage
											src="../assets/001.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="mb-20 xl:mb-0 xl:col-span-1">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
											Climax
										</div>
										<StaticImage
											src="../assets/002.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="mb-20 xl:mb-0 xl:col-span-1">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
											Wrap
										</div>
										<StaticImage
											src="../assets/003.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 23</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_26">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center leading-none uppercase text-main-100 py-5 font-bold text-4xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">Background articles</div>
								<ul className="space-y-10 text-center mt-10 xl:mt-20 uppercase text-xl md:text-2xl 6xl:text-4xl">
									<li><a className="underline" href="https://www.ft.com/content/8486c243-cbd9-4445-8659-fcf4f6e40763">Financial Times: Why vintage band T-shirts are still a hit</a></li>
									<li><a className="underline" href="https://rockerteeshirts.com/blogs/rockers-blog/how-band-t-shirts-can-be-important-tools-for-individual-representati">Rocker Tee: HOW BAND T-SHIRTS CAN BE IMPORTANT TOOLS FOR INDIVIDUAL REPRESENTATION</a></li>
									<li><a className="underline" href="https://www.thenationalstudent.com/Opinion/2017-07-28/what_the_band_t_shirt_debate_really_says_about_our_culture.html">The National Student: What the band t-shirt debate really says about our culture</a></li>
									<li><a className="underline" href="https://www.theguardian.com/fashion/2017/jul/26/nirvana-nevermind-fashion-co-opted-band-t-shirt">The Guardian: Not heard Nirvana? Nevermind… How fashion co-opted the band T-shirt</a></li>
									<li><a className="underline" href="https://www.wsj.com/articles/teens-love-rolling-stones-t-shirts-just-dont-ask-them-to-name-a-song-11663165887">WSJ: Teens Love Old Rock Band T-Shirts. Just Don’t Ask Them to Name a Song.</a></li>
									<li><a className="underline" href="https://www.thrillist.com/news/nation/grateful-dead-1967-tshirt-auction-record">Thrillist:Someone Spent a Record $17,640 on a Grateful Dead T-Shirt from 1967</a></li>
								</ul>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 24</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_27">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center leading-none uppercase text-main-100 py-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">Comparable films</div>
								<div className="w-full mx-auto grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-6 gap-10 my-10 3xl:my-20">

									<div className="xl:col-span-1">
										<StaticImage
											src="../assets/bg1.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:col-span-1">
										<StaticImage
											src="../assets/bg2.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:col-span-1">
										<StaticImage
											src="../assets/bg3.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:col-span-1">
										<StaticImage
											src="../assets/bg4.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:col-span-1">
										<StaticImage
											src="../assets/bg5.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:col-span-1">
										<StaticImage
											src="../assets/bg6.png"
											alt="Worn and Faded"
											placeholder="none"
											// layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>

								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 25</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_28">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">Videos</div>
								<BlockVideo />
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 26</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_29">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">Budget</div>
								<div className="w-full mx-auto xl:grid xl:gap-10 3xl:my-20">

									<div className="xl:col-span-1">
										<div className="text-center leading-[1.2] font-bold text-3xl lg:text-4xl 3xl:text-5xl 6xl:text-6xl 11xl:text-7xl my-20">
											$1.90-2.10 Million
										</div>
									</div>

								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 27</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_30">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">Timeline</div>
								<div className="w-full mx-auto my-5 xl:grid xl:gap-10 3xl:my-20">

									<div className="grid lg:grid-cols-2 gap-10">
										{/* <div className="item mb-5">
											<div className="flex flex-row">
												<div className="uppercase text-main-100 leading-none font-bold text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">01</div>
												<div className="block font-a pl-10">
													<h3 className="mt-2 font-bold font-b text-xl sm:text-3xl leading-none">FUNDRAISING</h3>
													<div className="mb-2 date opacity-50">6 Weeks</div>
													<p className="text-xl 6xl:text-2xl">Lining up interviews, locations, travel itineraries and crew</p>
												</div>
											</div>
										</div> */}
										<div className="item mb-5">
											<div className="flex flex-col md:flex-row">
												<div className="uppercase text-main-100 leading-none font-bold text-6xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">01</div>
												<div className="block font-a md:pl-10">
													<h3 className="mt-2 font-bold font-b text-xl sm:text-3xl leading-none">PRE-PRODUCTION</h3>
													<div className="mb-2 date opacity-50">6-8 Weeks</div>
													<p className="text-xl 6xl:text-2xl 9xl:text-3xl">Lining up interviews, locations, travel itineraries and crew.</p>
												</div>
											</div>
										</div>
										<div className="item mb-5">
											<div className="flex flex-col md:flex-row">
												<div className="uppercase text-main-100 leading-none font-bold text-6xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">02</div>
												<div className="block font-a md:pl-10">
													<h3 className="mt-2 font-bold font-b text-xl sm:text-3xl leading-none">PRODUCTION</h3>
													<div className="mb-2 date opacity-50">22-Weeks</div>
													<p className="text-xl 6xl:text-2xl 9xl:text-3xl">Interviewing subjects and starting stock image and video research and licensing.</p>
												</div>
											</div>
										</div>
										<div className="item mb-5">
											<div className="flex flex-col md:flex-row">
												<div className="uppercase text-main-100 leading-none font-bold text-6xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">03</div>
												<div className="block font-a md:pl-10">
													<h3 className="mt-2 font-bold font-b text-xl sm:text-3xl leading-none">POST-PRODUCTION</h3>
													<div className="mb-2 date opacity-50">22-Weeks</div>
													<p className="text-xl 6xl:text-2xl 9xl:text-3xl">Editing, graphics, animation, and sound and music design. Music supervisor begins licensing music.</p>
												</div>
											</div>
										</div>
										<div className="item mb-5">
											<div className="flex flex-col md:flex-row">
												<div className="uppercase text-main-100 leading-none font-bold text-6xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">04</div>
												<div className="block font-a md:pl-10">
													<h3 className="mt-2 font-bold font-b text-xl sm:text-3xl leading-none">SUBMISSION TO FILM FESTIVAL</h3>
													<div className="mb-2 date opacity-50">4-Weeks</div>
													<p className="text-xl 6xl:text-2xl 9xl:text-3xl">We would like we to premier the film at an appropriate film festival such as SXSW.</p>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 28</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_31">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-7 items-center">
								<div className="xl:col-span-3 xl:pr-10 3xl:my-20">
									<div className="leading-[1.2] font-bold text-3xl xl:text-4xl 3xl:text-5xl 6xl:text-6xl 11xl:text-7xl mb-5">
										“My wardrobe of rock and metal tees helped me feel like I was a part of something larger than myself, a tribe.”
									</div>
									<div className="text-[#e6e5d9] p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										- Benjamin Jones, Director
									</div>
								</div>
								<div className="xl:col-span-4 xl:pl-10">

									<div className="bg-main-100 text-[#e6e5d9] p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										I still remember how cool I felt when I slipped my first band tee over my head at age eleven. I wore that “Guns N Roses Was Here” tee until threadbare. I kept it and have collected hundreds more in the years since, captivated not only by the designs but also by their historical and cultural relevance. Having worn, pressed, and sold band tees for nearly thirty years, Tom shares this passion. Unlike the concert poster or hip-hop fashion, the band tee has never been explored on film. Anyone young or old who has ever worn a band tee will identify with the spirit of this film.
									</div>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 29</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_32">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center leading-none uppercase text-main-100 py-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">Creator Bios</div>
								<div className="space-y-10 mt-10 3xl:my-20">
									<div className="item">
										<div className="space-y-10 text-center uppercase text-xl md:text-2xl 6xl:text-4xl">BENJAMIN JONES</div>
										<div className="text-center text-[#e6e5d9] p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
											I still remember how cool I felt when I slipped my first band tee over my head at age eleven. I wore that “Guns N Roses Was Here” tee until threadbare. I kept it and have collected hundreds more in the years since, captivated not only by the designs but also by their historical and cultural relevance. Having worn, pressed, and sold band tees for nearly thirty years, Tom shares this passion. Unlike the concert poster or hip-hop fashion, the band tee has never been explored on film. Anyone young or old who has ever worn a band tee will identify with the spirit of this film.
										</div>
									</div>
									<div className="item">
										<div className="space-y-10 text-center uppercase text-xl md:text-2xl 6xl:text-4xl">TOM DAVENPORT </div>
										<div className="text-center text-[#e6e5d9] p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
											Co-Producer Tom Davenport is an entrepreneur in the branded apparel space. Starting in his garage over twenty years ago with the bootlegging of garage, glam, and punk band tees, he eventually legitimized his California-based operation to produce millions of units annually for bands and brands alike.
										</div>
									</div>
									<div className="item">
										<div className="space-y-10 text-center uppercase text-xl md:text-2xl 6xl:text-4xl">team 713 entertainment</div>
										<div className="text-center text-[#e6e5d9] p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
											In 2019, producers Tani Cohen and Bobby Rock partnered to form team 713 Entertainment, a management and production company.  They produced client Isabel Sandoval’s Shangri-la under the Miu Miu Women’s Tale series. Currently, they are in production on Waterkeeper, an environmental documentary profiling activist Diane Wilson.  As Executive Producers, they are in pre-production on Matt Fantaci’s screenplay, Scandalous! Band’s documentary history includes Hearts of Darkness and A Brief History of Time.  Cohen produced the Emmy-nominated HBO documentary Mr. Conservative: Goldwater on Goldwater.
										</div>
									</div>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 30</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_33">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">Contact</div>
								<ul className="space-y-10 text-center text-xl md:text-4xl 6xl:text-6xl 3xl:my-20">
									<li><a className="underline font-a" href="mailto:info@wornandfaded.com">info@wornandfaded.com</a></li>
									<li><a className="underline font-a" href="https://wornandfaded.com/">https://wornandfaded.com</a></li>
									<li><a className="underline font-a" href="https://www.instagram.com/wornandfadeddoc/">#wornandfadeddoc</a></li>
								</ul>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Rock Tee • 31</div>
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
