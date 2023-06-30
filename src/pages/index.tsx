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
                <div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 2</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider_4">
          <div className="my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
            <div className="overflow-scroll max-h-screen py-2 xl:mt-10">
              <div className="my-auto w-full mx-auto mt-20 xl:grid xl:grid-cols-3">
                <div className="xl:col-span-1 xl:pr-10">
                  <div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5">
                    What is the meaning of your average teenager proudly wearing a replica of a t-shirt for a concert twenty-five years before their birth?
                  </div>
                  <div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg">
                  For nearly 60 years, the band tee has been an essential form of self-expression for young people. This film will track not only the birth and evolution of the band tee and how it became a ubiquitous part of fashion but how and why it became the ultimate symbol of nonconformity. 
                  </div>
                </div>
                <div className="xl:col-span-2 xl:pl-10">
                  <StaticImage
                    src="../assets/teen.png"
                    alt="Worn and Faded"
                    placeholder="blurred"
                    layout="fullWidth"
                    className="w-full mx-auto"
                  />
                </div>
              </div>
              <div className="liner mt-10 lg:mt-20 mb-20 text-center">
                <div className="liner__inner"></div>
                <div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 3</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider_5">
          <div className="my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
            <div className="overflow-scroll max-h-screen py-2 xl:mt-10">
              <div className="my-auto w-full mx-auto mt-20 xl:grid xl:grid-cols-3">
                <div className="xl:col-span-1 xl:pr-10">
                  <div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5">
                  Initially, the band tee faced an uphill battle to gain acceptance as many bands felt that selling them was proof that they had “sold out.”  
                  </div>
                  <div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg">
                  Bill Graham was a legendary concert promoter and manager in the Bay Area who worked with bands such as the Grateful Dead, Santana, and Jefferson Airplane.  He changed their perceptions about the band tee and convinced them that they were an essential tool for promotion and income. He founded the first music merchandising company Winterland Productions, in 1973.
                  </div>
                </div>
                <div className="xl:col-span-2 xl:pl-10">
                  <StaticImage
                    src="../assets/guy.png"
                    alt="Worn and Faded"
                    placeholder="blurred"
                    layout="fullWidth"
                    className="w-full mx-auto"
                  />
                </div>
              </div>
              <div className="liner mt-10 lg:mt-20 mb-20 text-center">
                <div className="liner__inner"></div>
                <div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 4</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider_6">
          <div className="my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
            <div className="overflow-scroll max-h-screen py-2 xl:mt-10">
              <div className="my-auto w-full mx-auto mt-20 xl:grid xl:grid-cols-3">
                <div className="xl:col-span-1 xl:pr-10">
                  <div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5">
                  By the mid 1970s, the band shirt had become a fashion icon worn by the likes of David Bowie, Iggy Pop, and John Lennon.
                  </div>
                  <div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg">
                  Fans began using the tee as a tool of self-expression as timeless designs by the likes of the Ramones, Motorhead, the Rolling Stones, and Joy Division were created. At the end of the decade, the sight of a mech table at a concert was not uncommon.
                  </div>
                </div>
                <div className="xl:col-span-2 xl:pl-10">
                  <StaticImage
                    src="../assets/art.png"
                    alt="Worn and Faded"
                    placeholder="blurred"
                    layout="fullWidth"
                    className="w-full mx-auto"
                  />
                </div>
              </div>
              <div className="liner mt-10 lg:mt-20 mb-20 text-center">
                <div className="liner__inner"></div>
                <div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 5</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider_7">
          <div className="my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
            <div className="overflow-scroll max-h-screen py-2 xl:mt-10">
              <div className="my-auto w-full mx-auto mt-20 xl:grid xl:grid-cols-3">
                <div className="xl:col-span-1 xl:pr-10">
                  <div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5">
                  In the 1980s, the band tee had become an essential tool of identity and rebellion for young people in their quest to individuate themselves.
                  </div>
                  <div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg">
                  The golden age of the band tee was ushered in with over-the-top Heavy Metal and Punk tees taking center stage in high school hallways and shopping malls everywhere.  Iconic designs by Metallica, Run DMC, Black Flag, and Iron Maiden became like uniforms to many young people.
                  </div>
                </div>
                <div className="xl:col-span-2 xl:pl-10">
                  <StaticImage
                    src="../assets/sport.png"
                    alt="Worn and Faded"
                    placeholder="blurred"
                    layout="fullWidth"
                    className="w-full mx-auto"
                  />
                </div>
              </div>
              <div className="liner mt-10 lg:mt-20 mb-20 text-center">
                <div className="liner__inner"></div>
                <div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 6</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider_8">
          <div className="my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
            <div className="overflow-scroll max-h-screen py-2 xl:mt-10">
              <div className="my-auto w-full mx-auto mt-20 xl:grid xl:grid-cols-3">
                <div className="xl:col-span-1 xl:pr-10">
                  <div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5">
                  As the new century dawned, vintage band shirts became some of the most desirable and collectible items in fashion. 
                  </div>
                  <div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg">
                  Celebrities such as the Kardashians, Justin Bieber, and Miley Cyrus sported tees from heavy metal bands they likely had never listened to and sent prices soaring. This inspired metal-inspired designs by the likes of Chanel and Balenciaga and even appeared on catwalks in Paris and London.
                  </div>
                </div>
                <div className="xl:col-span-2 xl:pl-10">
                  <StaticImage
                    src="../assets/young.png"
                    alt="Worn and Faded"
                    placeholder="blurred"
                    layout="fullWidth"
                    className="w-full mx-auto"
                  />
                </div>
              </div>
              <div className="liner mt-10 lg:mt-20 mb-20 text-center">
                <div className="liner__inner"></div>
                <div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 7</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider_9">
          <div className="my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
            <div className="overflow-scroll max-h-screen py-2 xl:mt-10">
              <div className="my-auto w-full mx-auto mt-20 xl:grid xl:grid-cols-3">
                <div className="xl:col-span-1 xl:pr-10">
                  <div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5">
                  The “faux vintage” band tee is a common sight at H&M, Target, and other retailers nowadays. 
                  </div>
                  <div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg">
                  Not everyone can afford to shell out hundreds or thousands of dollars for an authentic vintage band tee. To satiate the public’s demand for these tees, which has never been higher, bands and retailers made their own vintage-style tees.
                  </div>
                </div>
                <div className="xl:col-span-2 xl:pl-10">
                  <StaticImage
                    src="../assets/tshirt2.png"
                    alt="Worn and Faded"
                    placeholder="blurred"
                    layout="fullWidth"
                    className="w-full mx-auto"
                  />
                </div>
              </div>
              <div className="liner mt-10 lg:mt-20 mb-20 text-center">
                <div className="liner__inner"></div>
                <div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 8</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider_10">
          <div className="my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
            <div className="overflow-scroll max-h-screen py-2 xl:mt-10">
              <div className="my-auto w-full mx-auto mt-20 xl:grid xl:grid-cols-3">
                <div className="xl:col-span-1 xl:pr-10">
                  <div className="leading-[1.2] font-bold text-2xl xl:text-3xl 3xl:text-4xl 6xl:text-5xl 11xl:text-6xl mb-5">
                  In 2021, this Grateful Dead tee from 1967 sold for over $17K at a Sotheby’s auction, making it the most expensive tee ever sold.
                  </div>
                  <div className="bg-main-100 text-white p-3 text-center font-normal font-a xl:text-lg">
                  Passionate collectors still hunt for rare originals at flea markets, garage sales, and thrift stores across the globe. With music sales revenue decreasing over the last decade, sales of tees have become economically essential to both independent and mainstream artists. 
                  </div>
                </div>
                <div className="xl:col-span-2 xl:pl-10">
                  <StaticImage
                    src="../assets/tshirt3.png"
                    alt="Worn and Faded"
                    placeholder="blurred"
                    layout="fullWidth"
                    className="w-full mx-auto"
                  />
                </div>
              </div>
              <div className="liner mt-10 lg:mt-20 mb-20 text-center">
                <div className="liner__inner"></div>
                <div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 9</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider_11">
          <div className="my-auto px-10 sm:px-15 lg:px-20 3xl:px-30 mx-auto w-full">
            <div className="overflow-scroll max-h-screen py-2 xl:mt-10">
              <div className="my-auto w-full mx-auto mt-20">
                <div className="text-center uppercase text-main-100 py-5 font-bold text-3xl sm:text-5xl md:text-7xl lg:text-9xl 9xl:text-11xl 13xl:text-13xl text-stroke-main">Interview</div>
                <div className="my-auto w-full mx-auto mt-20 xl:grid xl:grid-cols-3 xl:gap-10">
                <div className="xl:col-span-1">
                  <h2 className="uppercase">Mick Jagger</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">The Rolling Stones</p>

                  <h2 className="uppercase">Chuck D</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Founder of Public Enemy, author and activist</p>

                  <h2 className="uppercase">Jack White</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Guitarist, The White Stripes, Solo Artist</p>

                  <h2 className="uppercase">Derek Riggs</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Artist and creator of the most famous band mascot Iron Maiden’s ‘Eddie’</p>

                  <h2 className="uppercase">Brian “Pushead” Schroader</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Artist and creator of hundred of Metallica and Misfits tees</p>

                  <h2 className="uppercase">Raymond Pettibon</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Artist and creator of the Black Flag logo</p>

                  <h2 className="uppercase">Penelope Spheeris</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Film director, producer, and screenwriter</p>

                  <h2 className="uppercase">Malcom Gladwell</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Journalist, author, podcaster, public speaker </p>
                  </div>
                  <div className="xl:col-span-1">
                  <h2 className="uppercase">QuestLove</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Musician, record producer, DJ, filmmaker</p>

                  <h2 className="uppercase">Taylor Swift</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Singer & Songwriter, Fashion Icon</p>

                  <h2 className="uppercase">Tom Morello</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Guitarist, Rage Against the Machine</p>

                  <h2 className="uppercase">Joan Jett</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Singer, guitarist, record producer and actress</p>

                  <h2 className="uppercase">Henry Rollins</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Singer, Black Flag/Rollins Band</p>

                  <h2 className="uppercase">Alex & David Graham</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Sons of Promoter Bill Graham</p>

                  <h2 className="uppercase">Frank Vacanti</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Production Manager for Winterland Productions</p>

                  <h2 className="uppercase">Peter Patagno</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Graphic Designer for world renowned Hipgnosis Designs</p>
                  </div>
                  <div className="xl:col-span-1">
                  <h2 className="uppercase">Dave Grohl</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Foo Fighters/Nirvana</p>

                  <h2 className="uppercase">Billie Eilish</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Singer & Songwriter, Fashion Icon</p>

                  <h2 className="uppercase">Nicky Panicci</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Vintage tee collector and historian</p>

                  <h2 className="uppercase">Slash</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Musician and guitarist, Guns N' Roses</p>

                  <h2 className="uppercase">Avigail Collins</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Stylist to celebs  including Kim  Kardashian</p>

                  <h2 className="uppercase">Patrick Klima</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Owner of Wyco Vintage, a Kansas City store featuring the world’s largest collections of vintage band shirts</p>

                  <h2 className="uppercase">Dean Delray</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Comedian, podcaster and vintage tee enthusiast</p>

                  <h2 className="uppercase">Chuck Klosterman</h2>
                  <p className="mb-4 font-normal font-a xl:text-lg">Author and Social Commentator</p>
                  </div>

                </div>
              </div>
              <div className="liner mt-10 lg:mt-20 mb-20 text-center">
                <div className="liner__inner"></div>
                <div className="uppercase text-main-100 py-5 font-bold text-lg lg:text-xl 3xl:text-2xl 6xl:text-3xl 11xl:text-4xl">Worn & Faded: The Untold History of the Band Tee • 10</div>
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
