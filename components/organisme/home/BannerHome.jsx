"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { BANNER_HERO_CONTENT } from "@/contents/bannerHeroContent";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BannerHome() {
	const router = useRouter();
	return (
		<section className="pt-10">
			<Swiper
				effect={"coverflow"}
				modules={[Pagination, EffectCoverflow, Autoplay]}
				autoplay={{ delay: 2000 }}
				pagination={{ clickable: true }}
				direction="horizontal"
				className=" swiper_container banner_container   "
				loop={true}
				grabCursor={true}
				slidesPerView={"auto"}
				centeredSlides={true}
				spaceBetween={5}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
					slideShadows: false,
				}}>
				{BANNER_HERO_CONTENT.map((item, i) => (
					<SwiperSlide
						className="max-sm:scale-90"
						onClick={() => router.push(`/ticket/detail-event?id=${item.id}`)}
						key={i}>
						<Image
							width={350}
							height={300}
							alt=""
							src={item.image}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
