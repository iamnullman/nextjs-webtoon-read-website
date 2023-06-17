import { NextSeo } from 'next-seo';
import MiniCard from "@/components/Card/Mini";
import { Swiper, SwiperSlide } from "swiper/react";
import MangaCard from "@/components/Card/MangaCard";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import SlideCard from '@/components/Card/SlideCard';

export default function Home() {
  return (
    <>
      <NextSeo title={"Home"} />
      <div className="flex flex-col items-center justify-center px-10 -mt-8 lg:-mt-0 mb-24">
        <div className="w-full">



          {/* CAROUSEL */}

          <div className="relative mt-12 px-6 mx-auto">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              modules={[Autoplay, Pagination]}
              className="latestt"
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
                enabled: true
              }}
            >
              <SwiperSlide>
                <SlideCard />
              </SwiperSlide>
              <SwiperSlide>
                <SlideCard />
              </SwiperSlide>
              <SwiperSlide>
                <SlideCard />
              </SwiperSlide>
              <SwiperSlide>
                <SlideCard />
              </SwiperSlide>
              <SwiperSlide>
                <SlideCard />
              </SwiperSlide>

            </Swiper>
          </div>

          {/* Last Added Chapters */}
          <div className="mt-32 lg:ml-0 -ml-4">
            <div className="flex justify-between">
              <div id="title">
                <h1 className="text-2xl font-semibold">
                  Last Added Chapters
                </h1>
              </div>
            </div>
            <div className="mt-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}

                modules={[Autoplay, Pagination]}
                className="historyManga"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
              >
                <SwiperSlide>
                  <MangaCard />
                </SwiperSlide>
                <SwiperSlide>
                  <MangaCard />
                </SwiperSlide>
                <SwiperSlide>
                  <MangaCard />
                </SwiperSlide>
                <SwiperSlide>
                  <MangaCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* POPULAR SERIES */}
          <div className="mt-16 lg:ml-0 -ml-4">
            <div className="flex justify-between">
              <div id="title">
                <h1 className="text-2xl font-semibold">
                  Popular Series
                </h1>
              </div>
            </div>
            <div className="mt-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}

                modules={[Autoplay, Pagination]}
                className="populerManga"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
              >
                <SwiperSlide>
                  <MiniCard />
                </SwiperSlide>
                <SwiperSlide>
                  <MiniCard />
                </SwiperSlide>
                <SwiperSlide>
                  <MiniCard />
                </SwiperSlide>
                <SwiperSlide>
                  <MiniCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="mt-8 lg:ml-0 -ml-4">
            <div className="flex justify-between">
              <div id="title">
                <h1 className="text-2xl font-semibold">
                  Last Added Mangas
                </h1>
              </div>
            </div>
            <div className="mt-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}

                modules={[Autoplay, Pagination]}
                className="latestManga"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
              >
                <SwiperSlide>
                  <MangaCard />
                </SwiperSlide>
                <SwiperSlide>
                  <MangaCard />
                </SwiperSlide>
                <SwiperSlide>
                  <MangaCard />
                </SwiperSlide>
                <SwiperSlide>
                  <MangaCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}