import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faBars, faTimes, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

// import { Fade } from "react-awesome-reveal";

import Slider from "react-slick";

import Layout from "../components/layout"
import Seo from "../components/seo"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlockVideo from "../components/block-videos";
import tshirt1 from "../assets/hinh1.png";
import young from "../assets/hinh3.png";
import art from "../assets/art.png";
import lady from "../assets/hinh4.png";
import teen from "../assets/hinh2.png";
import guy from "../assets/guy.png";
import sport from "../assets/dmc.jpg";
import tshirt2 from "../assets/child.png";
import tshirt3 from "../assets/hinh6.png";
import DogVideo from "../assets/vm.mp4"
import HomeVideo from "../assets/vodeobgo.mp4"
import cap from "../assets/cap.png"

const IndexPage = () => {

	function NextArrow(props: any) {
		const { className, onClick } = props;
		return (
			<>
				<div
					className={className}
					onClick={onClick}
				>
					<FontAwesomeIcon icon={faChevronRight} />
				</div>
			</>
		);
	}

	function PrevArrow(props: any) {
		const { className, onClick } = props;
		return (
			<>
				<div className="toggleDot" onClick={() => {
					if (props.currentSlide === 1) {
						const video = document.getElementById('myVideo') as HTMLVideoElement;
						if (video) {
							video.play();
						}
					}
					if (props.currentSlide === 0) {
						document.querySelector('footer')?.classList.toggle('active');
						document.querySelector('header')?.classList.remove('active');
						document.querySelector('.slick-dots')?.classList.toggle('active');
						document.querySelector('.toggleDot')?.classList.toggle('active');
					} else if (props.currentSlide === 1) {
						document.querySelector('footer')?.classList.add('active');
						document.querySelector('header')?.classList.add('active');
						document.querySelector('.slick-dots')?.classList.toggle('active');
						document.querySelector('.toggleDot')?.classList.toggle('active');
					} else {
						document.querySelector('header')?.classList.remove('active');
						document.querySelector('.slick-dots')?.classList.toggle('active');
						document.querySelector('.toggleDot')?.classList.toggle('active');
					}
				}}>
					<FontAwesomeIcon icon={faBars} className="popen" />
					<FontAwesomeIcon icon={faTimes} className="pclose" />
				</div>
				<div
					className={className}
					onClick={onClick}
				>
					<FontAwesomeIcon icon={faChevronLeft} />
				</div>
			</>
		);
	}

	function playVideo() {
		const video = document.getElementById('myVideo') as HTMLVideoElement;
		if (video) {
			video.play();
			document.getElementById('play-button')?.classList.add('hidden');
			document.getElementById('myVideoIMG')?.setAttribute('style', 'display:none!important');
		}
	}

	function toggleVideo() {
		const video = document.getElementById('myVideo') as HTMLVideoElement;
		if (video) {
			if (video.paused) {
				video.play();
				document.getElementById('play-button')?.classList.add('hidden');
			} else {
				video.pause();
				document.getElementById('play-button')?.classList.remove('hidden');
			}
		}
	}

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		swipeToSlide: true,
		lazyLoad: 'ondemand',
		speed: 1,
		// autoplaySpeed: 5000,
		// autoplay: true, 
		// pauseOnHover: true,
		fade: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		afterChange: function (index: any) {
			const setNumberElement = document.getElementById('setnumber');
			if (setNumberElement) {
				setNumberElement.innerHTML = `${index}`;
			}
			if (index !== 0 && index !== 1) {
				document.querySelector('.linerhome')?.classList.add('active');
				document.querySelector('footer')?.classList.add('active');
			} else {
				document.querySelector('.linerhome')?.classList.remove('active');
				document.querySelector('footer')?.classList.remove('active');
			}
			if (index === 1 && index !== 0) {
				document.querySelector('header')?.classList.add('active');
				document.querySelector('footer')?.classList.add('active');
			} else {
				document.querySelector('header')?.classList.remove('active');
			}
			if (index === 1) {
				// #myVideo pause video 
				const video = document.getElementById('myVideo') as HTMLVideoElement;
				if (video) {
					video.pause();
					document.getElementById('play-button')?.classList.remove('hidden');
				}
			}
			if (index !== 1) {
				// #myVideo pause video 
				const video = document.getElementById('myVideo') as HTMLVideoElement;
				if (video) {
					video.pause();
					document.getElementById('play-button')?.classList.remove('hidden');
				}
			}
		},

		beforeChange: function (index: any) {
			if (index === 32 || index === 1 || index === 2) {
				document.querySelector('.linerhome')?.classList.remove('active');
				// document.querySelector('footer')?.classList.remove('active');
			}
			if (index === 2 && index !== 1) {
				document.querySelector('header')?.classList.add('active');
				document.querySelector('footer')?.classList.add('active');
			} else {
				document.querySelector('header')?.classList.remove('active');
				document.querySelector('footer')?.classList.remove('active');
			}
			if (index === 2) {
				// #myVideo pause video 
				const video = document.getElementById('myVideo') as HTMLVideoElement;
				if (video) {
					video.pause();
					document.getElementById('play-button')?.classList.remove('hidden');
				}
			}
			if (index === 0) {
				// #myVideo pause video 
				const video = document.getElementById('myVideo') as HTMLVideoElement;
				if (video) {
					video.pause();
					document.getElementById('play-button')?.classList.remove('hidden');
				}
			}
		},
		onInit: function (index: any) {
			if (index === 0) {
				document.querySelector('.linerhome')?.classList.remove('active');
				document.querySelector('footer')?.classList.remove('active');
			}
		},
		customPaging: function (i: any) {
			return (
				<a>
					<>
						{(i < 1) && (
							<>
								{`Home`}
							</>
						)}
						{(i >= 1) && (
							<>
								{`${i}`}
							</>
						)}
					</>
				</a>
			);
		},
	};

	React.useEffect(() => {
		setTimeout(() => {
			document.getElementById('loadingpage')?.classList.add('done');
			window.addEventListener("focus", function () {
				document.getElementById('loadingpage')?.click();
			}, false);
		}, 1500);
	}, []);

	return (

		<Layout>

			<div id="loadingpage" dangerouslySetInnerHTML={{
				__html: `<svg class="icon logoanimation" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 784.19 497.39" style="enable-background:new 0 0 784.19 497.39;" xml:space="preserve"><path d="M100.79,201.17l22.78-73.34l22.78,73.34h54.88l19.9-88.97c4.05,53.78,47.73,94.94,103.17,94.94 c47.33,0,85.45-29.79,98.58-71.11v65.13h57.39v-72.72l33.99,72.72H630.8v-95.76l70.71,95.76h44.83V6.89h-57.11v87.66L628.02,6.89 h-54.33v180.69l-37.15-65.51c10.76-4.99,19.12-12.16,25.06-21.51c5.94-9.34,8.91-20.03,8.91-32.06c0-11.84-2.84-22.44-8.49-31.78 c-5.68-9.34-14.07-16.65-25.22-21.92s-24.61-7.91-40.39-7.91h-94.36l20.81,25.58V72c-13.15-41.37-51.3-71.09-98.58-71.09 c-39.31,0-72.09,20.49-89.67,50.92l10.04-44.95h-59.89l-19.16,95.51L123.56,3.56L81.51,102.4L62.33,6.89H2.44l43.45,194.28 C45.89,201.17,100.79,201.17,100.79,201.17z M480.26,52.41h6.7c8.17,0,14.49,1.89,18.94,5.69c4.46,3.8,6.68,8.93,6.68,15.4 c0,6.49-2.23,11.61-6.68,15.4c-4.46,3.8-10.76,5.69-18.94,5.69h-6.7V52.41z M324.31,59.56c24.78,0,44.64,18.61,44.64,44.47 c0,25.78-19.79,44.47-44.64,44.47c-24.89,0-44.64-18.73-44.64-44.47C279.67,78.19,299.49,59.56,324.31,59.56z M745.8,274.03 l33.77-36.43H674.73l11.26-12.14H538.17l-33.77,36.43h104.84l-11.26,12.14H745.8z M183.63,274.03l-11.26-12.14h104.84 l-33.77-36.43H95.62l11.26,12.14H2.04l33.77,36.43H183.63z M527.95,419.6h54.59v-50.22h-54.59v-20.81h67.97l-6.96-50.22H470.84 v61.39c-14.19-36.87-50.26-61.39-94.6-61.39h-68.8v146.11L258.2,298.34h-68.8l-65.47,194.28h54.12l69.71-51.7l14.06,51.7h114.43 c44.42,0,80.42-24.57,94.6-61.4v61.4h120.63l6.96-50.22h-70.48L527.95,419.6L527.95,419.6z M202.05,433.11l21.87-79.85 l21.72,79.85H202.05z M373.72,438.74h-8.36v-86.6h8.36c28.51,0,44.57,17.84,44.57,43.3C418.29,421.36,401.79,438.74,373.72,438.74 z M671.68,298.31h-68.8v194.28h68.8c57.6,0,101.13-41.31,101.13-97.14C772.81,339.22,728.87,298.31,671.68,298.31z M672.66,438.74 h-8.36v-86.6h8.36c28.17,0,44.57,17.5,44.57,43.3C717.23,420.91,701.17,438.74,672.66,438.74z M144.37,372.97H92.56v-22.76h66 l17.48-51.91H6.55l28.07,34.5v159.77h57.94v-67.72h35.11L144.37,372.97z M404.16,243.43l-16.82-17.9h-16.84v48.5h19.77v-17.82 l16.78,17.82h16.68v-48.5h-19.6v17.9H404.16z M462.29,225.53h-25.61v48.5h25.61c13.96,0,24.84-10.12,24.84-24.25 C487.11,235.92,476.52,225.53,462.29,225.53z M461.06,256.06h-4.96V243.5h4.96c4.01,0,6.36,2.53,6.36,6.28 C467.42,253.51,465.09,256.06,461.06,256.06z M315.78,274.03l20.17-11.69l4.71,11.69h21.64l-24.74-48.43l0.04-0.08h-16.97 l0.04,0.08l-24.74,48.43H315.78z M329.1,245.32l5.28,13.09h-10.4L329.1,245.32z"></path></svg>`
			}} />
			<Slider id="slkslider" className="swiper" {...settings}>
				<div className="min-h-screen slider slider_1">
					<div className="item my-auto px-10 py-20 w-full mx-auto justify-center flex">

						<StaticImage
							src="../assets/logo.png"
							alt="Worn and Faded"
							placeholder="none"
							className="max-w-xs w-full md:max-w-md 3xl:max-w-xl 10xl:max-w-2xl 13xl:max-w-7xl mx-auto"
						/>

					</div>
				</div>
				<div className="min-h-screen slider slider_video">

					<video id="myVideo" loop playsInline className="w-full h-full absolute top-0 left-0 z-2" onClick={toggleVideo}>
						<source src={HomeVideo} type="video/mp4" />
					</video>
					<img src={cap} alt="" id="myVideoIMG" className="w-[100%] my-auto mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"
					/>
					{/* Play Button */}
					<div id="play-button" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer" onClick={playVideo}>
						<FontAwesomeIcon icon={faPlay} className="text-white text-8xl" />
					</div>



				</div>
				<div className="min-h-screen slider slider_2">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-20">
							<div className="3xl:my-20">

								<div className="text-center leading-[1.2] font-bold text-3xl lg:text-4xl 3xl:text-5xl 6xl:text-6xl 13xl:text-7xl mt-20 mb-4">
									This is the story of how a throw-away promotional item became an indispensable form of exposure for rock and a tool of self-expression and rebellion for generations of youth.
									The rock tee remains economically and culturally relevant, holding a special place in people’s hearts and wardrobes. We aim to explore and discover why.
								</div>

							</div>

							<div className="liner liner-inline mt-[15vh] 3xl:mt-[15vh] 5xl:mt-[20vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 1</div>
							</div>

						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_3">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<img src={tshirt1} alt="" className="xl:min-h-[60vh]" />
							</div>

							<div className="liner liner-inline 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 2</div>
							</div>

						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_4">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										Wearing a shirt from a favorite artist can bring back memories of concerts attended, songs that resonated with us during certain times, and the emotions tied to those shared experiences.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">

									<StaticImage
										src="../assets/tshirt5.png"
										alt="Worn and Faded"
										placeholder="none"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>

								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 3</div>

							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_5">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										When we put on a rock tee, we want to represent the artists, the music, and the movements that have had a profound impact on our lives.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">

									<StaticImage
										src="../assets/tshirt8.png"
										alt="Worn and Faded"
										placeholder="none"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>

								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 4</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_6">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										In a world where mass production and fast fashion dominate, wearing a rock tee can be seen as a statement of individuality and non-conformity for many people.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">

									<StaticImage
										src="../assets/tshirt6.png"
										alt="Worn and Faded"
										placeholder="none"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>

								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 5</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_7">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										The cultural relevance of the rock tee lies in its ability to capture the essence of music, evoke nostalgia, and serve as a testament to the power of music in shaping our identities.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">

									<StaticImage
										src="../assets/tshirt7.png"
										alt="Worn and Faded"
										placeholder="none"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>

								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 6</div>
							</div>


						</div>
					</div>
				</div>

				<div className="min-h-screen slider slider_8">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										What is the meaning of your average teenager proudly wearing a replica of a t-shirt for a concert twenty-five years before their birth?
									</div>


									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 13xl:text-3xl">
										For nearly 60 years, the rock tee has been an essential form of self-expression for young people. This film will track not only the birth and evolution of the rock tee and how it became a ubiquitous part of fashion but how and why it became the ultimate symbol of nonconformity.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<img src={teen} alt="" className="xl:min-h-[60vh]" />
								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 8</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_9">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										Initially, the rock tee faced an uphill battle to gain acceptance as many bands felt that selling them was proof that they had “sold out.”
									</div>


									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 13xl:text-3xl">
										Legendary San Francisco concert promoter Bill Graham worked with bands such as the Grateful Dead, Santana the the Jefferson Airplane. He was pivotal in changing band’s perceptions about the rock tee and convinced them that it was an essential tool for promotion and income. He founded the first music merchandising company Winterland Productions, in 1973.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<img src={guy} alt="" className="xl:min-h-[60vh]" />
								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 9</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_10">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										By the mid 1970s, the rock tee had become a fashion icon worn by the likes of David Bowie, Iggy Pop, and John Lennon.
									</div>


									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 13xl:text-3xl">
										Fans began using the tee as a tool of self-expression as timeless designs by the likes of the Ramones, Motorhead, the Rolling Stones, and Joy Division were created. At the end of the decade, the sight of a merch table at a concert was not uncommon.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<img src={art} alt="" className="xl:min-h-[60vh]" />
								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 10</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_11">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										Shirts went beyond mere merchandise and became statements of rebellion and counter-culture, redefining what rock tees could be
									</div>

									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 13xl:text-3xl">
										In the late 70’s Vivienne Westwood created what would become the punk aesthetic with her partner Malcolm Maclaren in London. She often incorporated subversive imagery and political statements into her designs for punk bands like the Sex Pistols and The Clash” leaving a lasting impact on fashion, music and culture.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<img src={lady} alt="" className="xl:min-h-[60vh]" />
								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 7</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_12">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										In the 1980’s, the rock tee had become an essential tool of identity and community for young people in their quest to individuate themselves.
									</div>


									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 13xl:text-3xl">
										The golden age of the rock tee was ushered in with over-the-top Heavy Metal and Punk tees taking center stage in high school hallways and shopping malls everywhere.  Iconic designs by Metallica, Run DMC, Black Flag, and Iron Maiden became like uniforms to many young people.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<img src={sport} alt="" className="xl:min-h-[60vh]" />
								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 11</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_13">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										As the new century dawned, vintage rock tee became some of the most desirable and collectible items in fashion.
									</div>


									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 13xl:text-3xl">
										Celebrities such as the Kardashians and Justin Bieber wore and co-opted tees by Heavy Metal bands they likely had never listened to and this sent prices soaring.  This also inspired countless high fashion imitations by the likes of Gucci and Chanel and even appeared on catwalks in Paris and London.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<img src={young} alt="" className="xl:min-h-[60vh]" />
								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 12</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_14">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										Due to all time high demand, the “faux vintage” rock tees are now a common sight at H&M, Target, Amazon and other retailers.
									</div>

									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 13xl:text-3xl">
										Not everyone can afford an original vintage rock tee but affordable 'fake' vintage rock tees are now easily available for adults, children and even babies for less than $25.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<img src={tshirt2} alt="" className="" />
								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 13</div>
							</div>

						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_15">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										In 2021, this Grateful Dead tee from 1967 sold for over $17K at a Sotheby’s auction, making it the most expensive tee ever sold.
									</div>


									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 13xl:text-3xl">
										Passionate collectors still hunt for rare originals at flea markets, garage sales, and thrift stores across the globe. With music sales revenue decreasing over the last decade, sales of tees have become economically essential to both independent and mainstream artists.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">

									<StaticImage
										src="../assets/tshirt3.png"
										alt="Worn and Faded"
										placeholder="none"
										// layout="fullWidth"
										className="w-full mx-auto max-h-[calc(60vh)]"
									/>

								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 14</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_16">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 pb-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b leading-[0.9]">Interviews</div>

								<div className="my-auto w-full text-center mx-auto mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-5">

									<div className="grid gap-5">
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Mick Jagger</h2>
											<p className="font-normal font-a xl:text-lg">The Rolling Stones</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Chuck D</h2>
											<p className="font-normal font-a xl:text-lg">Founder of Public Enemy, author and activist</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Jack White</h2>
											<p className="font-normal font-a xl:text-lg">White Stripes and Solo Artist</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Derek Riggs</h2>
											<p className="font-normal font-a xl:text-lg">Artist and creator of the most famous band mascot Iron Maiden’s ‘Eddie’</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">BRIAN “PUSHEAD” SCHROADER</h2>
											<p className="font-normal font-a xl:text-lg">Artist and creator of hundred of Metallica and Misfits shirts</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">PERRY SHALL</h2>
											<p className="font-normal font-a xl:text-lg">Graphic Designer and Collector</p>
										</div>
									</div>

									<div className="grid gap-5">
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Penelope Spheeris</h2>
											<p className="font-normal font-a xl:text-lg">Film director, producer, and screenwriter</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Malcom Gladwell</h2>
											<p className="font-normal font-a xl:text-lg">Journalist, author, podcaster, public speaker </p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">QuestLove</h2>
											<p className="font-normal font-a xl:text-lg">Musician, record producer, DJ, filmmaker</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Taylor Swift</h2>
											<p className="font-normal font-a xl:text-lg">Singer & Songwriter, Fashion Icon</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Tom Morello</h2>
											<p className="font-normal font-a xl:text-lg">Guitarist, Rage Against the Machine</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Joan Jett</h2>
											<p className="font-normal font-a xl:text-lg">Singer, guitarist, record producer and actress</p>
										</div>
									</div>

									<div className="grid gap-5">
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Henry Rollins</h2>
											<p className="font-normal font-a xl:text-lg">Singer, Black Flag/Rollins Band</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Alex & David Graham</h2>
											<p className="font-normal font-a xl:text-lg">Sons of Promoter Bill Graham</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Frank Vacanti</h2>
											<p className="font-normal font-a xl:text-lg">Production Manager for Winterland Productions</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Peter Patagno</h2>
											<p className="font-normal font-a xl:text-lg">Graphic Designer for world renowned Hipgnosis Designs</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">DAVE GROHL</h2>
											<p className="font-normal font-a xl:text-lg">Foo Fighters/Nirvana</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Billie Eilish</h2>
											<p className="font-normal font-a xl:text-lg">Singer & Songwriter, Fashion Icon</p>
										</div>
									</div>

									<div className="grid gap-5">
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">BLAINE HALVERSON</h2>
											<p className="font-normal font-a xl:text-lg">Founder of Madeworn and owner of world’s largest vintage rock tee collection</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Slash</h2>
											<p className="font-normal font-a xl:text-lg">Musician and guitarist, Guns N' Roses</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Avigail Collins</h2>
											<p className="font-normal font-a xl:text-lg">Stylist to celebs  including Kim  Kardashian</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Patrick Klima</h2>
											<p className="font-normal font-a xl:text-lg">Owner of Wyco Vintage, a Kansas City store featuring the world’s largest collections of vintage rock tees</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Dean Delray</h2>
											<p className="font-normal font-a xl:text-lg">Comedian, podcaster and vintage tee enthusiast</p>
										</div>
										<div className="col-span-1">
											<h2 className="uppercase 6xl:text-xl">Chuck Klosterman</h2>
											<p className="font-normal font-a xl:text-lg">Author and Social Commentator</p>
										</div>
									</div>

								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 15</div>
							</div>

						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_17">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										Visual Style
									</div>


									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 13xl:text-3xl">
										Like the tees themselves, Worn & Faded brings a clean yet abraded aesthetic to the film that will keep viewers engaged throughout. The interviews have a unified visual style, using similar lighting techniques and thoughtful background imagery. Animation sequences will be created by Alchemy Studio known for their cutting edge work.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">

									<StaticImage
										src="../assets/team.png"
										alt="Worn and Faded"
										placeholder="none"
										className="w-full mx-auto"
									/>

								</div>
							</div>

							<div className="liner liner-inline mt-[12vh] 3xl:mt-[13vh] 5xl:mt-[15vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 16</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_18">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										Archival Material
									</div>


									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 13xl:text-3xl">
										A large part of the film incorporates archival b-roll and stills from the past to tell the story. Whether it be fans at concerts, vintage adverts, or the pressing of tees, there is a wealth of material to draw upon.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">

									{/* <StaticImage
										src="../assets/beer.png"
										alt="Worn and Faded"
										placeholder="none"
										className="w-full mx-auto"
									/> */}
									<video autoPlay muted loop playsInline className="w-full mx-auto">
										<source src={DogVideo} type="video/mp4" />
									</video>

								</div>
							</div>

							<div className="liner liner-inline mt-[12vh] 3xl:mt-[13vh] 5xl:mt-[15vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 17</div>
							</div>

						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_19">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-3">
								<div className="xl:col-span-1 xl:pr-10">

									<div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
										Soundtrack
									</div>


									<div className="bg-main-100 text-[#e6e5d9] p-3 text-center font-normal font-a xl:text-lg 6xl:text-2xl 13xl:text-3xl">
										The film is propelled by a fast-paced energetic soundtrack featuring rock, metal, punk, and hip-hop classics, spanning the past sixty years.
									</div>

								</div>
								<div className="xl:col-span-2 xl:pl-10">
									<img src={tshirt3} alt="" className="" />
								</div>
							</div>

							<div className="liner liner-inline mt-[12vh] 3xl:mt-[13vh] 5xl:mt-[15vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 18</div>
							</div>


						</div>
					</div>
				</div>
				{/* <div className="min-h-screen slider slider_20">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 py-5 font-bold text-7xl lg:text-9xl xl:text-11xl 3xl:text-13xl 6xl:text-15xl 9xl:text-18xl 12xl:text-20xl text-stroke-main-2 font-b">ACT I</div>

							</div>

							<div className="liner liner-inline mt-[15vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 19</div>
							</div>


						</div>
					</div>
				</div> */}
				{/* <div className="min-h-screen slider slider_20">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="flex items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="my-auto w-auto mx-auto xl:flex xl:gap-20">

									<div className="mb-20 xl:mb-0 xl:w-none">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
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
									<div className="mb-20 xl:mb-0 xl:w-none">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
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
									<div className="mb-20 xl:mb-0 xl:w-none">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
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

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 20</div>
							</div>


						</div>
					</div>
				</div> */}
				{/* <div className="min-h-screen slider slider_22">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 py-5 font-bold text-7xl lg:text-9xl xl:text-11xl 3xl:text-13xl 6xl:text-15xl 9xl:text-18xl 12xl:text-20xl text-stroke-main-2 font-b">ACT II</div>

							</div>

							<div className="liner liner-inline mt-[15vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 21</div>
							</div>


						</div>
					</div>
				</div> */}
				{/* <div className="min-h-screen slider slider_21">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
									Midpoint
								</div>

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

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 22</div>
							</div>

						</div>
					</div>
				</div> */}
				{/* <div className="min-h-screen slider slider_24">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 py-5 font-bold text-7xl lg:text-9xl xl:text-11xl 3xl:text-13xl 6xl:text-15xl 9xl:text-18xl 12xl:text-20xl text-stroke-main-2 font-b">ACT III</div>

							</div>

							<div className="liner liner-inline mt-[15vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 23</div>
							</div>


						</div>
					</div>
				</div> */}
				{/* <div className="min-h-screen slider slider_22">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="flex items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">
								<div className="my-auto w-auto mx-auto xl:flex xl:gap-20">

									<div className="mb-20 xl:mb-0 xl:w-none">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
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
									<div className="mb-20 xl:mb-0 xl:w-none">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
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
									<div className="mb-20 xl:mb-0 xl:w-none">
										<div className="text-center leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 13xl:text-6xl mb-5 2xl:mb-12">
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

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 24</div>
							</div>


						</div>
					</div>
				</div> */}
				<div className="min-h-screen slider slider_20">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 pb-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b leading-[0.9]">Background articles</div>

								<ul className="space-y-10 text-center mt-10 xl:mt-20 uppercase text-xl md:text-2xl 9xl:text-3xl 13xl:text-4xl">
									<li><a className="underline" href="https://www.ft.com/content/8486c243-cbd9-4445-8659-fcf4f6e40763">Financial Times: Why vintage band T-shirts are still a hit</a></li>
									<li><a className="underline" href="https://rockerteeshirts.com/blogs/rockers-blog/how-band-t-shirts-can-be-important-tools-for-individual-representati">Rocker Tee: HOW BAND T-SHIRTS CAN BE IMPORTANT TOOLS FOR INDIVIDUAL REPRESENTATION</a></li>
									<li><a className="underline" href="https://www.thenationalstudent.com/Opinion/2017-07-28/what_the_band_t_shirt_debate_really_says_about_our_culture.html">The National Student: What the band t-shirt debate really says about our culture</a></li>
									<li><a className="underline" href="https://www.theguardian.com/fashion/2017/jul/26/nirvana-nevermind-fashion-co-opted-band-t-shirt">The Guardian: Not heard Nirvana? Nevermind… How fashion co-opted the band T-shirt</a></li>
									<li><a className="underline" href="https://www.wsj.com/articles/teens-love-rolling-stones-t-shirts-just-dont-ask-them-to-name-a-song-11663165887">WSJ: Teens Love Old Rock Band T-Shirts. Just Don’t Ask Them to Name a Song.</a></li>
									<li><a className="underline" href="https://www.thrillist.com/news/nation/grateful-dead-1967-tshirt-auction-record">Thrillist: Someone Spent a Record $17,640 on a Grateful Dead T-Shirt from 1967</a></li>

								</ul>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 25</div>
							</div>


						</div>
					</div>
				</div>
				{/* <div className="min-h-screen slider slider_21">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 pb-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b leading-[0.9]">Comparable films</div>

								<div className="w-full mx-auto grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-6 gap-10 my-10 3xl:mt-20 3xl:mb-0">

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

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 26</div>
							</div>


						</div>
					</div>
				</div> */}
				<div className="min-h-screen slider slider_21">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 pb-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b leading-[0.9]">Videos</div>

								<BlockVideo />
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 27</div>
							</div>


						</div>
					</div>
				</div>
				{/* <div className="min-h-screen slider slider_29">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 pb-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b leading-[0.9]">Budget</div>
								<div className="w-full mx-auto xl:grid xl:gap-10 3xl:my-20">

									<div className="xl:col-span-1">
										<div className="text-center leading-[1.2] font-bold text-3xl lg:text-4xl 3xl:text-5xl 6xl:text-6xl 11xl:text-7xl my-20">
											$1.90-2.10 Million
										</div>
									</div>

								</div>

							</div>

							<div className="liner liner-inline mt-[12vh] 3xl:mt-[13vh] 5xl:mt-[15vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 28</div>
							</div>


						</div>
					</div>
				</div> */}
				{/* <div className="min-h-screen slider slider_26">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 pb-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b leading-[0.9]">Timeline</div>

								<div className="w-full mx-auto my-5 xl:grid xl:gap-10 3xl:my-20">

									<div className="grid lg:grid-cols-2 gap-10">

										<div className="itemp mb-5">
											<div className="flex flex-col md:flex-row">
												<div className="uppercase text-main-100 leading-none font-bold text-6xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">01</div>
												<div className="block font-a md:pl-10">
													<h3 className="mt-2 font-bold font-b text-xl sm:text-3xl leading-none">PRE-PRODUCTION</h3>
													<div className="mb-2 date opacity-50">6-8 Weeks</div>
													<p className="text-xl 6xl:text-2xl 9xl:text-3xl">Lining up interviews, locations, travel itineraries and crew.</p>
												</div>
											</div>
										</div>
										<div className="itemp mb-5">
											<div className="flex flex-col md:flex-row">
												<div className="uppercase text-main-100 leading-none font-bold text-6xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">02</div>
												<div className="block font-a md:pl-10">
													<h3 className="mt-2 font-bold font-b text-xl sm:text-3xl leading-none">PRODUCTION</h3>
													<div className="mb-2 date opacity-50">22-Weeks</div>
													<p className="text-xl 6xl:text-2xl 9xl:text-3xl">Interviewing subjects and starting stock image and video research and licensing.</p>
												</div>
											</div>
										</div>
										<div className="itemp mb-5">
											<div className="flex flex-col md:flex-row">
												<div className="uppercase text-main-100 leading-none font-bold text-6xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b">03</div>
												<div className="block font-a md:pl-10">
													<h3 className="mt-2 font-bold font-b text-xl sm:text-3xl leading-none">POST-PRODUCTION</h3>
													<div className="mb-2 date opacity-50">22-Weeks</div>
													<p className="text-xl 6xl:text-2xl 9xl:text-3xl">Editing, graphics, animation, and sound and music design. Music supervisor begins licensing music.</p>
												</div>
											</div>
										</div>
										<div className="itemp mb-5">
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

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 28</div>
							</div>


						</div>
					</div>
				</div> */}
				<div className="min-h-screen slider slider_22">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] xl:grid xl:grid-cols-7">
								<div className="xl:col-span-3 xl:pr-10 3xl:my-20">

									<div className="leading-[1.2] font-bold text-3xl xl:text-4xl 3xl:text-5xl 6xl:text-6xl 13xl:text-7xl mb-5">
										“My wardrobe of rock and metal tees helped me feel like I was a part of something larger than myself, a tribe.”
									</div>
									<div className="text-[#e6e5d9] p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										- Benjamin Jones, Director
									</div>

								</div>
								<div className="xl:col-span-4 xl:pl-10">

									<div className="bg-main-100 text-[#e6e5d9] p-3 font-normal font-a xl:text-lg 6xl:text-2xl 9xl:text-3xl">
										I can still remember how cool I felt as I put on my first rock tee at 11, a Guns N Roses shirt that I wore until it was in tatters.  Since then I’ve amassed a collection of several hundred tees and each one represents a unique moment, concert, memory, or connection in my life which I cherish. I am captivated not only by their designs but their historical and cultural relevance. Having worn, pressed, and sold rock tees for almost 30 years, Tom shares this passion. Unlike the concert poster, or hip hop fashion, the rock tee has never been explored on film.  Anyone young or old who has ever worn a rock tee will identify with the spirit of this film.
									</div>

								</div>
							</div>

							<div className="liner liner-inline mt-[15vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 29</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_23">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 pb-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b leading-[0.9]">Why Now</div>

								<div className="mt-5 grid gap-5">

									<div className="item max-w-[1100px] 3xl:max-w-[1400px] mx-auto">
										<div className="text-center text-[#e6e5d9] p-3 font-normal font-a text-xl xl:text-2xl 3xl:text-3xl 13xl:text-4xl leading-1">
											It is impossible to go out in public these days and not see at least one person young or old wearing a tee of a rock they love. They are ubiquitous and prove that they are relevant now more than ever,  The music merchandise global market has been estimated to be worth close to $4 billion and is growing every year.   Fans cannot get enough of rock tees right now and it was routine this past summer to see fans line up overnight for Taylor Swift “Merch Day”. A special event that happened the day before her concerts where fans could buy exclusive designs.  Videos tagged with “vintage” and “rock tee” have amassed more than 170 million views on TikTok and vintage designs by the likes of Tupac and Nirvana routinely sell for $1,000 on Ebay.  This story is begging to be told.  Pioneers like Dell Furano have  passed away recently and it is important to that these voices do no fade away.
										</div>
									</div>

								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 30</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_24">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 pb-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b leading-[0.9]">Creator Bios</div>

								<div className="mt-5 grid gap-10 lg:grid-cols-2">

									<div className="item">
										<div className="space-y-10 text-center uppercase text-xl md:text-2xl 13xl:text-4xl">BENJAMIN JONES</div>
										<div className="text-center text-[#e6e5d9] p-3 font-normal font-a xl:text-xl 13xl:text-2xl leading-1">
											Director and Editor Benjamin Jones has been creating video content for brands and bands for the past 15 years. This has included music videos, commercials, live concerts, and documentary content for companies such as Warner Bros, Clorox, AT&T, CBS and Universal. He became a passionate collector or rock tees ever since getting his first one at age of 11.
										</div>
									</div>
									<div className="item">
										<div className="space-y-10 text-center uppercase text-xl md:text-2xl 13xl:text-4xl">TOM DAVENPORT </div>
										<div className="text-center text-[#e6e5d9] p-3 font-normal font-a xl:text-xl 13xl:text-2xl leading-1">
											Co-Producer Tom Davenport is an entrepreneur in the branded apparel space. Starting in his garage over twenty years ago with the bootlegging of garage, glam, and punk rock tees, he eventually legitimized his California-based operation to produce millions of units annually for bands and brands alike.
										</div>
									</div>
									<div className="item">
										<div className="space-y-10 text-center uppercase text-xl md:text-2xl 13xl:text-4xl">FALKON </div>
										<div className="text-center text-[#e6e5d9] p-3 font-normal font-a xl:text-xl 13xl:text-2xl leading-1">
											Falkon is a highly focused Creative Hybrid Company, sitting at the intersection of Advertising, Entertainment & specialized in Sports, Culture & Social Impact. We work with some of today’s biggest brands, including Jordan, Nike (Basketball, Football, Sportswear, Running, SNKRS), ESPN, the NBA, Major League Baseball, Sonos and Netflix, to name a few - pioneering the concept of collapsing layers as an Ad Agency x Production Company hybrid. In Entertainment, we are a Development & Production Company with the same laser focus on meaningful storytelling - currently in production on multiple unscripted / scripted series & films. Falkon is repped by CAA.
										</div>
									</div>
									<div className="item">
										<div className="space-y-10 text-center uppercase text-xl md:text-2xl 13xl:text-4xl">team 713 entertainment</div>
										<div className="text-center text-[#e6e5d9] p-3 font-normal font-a xl:text-xl 13xl:text-2xl leading-1">
											In 2019, producers Tani Cohen and Bobby Rock partnered to form team 713 Entertainment, a management and production company.  They produced client Isabel Sandoval’s Shangri-la under the Miu Miu Women’s Tale series. Currently, they are in production on Waterkeeper, an environmental documentary profiling activist Diane Wilson.  As Executive Producers, they are in pre-production on Matt Fantaci’s screenplay, Scandalous! Rock’s documentary history includes Hearts of Darkness and A Brief History of Time.  Cohen produced the Emmy-nominated HBO documentary Mr. Conservative: Goldwater on Goldwater.
										</div>
									</div>

								</div>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 30</div>
							</div>


						</div>
					</div>
				</div>
				<div className="min-h-screen slider slider_33">
					<div className="item my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
						<div className="py-2 xl:mt-10">
							<div className="items-center my-auto w-full mx-auto mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh]">

								<div className="text-center uppercase text-main-100 pb-5 font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main font-b leading-[0.9]">Contact</div>

								<ul className="space-y-10 text-center text-xl md:text-4xl 3xl:my-20">

									<li><a className="underline font-a" href="mailto:info@wornandfaded.com">info@wornandfaded.com</a></li>
									<li><a className="underline font-a" href="https://wornandfaded.com/">https://wornandfaded.com</a></li>
									<li><a className="underline font-a inline-flex flex-row items-center" href="https://www.instagram.com/wornandfadeddoc/">
										<FontAwesomeIcon icon={faInstagram} className="mr-2" /><span>wornandfadeddoc</span></a></li>

								</ul>
							</div>

							<div className="liner liner-inline mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] mb-20 text-center">
								<div className="liner__inner"></div>
								<div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • 31</div>
							</div>


						</div>
					</div>
				</div>
			</Slider>

			<div className="liner linerhome mt-[7vh] 3xl:mt-[10vh] 5xl:mt-[5vh] text-center">
				<div className="liner__inner"></div>
				<div className="uppercase text-main-100 pt-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold Story of the Rock Tee • <span id="setnumber"></span></div>
			</div>

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
