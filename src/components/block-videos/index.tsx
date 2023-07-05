import * as React from "react"
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgRotate from 'lightgallery/plugins/rotate';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-rotate.css';

import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import img_1 from '../../assets/img-05.png';
import img_2 from '../../assets/img-10.jpg';
import img_3 from '../../assets/img-03.jpg';


function BlockVideo() {

	return (

		<section className="relative w-full">

			<div className="my-auto w-full mx-auto xl:grid xl:grid-cols-3 xl:gap-10 3xl:my-20">

				<div className="xl:col-span-1">
					<div className="relative">

						<LightGallery
							speed={500}
							plugins={[lgZoom, lgVideo, lgRotate]}
							download={true}
							mobileSettings={{
								controls: false,
								showCloseIcon: true,
								rotate: false,
							}}
						>
							<a className={`item group relative lazy`}
								data-lg-size="3840-2160"
								data-src={`https://vimeo.com/657660189`}
								data-poster={img_3}
							>
								<StaticImage
									src="../../assets/img-03.jpg"
									alt="Worn and Faded"
									placeholder="blurred"
									layout="fullWidth"
									className="w-full mx-auto border-[10px] border-[#e6e5d9]"
								/>
							</a>
						</LightGallery>


						<a className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000] py-4 px-6 rounded-lg bg-opacity-50" data-lg-size="3840-2160"
							data-src={`https://vimeo.com/657660189`}
							data-poster={img_3}>
							<FontAwesomeIcon icon={faPlay} className="text-5xl" />
						</a>
					</div>
					<div className="mt-5 text-center leading-[1.2] font-bold text-2xl 2xl:text-3xl mb-5">
						TEASER
					</div>
				</div>
				<div className="xl:col-span-1">
					<div className="relative">

						<LightGallery
							speed={500}
							plugins={[lgZoom, lgVideo, lgRotate]}
							download={true}
							mobileSettings={{
								controls: false,
								showCloseIcon: true,
								rotate: false,
							}}
						>
							<a className={`item group relative lazy`}
								data-lg-size="3840-2160"
								data-src={`https://vimeo.com/759639919`}
								data-poster={img_2}
							>
								<StaticImage
									src="../../assets/img-10.jpg"
									alt="Worn and Faded"
									placeholder="blurred"
									layout="fullWidth"
									className="w-full mx-auto border-[10px] border-[#e6e5d9]"
								/>
							</a>
						</LightGallery>
						<a className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000] py-4 px-6 rounded-lg bg-opacity-50" data-lg-size="3840-2160"
							data-src={`https://vimeo.com/759639919`}
							data-poster={img_2}>
							<FontAwesomeIcon icon={faPlay} className="text-5xl" />
						</a>
					</div>
					<div className="mt-5 text-center leading-[1.2] font-bold text-2xl 2xl:text-3xl mb-5">
						EXCERPT: FRANK VACANTI OF WINTERLAND PRODUCTIONS
					</div>
				</div>
				<div className="xl:col-span-1">
					<div className="relative">

						<LightGallery
							speed={500}
							plugins={[lgZoom, lgVideo, lgRotate]}
							download={true}
							mobileSettings={{
								controls: false,
								showCloseIcon: true,
								rotate: false,
							}}
						>
							<a className={`item group relative lazy`}
								data-lg-size="3840-2160"
								data-src={`https://vimeo.com/657659506`}
								data-poster={img_1}
							>
								<StaticImage
									src="../../assets/img-05.png"
									alt="Worn and Faded"
									placeholder="blurred"
									layout="fullWidth"
									className="w-full mx-auto border-[10px] border-[#e6e5d9]"
								/>
							</a>
						</LightGallery>
						<a className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000] py-4 px-6 rounded-lg bg-opacity-50" data-lg-size="3840-2160"
							data-src={`https://vimeo.com/657659506`}
							data-poster={img_1}>
							<FontAwesomeIcon icon={faPlay} className="text-5xl" />
						</a>
					</div>
					<div className="mt-5 text-center leading-[1.2] font-bold text-2xl 2xl:text-3xl mb-5">
						A BRIEF HISTORY OF THE BAND SHIRT
					</div>
				</div>
			</div>


		</section>

	)
}

export default BlockVideo
