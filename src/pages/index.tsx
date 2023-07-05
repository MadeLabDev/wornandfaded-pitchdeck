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

			<Swiper
				modules={[Parallax, Keyboard, Navigation]}
				loop={true}
				navigation={true}
				keyboard={{
					enabled: true,
				}}
				mousewheel={true}
				speed={600}
				parallax={true}
				className="mySwiper">
				<SwiperSlide className="slider slider_1">
					<div className="my-auto px-10 py-20 w-full mx-auto">
						<StaticImage
							src="../assets/logo.png"
							alt="Worn and Faded"
							placeholder="none"
							layout="fullWidth"
							className="max-w-xs w-full md:max-w-md 3xl:max-w-xl 10xl:max-w-2xl 13xl:max-w-4xl mx-auto"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_2">
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
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 1</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_3">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<StaticImage
									src="../assets/tshirt.png"
									alt="Worn and Faded"
									placeholder="none"
									layout="fullWidth"
									className="w-full mx-auto"
								/>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 2</div>
							</div>
						</div>
					</div>
				</SwiperSlide>


				<SwiperSlide className="slider slider_29">
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
										layout="fullWidth"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 3</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_30">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3 items-center">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										When we put on a band shirt, we want to represent the artists, the music, and the movements that have had a profound impact on our lives.									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/tshirt8.png"
										alt="Worn and Faded"
										placeholder="none"
										layout="fullWidth"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 4</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_31">
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
										layout="fullWidth"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 5</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_32">
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
										layout="fullWidth"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 6</div>
							</div>
						</div>
					</div>
				</SwiperSlide>


				<SwiperSlide className="slider slider_4">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										What is the meaning of your average teenager proudly wearing a replica of a t-shirt for a concert twenty-five years before their birth?
									</div>
									<div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										For nearly 60 years, the band tee has been an essential form of self-expression for young people. This film will track not only the birth and evolution of the band tee and how it became a ubiquitous part of fashion but how and why it became the ultimate symbol of nonconformity.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/teen.png"
										alt="Worn and Faded"
										placeholder="none"
										layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 7</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_5">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										Initially, the band tee faced an uphill battle to gain acceptance as many bands felt that selling them was proof that they had “sold out.”
									</div>
									<div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Bill Graham was a legendary concert promoter and manager in the Bay Area who worked with bands such as the Grateful Dead, Santana, and Jefferson Airplane.  He changed their perceptions about the band tee and convinced them that they were an essential tool for promotion and income. He founded the first music merchandising company Winterland Productions, in 1973.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/guy.png"
										alt="Worn and Faded"
										placeholder="none"
										layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 8</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_6">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										By the mid 1970s, the band shirt had become a fashion icon worn by the likes of David Bowie, Iggy Pop, and John Lennon.
									</div>
									<div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Fans began using the tee as a tool of self-expression as timeless designs by the likes of the Ramones, Motorhead, the Rolling Stones, and Joy Division were created. At the end of the decade, the sight of a mech table at a concert was not uncommon.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/art.png"
										alt="Worn and Faded"
										placeholder="none"
										layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 9</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_7">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										In the 1980s, the band tee had become an essential tool of identity and rebellion for young people in their quest to individuate themselves.
									</div>
									<div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										The golden age of the band tee was ushered in with over-the-top Heavy Metal and Punk tees taking center stage in high school hallways and shopping malls everywhere.  Iconic designs by Metallica, Run DMC, Black Flag, and Iron Maiden became like uniforms to many young people.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/sport.png"
										alt="Worn and Faded"
										placeholder="none"
										layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 10</div>
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
										As the new century dawned, vintage band shirts became some of the most desirable and collectible items in fashion.
									</div>
									<div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Celebrities such as the Kardashians, Justin Bieber, and Miley Cyrus sported tees from heavy metal bands they likely had never listened to and sent prices soaring. This inspired metal-inspired designs by the likes of Chanel and Balenciaga and even appeared on catwalks in Paris and London.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/young.png"
										alt="Worn and Faded"
										placeholder="none"
										layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 11</div>
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
										The “faux vintage” band tee is a common sight at H&M, Target, and other retailers nowadays.
									</div>
									<div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Not everyone can afford to shell out hundreds or thousands of dollars for an authentic vintage band tee. To satiate the public’s demand for these tees, which has never been higher, bands and retailers made their own vintage-style tees.
									</div>
								</div>
								<div className="xl:col-span-2 my-10 xl:pl-10">
									<StaticImage
										src="../assets/tshirt2.png"
										alt="Worn and Faded"
										placeholder="none"
										layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 12</div>
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
										In 2021, this Grateful Dead tee from 1967 sold for over $17K at a Sotheby’s auction, making it the most expensive tee ever sold.
									</div>
									<div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Passionate collectors still hunt for rare originals at flea markets, garage sales, and thrift stores across the globe. With music sales revenue decreasing over the last decade, sales of tees have become economically essential to both independent and mainstream artists.
									</div>
								</div>
								<div className="xl:col-span-2 my-10 xl:pl-10">
									<StaticImage
										src="../assets/tshirt3.png"
										alt="Worn and Faded"
										placeholder="none"
										layout="fullWidth"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 13</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_11">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">Interview</div>
								<div className="my-auto w-full mx-auto mt-10 xl:mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-3xl">Mick Jagger</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">The Rolling Stones</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Chuck D</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Founder of Public Enemy, author and activist</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Jack White</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Guitarist, The White Stripes, Solo Artist</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-3xl">Derek Riggs</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Artist and creator of the most famous band mascot Iron Maiden’s ‘Eddie’</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Brian “Pushead” Schroader</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Artist and creator of hundred of Metallica and Misfits tees</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Raymond Pettibon</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Artist and creator of the Black Flag logo</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Penelope Spheeris</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Film director, producer, and screenwriter</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Malcom Gladwell</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Journalist, author, podcaster, public speaker </p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-3xl">QuestLove</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Musician, record producer, DJ, filmmaker</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Taylor Swift</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Singer & Songwriter, Fashion Icon</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Tom Morello</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Guitarist, Rage Against the Machine</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Joan Jett</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Singer, guitarist, record producer and actress</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Henry Rollins</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Singer, Black Flag/Rollins Band</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Alex & David Graham</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Sons of Promoter Bill Graham</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Frank Vacanti</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Production Manager for Winterland Productions</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Peter Patagno</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Graphic Designer for world renowned Hipgnosis Designs</p>
									</div>
									<div className="col-span-1">
										<h2 className="uppercase 6xl:text-3xl">Dave Grohl</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Foo Fighters/Nirvana</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Billie Eilish</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Singer & Songwriter, Fashion Icon</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Nicky Panicci</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Vintage tee collector and historian</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Slash</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Musician and guitarist, Guns N' Roses</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Avigail Collins</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Stylist to celebs  including Kim  Kardashian</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Patrick Klima</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Owner of Wyco Vintage, a Kansas City store featuring the world’s largest collections of vintage band shirts</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Dean Delray</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Comedian, podcaster and vintage tee enthusiast</p>
									</div>
									<div className="col-span-1">

										<h2 className="uppercase 6xl:text-3xl">Chuck Klosterman</h2>
										<p className="font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">Author and Social Commentator</p>
									</div>

								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 14</div>
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
										Visual Style
									</div>
									<div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										Like the tees themselves, Worn & Faded brings a clean yet abraded aesthetic to the film that will keep viewers engaged throughout. The interviews have a unified visual style, using similar lighting techniques and thoughtful background imagery. Animation sequences will be created by Alchemy Studio known for their cutting edge work.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/team.png"
										alt="Worn and Faded"
										placeholder="none"
										layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 15</div>
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
										Archival Material
									</div>
									<div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										A large part of the film incorporates archival b-roll and stills from the past to tell the story. Whether it be fans at concerts, vintage adverts, or the pressing of tees, there is a wealth of material to draw upon.
									</div>
								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<StaticImage
										src="../assets/beer.png"
										alt="Worn and Faded"
										placeholder="none"
										layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 16</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_14">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">
									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5 2xl:mb-12">
										Soundtrack
									</div>
									<div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										The film is propelled by a fast-paced energetic soundtrack featuring rock, metal, punk, and hip-hop classics, spanning the past sixty years.
									</div>
								</div>
								<div className="xl:col-span-2 my-10 xl:pl-10">
									<StaticImage
										src="../assets/tshirt4.png"
										alt="Worn and Faded"
										placeholder="none"
										layout="fullWidth"
										className="w-full mx-auto"
									/>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 17</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_15">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-7xl lg:text-9xl xl:text-11xl 3xl:text-13xl 6xl:text-15xl 9xl:text-18xl 12xl:text-20xl text-stroke-main-2 font-b">ACT I</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 18</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_16">
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
											layout="fullWidth"
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
											layout="fullWidth"
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
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 19</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_17">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-7xl lg:text-9xl xl:text-11xl 3xl:text-13xl 6xl:text-15xl 9xl:text-18xl 12xl:text-20xl text-stroke-main-2 font-b">ACT II</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 20</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_18">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="my-auto w-full mx-auto xl:flex xl:flex-row xl:gap-10">
									<div className="xl:w-[30%]">
										<StaticImage
											src="../assets/007.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
											className="w-full mx-auto"
										/>

									</div>
									<div className="xl:w-[40%]">
										<StaticImage
											src="../assets/008.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:w-[30%]">
										<StaticImage
											src="../assets/009.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
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
											layout="fullWidth"
											className="w-full mx-auto"
										/>

									</div>
									<div className="xl:w-[25%]">
										<StaticImage
											src="../assets/011.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:w-[25%]">
										<StaticImage
											src="../assets/012.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:w-[25%]">
										<StaticImage
											src="../assets/013.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
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
											layout="fullWidth"
											className="w-full mx-auto"
										/>

									</div>
									<div className="xl:w-1/3">
										<StaticImage
											src="../assets/015.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:w-1/3">
										<StaticImage
											src="../assets/016.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 21</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_19">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-7xl lg:text-9xl xl:text-11xl 3xl:text-13xl 6xl:text-15xl 9xl:text-18xl 12xl:text-20xl text-stroke-main-2 font-b">ACT III</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 22</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_20">
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
											layout="fullWidth"
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
											layout="fullWidth"
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
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 23</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_21">
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
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 24</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_22">
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
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:col-span-1">
										<StaticImage
											src="../assets/bg2.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:col-span-1">
										<StaticImage
											src="../assets/bg3.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:col-span-1">
										<StaticImage
											src="../assets/bg4.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:col-span-1">
										<StaticImage
											src="../assets/bg5.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>
									<div className="xl:col-span-1">
										<StaticImage
											src="../assets/bg6.png"
											alt="Worn and Faded"
											placeholder="none"
											layout="fullWidth"
											className="w-full mx-auto"
										/>
									</div>

								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 25</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_23">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center uppercase text-main-100 py-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">Videos</div>
								<BlockVideo />
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 26</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_24">
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
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 27</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_25">
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
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 28</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_26">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-7 items-center">
								<div className="xl:col-span-3 xl:pr-10 3xl:my-20">
									<div className="leading-[1.2] font-bold text-3xl xl:text-4xl 3xl:text-5xl 6xl:text-6xl 11xl:text-7xl mb-5">
										“My wardrobe of rock and metal tees helped me feel like I was a part of something larger than myself, a tribe.”
									</div>
									<div className="text-white p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										- Benjamin Jones, Director
									</div>
								</div>
								<div className="xl:col-span-4 xl:pl-10">

									<div className="bg-main-100 text-white p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										I still remember how cool I felt when I slipped my first band tee over my head at age eleven. I wore that “Guns N Roses Was Here” tee until threadbare. I kept it and have collected hundreds more in the years since, captivated not only by the designs but also by their historical and cultural relevance. Having worn, pressed, and sold band tees for nearly thirty years, Tom shares this passion. Unlike the concert poster or hip-hop fashion, the band tee has never been explored on film. Anyone young or old who has ever worn a band tee will identify with the spirit of this film.
									</div>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 29</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_27">
					<div className="overflow-scroll max-h-screen my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="text-center leading-none uppercase text-main-100 py-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">Creator Bios</div>
								<div className="space-y-10 mt-10 3xl:my-20">
									<div className="item">
										<div className="space-y-10 text-center uppercase text-xl md:text-2xl 6xl:text-4xl">BENJAMIN JONES</div>
										<div className="text-center text-white p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
											I still remember how cool I felt when I slipped my first band tee over my head at age eleven. I wore that “Guns N Roses Was Here” tee until threadbare. I kept it and have collected hundreds more in the years since, captivated not only by the designs but also by their historical and cultural relevance. Having worn, pressed, and sold band tees for nearly thirty years, Tom shares this passion. Unlike the concert poster or hip-hop fashion, the band tee has never been explored on film. Anyone young or old who has ever worn a band tee will identify with the spirit of this film.
										</div>
									</div>
									<div className="item">
										<div className="space-y-10 text-center uppercase text-xl md:text-2xl 6xl:text-4xl">TOM DAVENPORT </div>
										<div className="text-center text-white p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
											Co-Producer Tom Davenport is an entrepreneur in the branded apparel space. Starting in his garage over twenty years ago with the bootlegging of garage, glam, and punk band tees, he eventually legitimized his California-based operation to produce millions of units annually for bands and brands alike.
										</div>
									</div>
									<div className="item">
										<div className="space-y-10 text-center uppercase text-xl md:text-2xl 6xl:text-4xl">team 713 entertainment</div>
										<div className="text-center text-white p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
											In 2019, producers Tani Cohen and Bobby Rock partnered to form team 713 Entertainment, a management and production company.  They produced client Isabel Sandoval’s Shangri-la under the Miu Miu Women’s Tale series. Currently, they are in production on Waterkeeper, an environmental documentary profiling activist Diane Wilson.  As Executive Producers, they are in pre-production on Matt Fantaci’s screenplay, Scandalous! Band’s documentary history includes Hearts of Darkness and A Brief History of Time.  Cohen produced the Emmy-nominated HBO documentary Mr. Conservative: Goldwater on Goldwater.
										</div>
									</div>
								</div>
							</div>
							<div className="liner mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 30</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider slider_28">
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
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 31</div>
							</div>
						</div>
					</div>
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
